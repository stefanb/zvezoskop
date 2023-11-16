<script>
  import moment from 'moment';
 import { locale, translate } from '$lib/translations';
 import { getContext } from 'svelte';
 import { fade } from 'svelte/transition';
 import { arrayUniqueById, getColor, displayDate, getLinearGradient } from '../../utils'
 import TimelineConnectionExpanded from './TimelineConnectionExpanded.svelte';
	import { linear } from 'svelte/easing';

 export let item;
 export let refX;
 export let hovered;
 export let positions;
 export let index;

 let w;
 let shouldHideStartYear = false
 let shouldCenterEndYear = false


 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');


 $: startX = $xScale(new Date(item.startDisplayDate))
 $: endX = $xScale(Math.min(new Date(item.endDisplayDate), new Date()))

 $: {
  if (item.end_year === positions?.[index + 1]?.start_year) {
    shouldCenterEndYear = true;
  }
  if (item.start_year === positions?.[index - 1]?.end_year) {
    shouldHideStartYear = true;
  }
 }

//  let linearGradient;
//  let linearGradientStops = [];

//  $: {
//   // const oneYearPercent = $xScale()
  
//  }

//  $: linearGradient = `linear-gradient(to right, ${linearGradientStops.join(' , ')})`

//  $: console.log(linearGradientStops, linearGradient, linearGradientStops.join(' ,'))

//  $: numConnectionsToShow = w ? Math.floor(w / connectionWidth) -1 : 0

//  const map = new Map(item.c.map(pos => [pos.id, pos]));
// const uniques = [...map.values()];
// 

//  $: uniqueConnections = item.connections?.length ? arrayUniqueById(item.connections, 'person_id') : null
// $: uni

// $: {
//   if (hovered) {
//     console.log(item.startDisplayDate, item.endDisplayDate)
//   }
// }
let yearsWidth;
let yearsTransformX = 0;

$: barsWidth = endX - startX;
$: {
  if (yearsWidth > barsWidth) {
    yearsTransformX = (barsWidth - yearsWidth)/2
  }
  if (startX + yearsWidth/2 > $width) {
    yearsTransformX -= (startX + yearsWidth/2) - $width
  }
}
</script>

<div class="item" style:left={`${startX - refX}px`} bind:clientWidth={w}>
  <!-- <h6 class="position">{item.position_si}</h6> -->
  <div class="bar-container" style:width={`${barsWidth}px`}>
    <div class="bar" style:background={getLinearGradient(item, "#272728")}></div>
    
  </div>
  <div 
    class="years"
    class:hidden={!hovered}
    bind:clientWidth={yearsWidth}
    style:transform={`translateX(${yearsTransformX}px)`}
    in:fade
  >
    {#if item.start_year}
    <div
        class="year"
        class:hidden={shouldHideStartYear}
      >
        <!-- <span>{item.start_year}</span> -->
        <span>{displayDate(item, 'start', locale)}</span>
        {#if item.end_year === 2100 || yearsTransformX < 0}
          <span>-</span>
        {/if}
      </div>
    {/if}
   
    <!-- {#if item.end_year && item.end_year !== item.start_year} -->
      <div
        class="year"
        class:centered={shouldCenterEndYear}
      >
        {#if item.end_year !== 2100}
         <!-- {item.end_year} -->
          <span>{displayDate(item, 'end', locale)}</span>
        {/if}
      </div>
    <!-- {/if} -->
  </div>
  
  <!-- {#if uniqueConnections}
    <div class="connections-outer-container">
      <div class="connections">
        {#each uniqueConnections.slice(0, numConnectionsToShow) as connection (connection.person_id)}
          <div class="connection" style={`background-image: url('${connection.image_link}'); border-color: ${getColor(connection.position)}`}></div>
        {/each}
        {#if uniqueConnections.length > numConnectionsToShow}
          <div class="connection-more">{`+${uniqueConnections.length - numConnectionsToShow}`}</div>
        {/if}
      </div>
  </div>
  {/if} -->
</div>

<style lang="scss">

 .item {
  // display: inline-flex;
  position: absolute;
  top: 0;
 }

 .bar {
  content: "";
  width: 100%;
  min-width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: $grey;
  border: 0.5px solid white;
 }

 .years {
  color: $black;
  font-size: 8px;
  display: flex;
  justify-content: space-between;
  gap: 2px;

  &.hidden {
    visibility: hidden;
  }
 }

 .year {
  color: $grey;
  display: flex;
  gap: 2px;
  &.centered {
    transform: translateX(8px);
  }

  &.hidden {
    visibility: hidden;
  }
 }

 .position {
  white-space: nowrap;
  margin: 0;
  // padding: 2px 0;
  font-weight: normal;
  font-size: 10px;
  // background: white;
 }

 .connections-outer-container {
  position: relative;
 }

 .connections {
  display: flex;
  flex-wrap: nowrap;
  min-height: 15px;
  padding: 3px 0;
  overflow: hidden;
 }

 .connection {
  content: "";
  height: 20px;
  width: 20px;
  min-width: 20px;
  border-radius: 50px;
  // background-color: #3CBEAA;
  border: 2px solid;
  margin-right: 1px;
  background-size: cover;
  
 }
 .connection-more {
  font-size: 9px;
  color: #3CBEAA;
  font-weight: 500;
  /* padding: 1px; */
  /* border: 1px solid #3CBEAA;
  border-radius: 50px; */
}

.connections-expanded {
  /* position: absolute; */
  top: 0;
  left: 0;
  background-color: white;
  // z-index: 100;

  &__item {
    /* position: absolute; */
  }
}
</style>