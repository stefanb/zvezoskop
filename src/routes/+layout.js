import { setLocale, setRoute } from '$lib/translations';
import { base } from '$app/paths';

export const prerender = true

export const load = async ({ url }) => {
  const { pathname } = url;
  const pathnameClean = pathname.replace(base, '');

  const locale = `${pathnameClean.match(/\w+?(?=\/|$)/) || ''}`;

  const route = pathnameClean.replace(new RegExp(`^/${locale}`), '');


  await setLocale(locale);
  await setRoute(route);

  return { route, locale };
};