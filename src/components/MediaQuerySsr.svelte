<!-- 
    This component sets up media queries for different breakpoints and orientations,
    and exports stores for the current breakpoint, orientation, and platform.
    It also exports constants for various mobile and tablet breakpoints.
-->
<script context="module">
	import { writable, derived } from "svelte/store";

	// Store for the current breakpoint
	export const breakpoint = writable();

	// Store for the current orientation
	export const orientation = writable();

	// Store for the current platform (based on the breakpoint)
	export const platform = derived(breakpoint, ($breakpoint) => {
		if (!$breakpoint) return;
		if ($breakpoint.includes("mobile")) {
			return "mobile";
		} else if ($breakpoint.includes("tablet")) {
			return "tablet";
		} else {
			return "desktop";
		}
	});

	// Constants for various mobile and tablet breakpoints
	export const mobileS = 360;
	export const mobileM = 500;
	export const mobileL = 640;
	export const tabletS = 655;
	export const tabletL = 915;

	// Sets up the media queries for the various breakpoints
	const setupBreakpoints = () => {
		const breakpoints = [
			{ value: "mobile-s", mediaquery: window.matchMedia(`(max-width:  ${mobileS}px)`) },
			{
				value: `mobile-m`,
				mediaquery: window.matchMedia(`(min-width:  ${mobileS + 1}px) and (max-width:  ${mobileM}px)`),
			},
			{
				value: `mobile-l`,
				mediaquery: window.matchMedia(`(min-width:  ${mobileM + 1}px) and (max-width:  ${mobileL}px)`),
			},
			{
				value: `tablet-s`,
				mediaquery: window.matchMedia(`(min-width:  ${mobileL + 1}px) and (max-width: ${tabletS}px)`),
			},
			{
				value: `tablet-l`,
				mediaquery: window.matchMedia(`(min-width: ${tabletS + 1}px) and (max-width: ${tabletL}px)`),
			},
			{ value: `desktop`, mediaquery: window.matchMedia(`(min-width: ${tabletL + 1}px)`) },
		];

		for (let key in breakpoints) {
			let b = breakpoints[key];

			//set the current breakpoint
			if (b.mediaquery.matches === true) {
				breakpoint.set(b.value);
			}
			b.mediaquery.addEventListener("change", (event) => {
				if (event.matches === true) {
					breakpoint.set(b.value);
				}
			});
		}
	};

	// Sets up the media queries for the various orientations
	const setupOrientation = () => {
		const orientations = [
			{ value: "portrait", mediaquery: window.matchMedia("(orientation: portrait)") },
			{ value: "landscape", mediaquery: window.matchMedia("(orientation: landscape)") },
		];

		for (let key in orientations) {
			let o = orientations[key];

			//set the current orientation
			if (o.mediaquery.matches === true) {
				orientation.set(o.value);
			}

			o.mediaquery.addEventListener("change", (event) => {
				if (event.matches === true) {
					orientation.set(o.value);
				}
			});
		}
	};
</script>

<script>
	import { onMount } from "svelte";

	onMount(() => {
		setupBreakpoints();
		setupOrientation();
	});
</script>
