<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import Portal from "svelte-portal";
 import TimelineConnectionRowExpanded from './TimelineConnectionRowExpanded.svelte';

 export let id;
 export let connection;
 export let refX;

 let w, h;
 let xTransforms = [];
 let xEnds = [];

 $: minXTransform = Math.min(...xTransforms);
 $: maxXEnds = Math.max(...xEnds);

//  console.log(connection)
//  $: console.log(connection.map(({ startDisplayDate, endDisplayDate }) => ({ startDisplayDate, endDisplayDate })))


 // const { xScale, xRange } = getContext('LayerCake');


 // $: startX = start_year ? $xScale(start_year) : $xRange[0]
//  $: endX = connections.map()

//  console.log('portal!', connection)
</script>


<!-- <Portal target="#expanded-anchor"> -->
 <div class="connections-expanded" bind:clientHeight={h}>
    <TimelineConnectionRowExpanded {id} items={connection} {refX} />
 </div>
 <!-- <div class="background" 
  style:transform={`translate(${minXTransform - 4}px, 0)`}
  style:width={`${maxXEnds}px`}
  style:height={`${h + 8}px`}
 /> -->
<!-- </Portal> -->


<style lang="scss">
 .connections-expanded {
//   position: absolute;
//   transform: translateY(10px);
  background-color: white;
  height: 20px;
  // padding: 20px;
  // padding-top: 20px;
  z-index: 6;
 }
 .background {
  position: absolute;
  background-color: white;
  z-index: 5;

 }
</style>