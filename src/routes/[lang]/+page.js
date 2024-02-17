import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';


// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function load({ params, url }) {
 // const { lang } = params;

 // console.log(all.url.hash)

 // if (lang !== 'si' && lang !== 'en') {
 //  throw redirect(302, `${base}/si`);
 // }

 const title_si = "Zvezoskop"
	const title_en = "Zvezoskop"

 return ({ title_si, title_en, skipIntro: url.search === '?skip-intro=true' })
}
