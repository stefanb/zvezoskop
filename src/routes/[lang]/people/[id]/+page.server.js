import people from '$lib/data/people.json';
import { sineIn } from 'svelte/easing';

export const prerender = true;

export function entries() {
 const en = people.map(({ id }) => ({ id, lang: "en" }));
 const si = people.map(({ id }) => ({ id, lang: "si" }));

 return [...en, ...si]
}
