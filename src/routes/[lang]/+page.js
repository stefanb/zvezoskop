import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';


// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function load({ params }) {
 const { lang } = params;

 if (lang !== 'si' && lang !== 'en') {
  throw redirect(302, `${base}/si`);
 }
}
