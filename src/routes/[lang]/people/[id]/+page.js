
import { error } from '@sveltejs/kit';
import people from '$lib/data/people.json';
import { translate, locale } from '$lib/translations';
import { getPositionLabel } from '../../../../utils';
import { page } from '$app/stores';


function readJsonFile(file) {
	const reader = new FileReader();
	return new Promise((resolve, reject) => {
					reader.onload = () => resolve(JSON.parse(reader.result));
					reader.onerror = reject;
					reader.readAsText(file);
	});
}


export async function load({ params }) {
 const { id, lang } = params;

 const bio = people.find(d => d.id === id);
	const path = '$lib/data/cv.json'

	// const url = `/src/data/posts/${slug}.json`
    // const cv = await readJsonFile(path) 

	// hacky hacky hacky
	const cv = 
		(id === '1' && (await import('$lib/data/cv/1.json')).default) ||
		(id === '2' && (await import('$lib/data/cv/2.json')).default) ||
		(id === '3' && (await import('$lib/data/cv/3.json')).default) ||
		(id === '4' && (await import('$lib/data/cv/4.json')).default) ||
		(id === '5' && (await import('$lib/data/cv/5.json')).default) ||
		(id === '6' && (await import('$lib/data/cv/6.json')).default) ||
		(id === '7' && (await import('$lib/data/cv/7.json')).default) ||
		(id === '8' && (await import('$lib/data/cv/8.json')).default) ||
		(id === '9' && (await import('$lib/data/cv/9.json')).default) ||
		(id === '10' && (await import('$lib/data/cv/10.json')).default) ||
		(id === '11' && (await import('$lib/data/cv/11.json')).default) ||
		(id === '12' && (await import('$lib/data/cv/12.json')).default) ||
		(id === '13' && (await import('$lib/data/cv/13.json')).default) ||
		(id === '14' && (await import('$lib/data/cv/14.json')).default) ||
		(id === '15' && (await import('$lib/data/cv/15.json')).default) ||
		(id === '16' && (await import('$lib/data/cv/16.json')).default) ||
		(id === '17' && (await import('$lib/data/cv/17.json')).default) ||
		(id === '18' && (await import('$lib/data/cv/18.json')).default) ||
		(id === '19' && (await import('$lib/data/cv/19.json')).default) ||
		(id === '20' && (await import('$lib/data/cv/20.json')).default) ||
		(id === '21' && (await import('$lib/data/cv/21.json')).default) ||
		(id === '22' && (await import('$lib/data/cv/22.json')).default) ||
		(id === '23' && (await import('$lib/data/cv/23.json')).default) ||
		(id === '24' && (await import('$lib/data/cv/24.json')).default) ||
		(id === '25' && (await import('$lib/data/cv/25.json')).default) ||
		(id === '26' && (await import('$lib/data/cv/26.json')).default) ||
		(id === '27' && (await import('$lib/data/cv/27.json')).default) ||
		(id === '28' && (await import('$lib/data/cv/28.json')).default) ||
		(id === '29' && (await import('$lib/data/cv/29.json')).default) ||
		(id === '30' && (await import('$lib/data/cv/30.json')).default) ||
		(id === '31' && (await import('$lib/data/cv/31.json')).default) ||
		(id === '32' && (await import('$lib/data/cv/32.json')).default) ||
		(id === '33' && (await import('$lib/data/cv/33.json')).default) ||
		(id === '34' && (await import('$lib/data/cv/34.json')).default) ||
		(id === '35' && (await import('$lib/data/cv/35.json')).default) ||
		(id === '36' && (await import('$lib/data/cv/36.json')).default) ||
		(id === '37' && (await import('$lib/data/cv/37.json')).default) ||
		(id === '38' && (await import('$lib/data/cv/38.json')).default) ||
		(id === '39' && (await import('$lib/data/cv/39.json')).default) ||
		(id === '40' && (await import('$lib/data/cv/40.json')).default) ||
		(id === '41' && (await import('$lib/data/cv/41.json')).default) ||
		(id === '42' && (await import('$lib/data/cv/42.json')).default) ||
		(id === '43' && (await import('$lib/data/cv/43.json')).default) ||
		(id === '44' && (await import('$lib/data/cv/44.json')).default) ||
		(id === '45' && (await import('$lib/data/cv/45.json')).default) ||
		(id === '46' && (await import('$lib/data/cv/46.json')).default) ||
		(id === '47' && (await import('$lib/data/cv/47.json')).default) ||
		(id === '48' && (await import('$lib/data/cv/48.json')).default) ||
		(id === '49' && (await import('$lib/data/cv/49.json')).default) ||
		(id === '50' && (await import('$lib/data/cv/50.json')).default) ||
		(id === '51' && (await import('$lib/data/cv/51.json')).default) ||
		(id === '52' && (await import('$lib/data/cv/52.json')).default) ||
		(id === '53' && (await import('$lib/data/cv/53.json')).default) ||
		(id === '54' && (await import('$lib/data/cv/54.json')).default) ||
		(id === '55' && (await import('$lib/data/cv/55.json')).default) ||
		(id === '56' && (await import('$lib/data/cv/56.json')).default) ||
		(id === '57' && (await import('$lib/data/cv/57.json')).default) ||
		(id === '58' && (await import('$lib/data/cv/58.json')).default) ||
		(id === '59' && (await import('$lib/data/cv/59.json')).default) ||
		(id === '60' && (await import('$lib/data/cv/60.json')).default) ||
		(id === '61' && (await import('$lib/data/cv/61.json')).default) ||
		(id === '62' && (await import('$lib/data/cv/62.json')).default) ||
		(id === '63' && (await import('$lib/data/cv/63.json')).default) ||
		(id === '64' && (await import('$lib/data/cv/64.json')).default) ||
		(id === '65' && (await import('$lib/data/cv/65.json')).default) ||
		(id === '66' && (await import('$lib/data/cv/66.json')).default) ||
		(id === '67' && (await import('$lib/data/cv/67.json')).default) ||
		(id === '68' && (await import('$lib/data/cv/68.json')).default) ||
		(id === '69' && (await import('$lib/data/cv/69.json')).default) ||
		(id === '70' && (await import('$lib/data/cv/70.json')).default) ||
		(id === '71' && (await import('$lib/data/cv/71.json')).default) ||
		(id === '72' && (await import('$lib/data/cv/72.json')).default) ||
		(id === '73' && (await import('$lib/data/cv/73.json')).default) ||
		(id === '74' && (await import('$lib/data/cv/74.json')).default) ||
		(id === '75' && (await import('$lib/data/cv/75.json')).default) ||
		(id === '76' && (await import('$lib/data/cv/76.json')).default) ||
		(id === '77' && (await import('$lib/data/cv/77.json')).default) ||
		(id === '78' && (await import('$lib/data/cv/78.json')).default) ||
		(id === '79' && (await import('$lib/data/cv/79.json')).default) ||
		(id === '80' && (await import('$lib/data/cv/80.json')).default) ||
		(id === '81' && (await import('$lib/data/cv/81.json')).default) ||
		(id === '82' && (await import('$lib/data/cv/82.json')).default) ||
		(id === '83' && (await import('$lib/data/cv/83.json')).default) ||
		(id === '84' && (await import('$lib/data/cv/84.json')).default) ||
		(id === '85' && (await import('$lib/data/cv/85.json')).default) ||
		(id === '86' && (await import('$lib/data/cv/86.json')).default) ||
		(id === '87' && (await import('$lib/data/cv/87.json')).default) ||
		(id === '88' && (await import('$lib/data/cv/88.json')).default) ||
		(id === '89' && (await import('$lib/data/cv/89.json')).default) ||
		(id === '90' && (await import('$lib/data/cv/90.json')).default) ||
		(id === '91' && (await import('$lib/data/cv/91.json')).default) ||
		(id === '92' && (await import('$lib/data/cv/92.json')).default) ||
		(id === '93' && (await import('$lib/data/cv/93.json')).default) ||
		(id === '94' && (await import('$lib/data/cv/94.json')).default) ||
		(id === '95' && (await import('$lib/data/cv/95.json')).default) ||
		(id === '96' && (await import('$lib/data/cv/96.json')).default) ||
		// (id === '97' && (await import('$lib/data/cv/97.json')).default) ||
		(id === '98' && (await import('$lib/data/cv/98.json')).default) ||
		(id === '99' && (await import('$lib/data/cv/99.json')).default) ||
		(id === '100' && (await import('$lib/data/cv/100.json')).default) ||
		(id === '101' && (await import('$lib/data/cv/101.json')).default) ||
		(id === '102' && (await import('$lib/data/cv/102.json')).default) ||
		(id === '103' && (await import('$lib/data/cv/103.json')).default) ||
		(id === '104' && (await import('$lib/data/cv/104.json')).default) ||
		(id === '105' && (await import('$lib/data/cv/105.json')).default) ||
		(id === '106' && (await import('$lib/data/cv/106.json')).default) ||
		(id === '107' && (await import('$lib/data/cv/107.json')).default) ||
		(id === '108' && (await import('$lib/data/cv/108.json')).default) ||
		(id === '109' && (await import('$lib/data/cv/109.json')).default) ||
		(id === '110' && (await import('$lib/data/cv/110.json')).default) ||
		(id === '111' && (await import('$lib/data/cv/111.json')).default) ||
		(id === '112' && (await import('$lib/data/cv/112.json')).default) ||
		(id === '113' && (await import('$lib/data/cv/113.json')).default) ||
		(id === '114' && (await import('$lib/data/cv/114.json')).default) ||
		(id === '115' && (await import('$lib/data/cv/115.json')).default) ||
		(id === '116' && (await import('$lib/data/cv/116.json')).default) ||
		(id === '117' && (await import('$lib/data/cv/117.json')).default) ||
		(id === '118' && (await import('$lib/data/cv/118.json')).default) ||
		(id === '119' && (await import('$lib/data/cv/119.json')).default) ||
		(id === '120' && (await import('$lib/data/cv/120.json')).default) ||
		(id === '121' && (await import('$lib/data/cv/121.json')).default) ||
		(id === '122' && (await import('$lib/data/cv/122.json')).default) ||
		(id === '123' && (await import('$lib/data/cv/123.json')).default) ||
		(id === '124' && (await import('$lib/data/cv/124.json')).default) ||
		(id === '125' && (await import('$lib/data/cv/125.json')).default) ||
		(id === '126' && (await import('$lib/data/cv/126.json')).default) ||
		(id === '127' && (await import('$lib/data/cv/127.json')).default) ||
		(id === '128' && (await import('$lib/data/cv/128.json')).default) ||
		(id === '129' && (await import('$lib/data/cv/129.json')).default) ||
		(id === '130' && (await import('$lib/data/cv/130.json')).default) ||
		(id === '131' && (await import('$lib/data/cv/131.json')).default) ||
		(id === '132' && (await import('$lib/data/cv/132.json')).default) ||
		(id === '133' && (await import('$lib/data/cv/133.json')).default) ||
		(id === '134' && (await import('$lib/data/cv/134.json')).default) ||
		(id === '135' && (await import('$lib/data/cv/135.json')).default) ||
		(id === '136' && (await import('$lib/data/cv/136.json')).default) ||
		(id === '137' && (await import('$lib/data/cv/137.json')).default) ||
		(id === '138' && (await import('$lib/data/cv/138.json')).default) ||
		(id === '139' && (await import('$lib/data/cv/139.json')).default) ||
		(id === '140' && (await import('$lib/data/cv/140.json')).default) ||
		(id === '141' && (await import('$lib/data/cv/141.json')).default) ||
		(id === '142' && (await import('$lib/data/cv/142.json')).default) ||
		(id === '143' && (await import('$lib/data/cv/143.json')).default) ||
		(id === '144' && (await import('$lib/data/cv/144.json')).default) ||
		(id === '145' && (await import('$lib/data/cv/145.json')).default) ||
		(id === '146' && (await import('$lib/data/cv/146.json')).default) ||
		(id === '147' && (await import('$lib/data/cv/147.json')).default) ||
		(id === '148' && (await import('$lib/data/cv/148.json')).default) ||
		(id === '149' && (await import('$lib/data/cv/149.json')).default) ||
		(id === '150' && (await import('$lib/data/cv/150.json')).default) ||
		(id === '151' && (await import('$lib/data/cv/151.json')).default) ||
		(id === '152' && (await import('$lib/data/cv/152.json')).default) ||
		(id === '153' && (await import('$lib/data/cv/153.json')).default) ||
		(id === '154' && (await import('$lib/data/cv/154.json')).default) ||
		(id === '155' && (await import('$lib/data/cv/155.json')).default) ||
		(id === '156' && (await import('$lib/data/cv/156.json')).default) ||
		(id === '157' && (await import('$lib/data/cv/157.json')).default) ||
		(id === '158' && (await import('$lib/data/cv/158.json')).default) ||
		(id === '159' && (await import('$lib/data/cv/159.json')).default) ||
		(id === '160' && (await import('$lib/data/cv/160.json')).default) ||
		// (id === '161' && (await import('$lib/data/cv/161.json')).default) ||
		(id === '162' && (await import('$lib/data/cv/162.json')).default) ||
		(id === '163' && (await import('$lib/data/cv/163.json')).default) ||
		(id === '164' && (await import('$lib/data/cv/164.json')).default) ||
		(id === '165' && (await import('$lib/data/cv/165.json')).default) ||
		(id === '166' && (await import('$lib/data/cv/166.json')).default)

 if (!bio) {
		// throw redirect(302, `/${lang}`);
	}

	const title_si = bio.name
	const title_en = bio.name

	const description_en = `${title_en} is a ${bio.position} in the ${bio.institution_en}`;
	const description_si = `${title_si} je ${getPositionLabel(bio.position, bio.gender, "si")} na ${bio.institution_si}`
 // console.log(cv[id], bio)
 return ({ ...bio, cv, title_si, title_en, description_si, description_en })
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }