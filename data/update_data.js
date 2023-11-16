import {
 getAuthToken,
 getSpreadSheetValues
} from './googleSheetsService.js';
import fs from 'fs'
import moment from 'moment'

import { groupBy, slugify } from './util.js';
import { start } from 'repl';

// const spreadsheetId = process.argv[2];
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
// const sheetName = 'test';

async function processSpreadSheetValues(sheetName) {
 try {
  const auth = await getAuthToken();
  const response = await getSpreadSheetValues({
    spreadsheetId,
    sheetName,
    auth
  })

  const columns = response.data.values.shift(1);

  const jsonArray = response.data.values
  .filter(d => d[0] !== '')
  .map(d => {
    const retObj = {};
    columns.forEach((columnKey, i) => {
      retObj[columnKey] = d[i];
    })
    return retObj
  })

  // console.log(jsonArray)

  

  return jsonArray
 } catch(error) {
   console.log(error.message, error.stack);
 }
}

const writeFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), {}, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })
}

const cleanDates = (prefix, day, month, year) => {
  const splitDaySlash = day?.split("/") || []
  const splitDayDot = day?.split(".") || []
  const splitDay = splitDaySlash.length > splitDayDot.length ? splitDaySlash : splitDayDot

  let cleanedDay
  let cleanedMonth

  // Temporary fix to handle date inconsistencies in the sheet
  // if (!month && splitDay?.length && +splitDay[0] > 12) {
    cleanedDay = splitDay[0]
    cleanedMonth = splitDay[1]
  // } else {
  //   cleanedDay = splitDay[1] && splitDay[1].length > 0 ? +splitDay[1] : undefined
  //   cleanedMonth = month || splitDay?.[0]
  // }

  
  const cleanedYear = year || splitDay?.[2]

  return({
    [`${prefix}_day`]: cleanedDay ? +cleanedDay : undefined,
    [`${prefix}_month`]: cleanedMonth ? +cleanedMonth - 1 : undefined,
    [`${prefix}_year`]: cleanedYear ? +cleanedYear : undefined,
  })
}


const findStartCompareDate = ({start_day, start_month, start_year}) => {
  // console.log(start_day, start_month, start_year)
  if (!start_year) {
    return;
  }

  let startCompareDate
  let startDisplayDate
  let startMonthUncertain = false
  let startDayUncertain = false

  if (!start_day && !start_month) {
    startDisplayDate = moment((start_year).toString())
    startCompareDate = moment((start_year).toString()).add(1, 'years').subtract(1, 'seconds')
    startMonthUncertain = true
    startDayUncertain = true
  } else if (!start_day) {
    startDisplayDate = moment([start_year.toString(), (start_month).toString()])
    startCompareDate = moment([start_year.toString(), (start_month).toString()]).add(1, 'months').subtract(1, 'seconds')
    startDayUncertain = true
  } else {
    startDisplayDate = moment([start_year.toString(), (start_month).toString(), start_day.toString()])
    startCompareDate = moment([start_year.toString(), (start_month).toString(), start_day.toString()])
  }

  // console.log('compare', startCompareDate.format('MMMM Do YYYY'))
  // console.log('display', startDisplayDate.format('MMMM Do YYYY'))
  return ({ startCompareDate, startDisplayDate, startMonthUncertain, startDayUncertain })
}

const findEndCompareDate = ({end_day, end_month, end_year}) => {
  if (!end_year) {
    return;
  }
  // console.log(end_day, end_month, end_year)

  let endCompareDate
  let endDisplayDate
  let endMonthUncertain = false
  let endDayUncertain = false

  if (!end_day && !end_month) {
    endDisplayDate = moment((end_year).toString()).add(1, 'years').subtract(1, 'seconds')
    endCompareDate = moment(end_year.toString())
    endMonthUncertain = true
    endDayUncertain = true
  } else if (!end_day) {
    endDisplayDate = moment([end_year.toString(), (end_month).toString()]).add(1, 'months').subtract(1, 'seconds')
    endCompareDate = moment([end_year.toString(), (end_month).toString()])
    endDayUncertain = true
  } else {
    endDisplayDate = moment([end_year.toString(), (end_month).toString(), end_day.toString()])
    endCompareDate = moment([end_year.toString(), (end_month).toString(), end_day.toString()])
  }

  // console.log('compare', endCompareDate.format('MMMM Do YYYY'))
  // console.log('display', endDisplayDate.format('MMMM Do YYYY'))
  return ({ endCompareDate, endDisplayDate, endMonthUncertain, endDayUncertain })
}

async function main() {
  let people = await processSpreadSheetValues('persons_live')
  const cv = await processSpreadSheetValues('cv_live')
  let parties = await processSpreadSheetValues('parties_live')

  const cv_filtered = cv
    .filter(({ person_id }) => !!person_id)
    .map(({ start_day, start_month, start_year, end_day, end_month, end_year, institution_si, institution_department_si, ...rest}) => {
      const start = cleanDates('start', start_day, start_month, start_year)
      const end = cleanDates('end', end_day, end_month, end_year)
      const startCompareDate = findStartCompareDate(start);
      const endCompareDate = findEndCompareDate(end);

      // console.log(end)
      // console.log(endCompareDate)

      const retObj = ({
        ...rest,
        ...start,
        ...end,
        ...startCompareDate,
        ...endCompareDate,
        institution_department_si: institution_department_si?.trim(),
        institution_si: institution_si?.trim(),
      })

      delete retObj.institution_standardized_si
      delete retObj.institution_standardized_en
      delete retObj.other
      delete retObj.source

      // Object.keys(retObj).forEach(k => (!retObj[k] && retObj[k] !== undefined) && delete retObj[k]);


      return retObj
    })
    .filter(({ start_year, end_year, endDisplayDate, startDisplayDate, institution_si }) => !!start_year && !!end_year && endDisplayDate >= startDisplayDate && !!institution_si)
  
  console.log(`Found ${cv_filtered.length} cv entries with person_id and start and end years`)

  const cvByPerson = groupBy(cv_filtered, 'person_id');
  const cvByInstitution = groupBy(cv_filtered, 'institution_si');

  // console.log(cvByPerson[23])


  const findConnections = ({ id, person_id, institution_si, institution_department_si, startCompareDate, endCompareDate }) => {
    const institutionConnections = cvByInstitution[institution_si];

    if (!institutionConnections || !startCompareDate || !endCompareDate) {
      return []
    }

    return institutionConnections.filter((d) => {
      if (id === d.id || person_id === d.person_id) {
        return false;
      }
        
      if (!d.startCompareDate || !d.endCompareDate) {
        return false
      }

      if (d.startCompareDate > endCompareDate || d.endCompareDate < startCompareDate) {
        return false;
      }

      return true;
    })
  }

  let allLinks = [];
  const allCV = {};

  Object.entries(cvByPerson).map(([personId, cvItems]) => {
    let connectionCount = 0
    let allConnections = []

    
    allCV[personId] = cvItems.map((cvItem) => {
      // console.log(cvItem)
      let connections = findConnections(cvItem);
      connections = connections.map(({ person_id, ...rest }) => {
        const personData = people.find(({ id }) => id === person_id);
        // console.log(people.find(({ id }) => id === person_id), image_link);
        return ({ person_id, ...rest, image_link: personData.image_link, position: personData.position})
      })

     
      allConnections = [...allConnections, ...connections]

      return ({
        ...cvItem,
        connections
      });
    })

    let links = {}
    allConnections.forEach(({ person_id, institution_si, institution_en, show_in_network }) => {
      if (show_in_network) {
        const englishValue = !institution_en || institution_en.length === 0 ? institution_si : institution_en

        if (person_id in links) {
          if (!links[person_id].si.includes(institution_si)) {
            links[person_id].si.push(institution_si)
          }
  
          if (!links[person_id].en.includes(englishValue)) {
            links[person_id].en.push(englishValue)
          }
         
        } else {
          links[person_id] = { si: [institution_si], en: [englishValue] }
        }
      }
    })
    
    // console.log(links)

    Object.entries(links).forEach(([id, institutions]) => {
      if (+id > +personId) {
        allLinks.push({ source: personId, target: id, institutions })        
      }
    }) 



    // const uniqueConnectionIds = [...new Set(connectionIds)]

    // links = links.concat(uniqueConnectionIds.filter(id => { return +id > +personId }).map(id => ({source: personId, target: id})))

    // console.log(people[personId], personId, connectionCount)
    
    // if (people[personId]) {
    
    people.find(({id}) => id === personId).connectionCount = Object.keys(links).length

    // }
  })

  // console.log(allLinks)

  people = people.map(({ position, connectionCount, ...rest }) => ({ position: position.trim(), connectionCount: connectionCount > 0 ? connectionCount : 0, ...rest }))

  // console.log(allCV)

  

  // const connections = findConnections('Medicinska fakulteta, Univerza v Ljubljani', '2012', '2022')

  // console.log(connections)
  // console.log(Object.keys)
  // console.log(Object.keys(byInstitution).length)


  const keyedInstitutions = {}

  Object.entries(cvByInstitution).forEach(([instituion, entries]) => {
    keyedInstitutions[slugify(instituion)] = entries.map(({ person_id, ...rest }) => {
      const person = people.find(({ id }) => id === person_id)
      return ({
        curr_position: person?.position,
        image_link: person?.image_link,
        person_id,
        ...rest
      })
    });
  })

  // collect party affiliations

  parties = parties.map(({ id, party_name_si, party_name_en }) => {
    const affiliations = {}
    const cvData = keyedInstitutions[id];

    if (cvData) {
      const personIds = [...new Set(cvData.map(({ person_id }) => person_id))]

      personIds.forEach((person_id) => {
        const personCV = allCV[person_id];
  
        const personAffiliations = personCV.map(({ affiliation_type_si, affiliation_type_en }) => ({ affiliation_type_si, affiliation_type_en }))
  
        personAffiliations.forEach(({ affiliation_type_si, affiliation_type_en }) => {
          if (affiliation_type_si !== '') {
            const item = { person_id, affiliation_type_si, affiliation_type_en };
            if (affiliation_type_si in affiliations && !affiliations[affiliation_type_si].includes(item)) {
              affiliations[affiliation_type_si].push(item);
            } else {
              affiliations[affiliation_type_si] = [item]
            }
          }
        })
      })
    }

    

    return ({
      id,
      party_name_en,
      party_name_si,
      affiliations
    })
  })

  writeFile('./src/lib/data/people.json', people);
  writeFile('./src/lib/data/links.json', allLinks);
  writeFile('./src/lib/data/institutions.json', keyedInstitutions);
  // writeFile('./src/lib/data/cv.json', allCV);
  writeFile('./src/lib/data/parties.json', parties);

  Object.entries(allCV).forEach(([id, cvItems]) => {
    writeFile(`./src/lib/data/cv/${id}.json`, cvItems);
  })
}

main()