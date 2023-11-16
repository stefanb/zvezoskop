<script>
 import { getContext } from "svelte";
 import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";
 import { LayerCake, Svg } from "layercake";

 export let start_year;
 export let end_year;
 export let index;
 export let selected = false
 export let xOffset;
 export let color;
	export let setSelectedIndex;

 const { data, xGet, width, zGet, yGet, xScale, yDomain, yRange, rGet, xDomain, xRange, yScale } = getContext('LayerCake');

 const tweenParameters = {
			duration: 400,
			easing: cubicOut,
	};

	const tX = tweened(index * 10, tweenParameters);

	let hovered = false;

 $: $tX = (index - xOffset) * 10 + 5;
 $: height = $yScale(end_year === 2100 ? new Date().getFullYear() : end_year) - $yScale(start_year);
 // $: console.log($data, $yDomain, $yRange, $yScale(2010))
</script>

<rect 
 class="bar"
 x={$tX}
 y={$yScale(start_year)}
 rx=4
 width="8"
 height={height > 5 ? height : 5}
 fill={selected ? color : "#E6E6F0"}
	on:click={() => setSelectedIndex(index)}
/>

<style>

.bar {
 
}
 
 
</style>