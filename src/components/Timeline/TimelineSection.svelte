<script>
import { locale } from '$lib/translations';

 import { LayerCake, Svg, Html } from 'layercake';
 import TimelineRow from "./TimelineRow.svelte";
 import AxisX from '../AxisX.svelte';
 import { groupBy, tField } from "../../utils";

 export let items;
 export let rowGroupingVar;
 export let xScale;
 export let data
 export let getItemLink;
 export let getItemLabel;

//  console.log(items)

 const byRow = groupBy(items, rowGroupingVar)

 let h;
//  $: console.log(w, h)

//  $: console.log(items)

// $: console.log(byRow)

</script>

<div class='chart-container' style:height={`${h}px`}>
 <LayerCake
   data={data}
   x={"date"}
   xScale={xScale}
   let:width
   >
   <Svg>
    <AxisX />

   </Svg>
   <Html>
    <div class="data-container" bind:clientHeight={h}>
     {#each Object.entries(byRow) as [title, positions],i}
      <TimelineRow title={tField(positions[0], rowGroupingVar.split('_')[0], $locale)} {positions} {getItemLink} {getItemLabel} {rowGroupingVar} {i}/>
     {/each}
    </div>
   </Html>
 </LayerCake> 
</div>

<style lang="scss">
.chart-container {
  width: calc(100% - #{$timeline-title-width});
  margin: 5px 0 0;
  height: 200px;
  transform: translateX($timeline-title-width);
 }

 .data-container {
  // padding-top: 5px;
  // margin-top: 5px;
  /* overflow: hidden; */

  /* border-top: 1px solid #E6E6EB; */
 }
</style>