<script>
 import { getContext } from "svelte";
 import { LayerCake, Svg } from "layercake";
 import Bar from "./Bar.svelte";

 export let selectedIndex;
 export let xOffset;
 export let color;
 export let setSelectedIndex;

 const { data, xGet, width, zGet, yGet, xScale, yDomain, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

</script>

{#each $data as bar, i (bar.id)}
 <Bar index={i} {...bar} selected={selectedIndex === i} {setSelectedIndex} {xOffset} {color} />
{/each}

<style>

 
 
</style>