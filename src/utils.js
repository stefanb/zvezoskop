import moment from 'moment'
import 'moment/locale/sl';

export const DATA_UPDATE_DATE = new Date('2024.2.1')

export const groupBy = function(xs, key) {
 return xs.reduce(function(rv, x) {
   (rv[x[key]] = rv[x[key]] || []).push(x);
   return rv;
 }, {});
};

export const slugify = (str) => {
 return String(str)
   .normalize('NFKD') // split accented characters into their base characters and diacritical marks
   .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
   .trim() // trim leading or trailing whitespace
   .toLowerCase() // convert to lowercase
   .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
   .replace(/\s+/g, '-') // replace spaces with hyphens
   .replace(/-+/g, '-'); // remove consecutive hyphens
}

export const colors = {
  pm: '#4600BE',
  minister: '#1599D0',
  secretary: '#31C8B0',
  mp: '#ACEC5A'
}

export const getColor = (key) => {
  // console.log(key, colors['minister'])
  return colors[key];
}

export const getTextColor = (key) => {
  if (key === 'pm') {
    return '#fff';
  }
  return "#00001E"
}

export const getDateYear = dateString => {
  if (!dateString) return;

  return new Date(dateString).getFullYear();
}

export const getDate = dateString => {
  if (!dateString) return;

  return dateString.replaceAll("/", ".")
}

export const getTimeSince = dateString => {
  if (!dateString) return;

  const difference = DATA_UPDATE_DATE - new Date(dateString);
  const days = Math.floor(difference / 86400000)
  const years = days/365


  if (years < 1) {
    return `${days} days`
  }

  return `${Math.floor(years)} years and ${days%365} days`
}


export const arrayUniqueById = (arr, key) => {

  const map = new Map(arr.map(o => [o[key],o]));
  return [...map.values()];
}

export const tField = (datum, field, locale) => {
  // console.log(datum, field, locale)
  if (locale === 'en') {
    const enFieldValue = datum[`${field}_en`]
    
    if (enFieldValue?.length > 0) {
      return enFieldValue;
    }
  }
  
  return datum[`${field}_si`]
}

export const getInitials = name => {
  if (!name) return null;

  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();

  return initials
}

export const formatDate = (item, prefix, locale) => {
  moment.locale(locale === 'en' ? 'en' : 'sl')

  const date = moment([item[`${prefix}_year`], item[`${prefix}_month`] === 0 ? '0' : item[`${prefix}_month`], item[`${prefix}_day`]].filter(d => !!d))

  if (item[`${prefix}MonthUncertain`]) {
    return date.format('YYYY')
  } else if (item[`${prefix}DayUncertain`]) {
    return date.format('MMMM YYYY')
  } else {
    return date.format('LL')
  }
}

export const displayDate = (item, prefix, locale) => {
  const date = new Date(item[`${prefix}DisplayDate`])
  if (item[`${prefix}MonthUncertain`]) {
    return date.getFullYear();
  } else if (item[`${prefix}DayUncertain`]) {
    return date.getMonth()+1 + '.' + date.getFullYear();
  } else {
    return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
  }
}


export const getYearsLabel = (item, locale, presentPlaceholder) => {
  const start = displayDate(item, 'start', locale)
  const end = item.end_year === 2100 ? presentPlaceholder : displayDate(item, 'end', locale)


  // console.log(start)
  return start === end ? start : start + ' - ' + end;
  // console.log(item)

  // if (item.start_year === item.end_year) {
  //   return item.start_year
  // }

  // return `${item.start_year} - ${item.end_year === 2100 ? presentPlaceholder : item.end_year}`
}

export const getLinearGradient = (item, color) => {
  const linearGradientStops = [];

  const monthsMultiplier = 3;
  const yearsExtent = moment(item.endDisplayDate).diff(item.startDisplayDate, 'years');
  const monthsExtent = moment(item.endDisplayDate).diff(item.startDisplayDate, 'months');

  // const 
  if (item.startMonthUncertain) {
    linearGradientStops.push("transparent")
    linearGradientStops.push(`${color} ${(1/yearsExtent) * 100}%`)
  } else if (item.startDayUncertain) {
    linearGradientStops.push("transparent")
    linearGradientStops.push(`${color} ${(1/monthsExtent * monthsMultiplier) * 100}%`)
  } else {
    linearGradientStops.push(`${color}`)
  }

  linearGradientStops.push(`${color} 50%`)

  if (item.endMonthUncertain) {
    linearGradientStops.push(`${color} ${100 - ((1/yearsExtent) * 100)}%`)
    linearGradientStops.push("transparent")
  } else if (item.endDayUncertain) {
    linearGradientStops.push(`${color} ${100 - ((1/monthsExtent * monthsMultiplier) * 100)}%`)
    linearGradientStops.push("transparent")
  } else {
    linearGradientStops.push(`${color} 100%`)
  }
  return `linear-gradient(to right, ${linearGradientStops.join(', ')})`
}

export const getPositionLabel = (position, gender, locale) => {
  if (locale === 'en') {
    if (position === 'pm') {
      return 'Prime minister'
    }
    if (position === 'mp') {
      return 'MP'
    }
    return capitalizeFirstLetter(position);
  }

  if (position === 'minister') {
    if (gender === 'F') {
      return 'ministrica'
    } 
  } else if (position === 'secretary') {
    if (gender === 'F') {
      return 'državna sekretarka'
    } else {
      return 'državni sekretar'
    }
  } else if (position === 'pm') {
    return 'predsednik vlade'
  } else if (position === 'mp') {
    if (gender === 'F') {
      return 'poslanka'
    } else {
      return 'poslanec'
    }
  }

  return position;
}

export const sortNames = (list) => {
  return list.sort((a, b) => {
    return a.name.split(/[, ]+/).pop() > b.name.split(/[, ]+/).pop() ? 1 : -1;
  })
}

export const sortInstitutions = (list) => {
  return list.sort((a, b) => {
    return a.label > b.label ? 1 : -1;
  })
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const normalizeString = str => {
  const ret = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  return ret
}