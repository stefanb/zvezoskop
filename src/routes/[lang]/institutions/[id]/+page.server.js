import institutions from '$lib/data/institutions.json';

export const prerender = true;

export function entries() {
 const en = Object.keys(institutions).filter(i => !!i).map((id) => ({ id, lang: "en" }));
 const si = Object.keys(institutions).filter(i => !!i).map((id) => ({ id, lang: "si" }));

 return [...en, ...si];
}
