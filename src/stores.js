import { writable } from "svelte/store";
// import { withPrevious } from 'svelte-previous';
import { page } from "$app/stores";
// import { platform } from "../../components/MediaQuerySsr.svelte";

export const selected = writable([]);
export const hovered = writable(null);

export const hideIntro = writable(false)

export const hist = writable([])

// export const [currentPage, previousPage] = withPrevious(null);

