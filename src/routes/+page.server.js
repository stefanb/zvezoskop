import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

 
export function load({params}) {
//  console.log(params)
  throw redirect(302, `${base}/si`);
}