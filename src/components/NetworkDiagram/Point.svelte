
 <script>
	import { fade } from "svelte/transition";
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';


	export let id;
 export let x;
 export let y;
 export let r;

 const strokeWidth = 1;
 const stroke = '#fff';
 const tweenParameters = {
			duration: 400,
			easing: cubicOut,
	};

	const tX = tweened(x, tweenParameters);
 const tY = tweened(y, tweenParameters);

	let hovered = false;

 $: $tX = x;
 $: $tY = y;
</script>

<circle
	class="Point"
 transition:fade
 cx={$tX}
 cy={$tY}
 r={r}
 fill={hovered ? 'orange' : '#B361F3'}
 stroke='{stroke}'
 stroke-width='{strokeWidth}'
	on:mouseover={() => hovered = true}
	on:mouseout={() => hovered = false}
	on:click={() => goto(`${base}/people/${id}`)}
/>

<style lang="scss">
	.Point {
		cursor: pointer;
	}


</style>