<script>

 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import PersonLabel from '../PersonLabel.svelte';
 import NotesTooltip from '../NotesTooltip.svelte';

 export let title;
 export let href;
 export let component;
 export let notes;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

//  let w;
//  $: titleLeftShift = (w && startX + w > $width) ? $width - (startX + w) : 0
$: console.log(component, title)
</script>


<div class="outer-container">
  <LocalizedLink component={"a"} {href}>
    <div class="container">
      {#if component}
        <PersonLabel id={component.id} name={component.name} image_link={component.image_link} position={component.position} size="small" clickable css="display: flex"/>
      {:else}
        <h5 class="title">
          {title}
        </h5>
      {/if}
    </div>
  </LocalizedLink>
  {#if notes.length}
    <NotesTooltip {notes} />
  {/if} 
</div>



<style lang="scss">
  .outer-container {
    display: flex;
    // align-items: start;
    // justify-content: space-between;
  }
  
  .container {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
 
 .title {
  display: inline-flex;
  margin: 0;
  padding: 0;
  /* max-width: 200px; */
  font-weight: 600;
  // font-family: Arial, Helvetica, sans-serif;
  font-size: $timeline-font-size;
  color: $grey;

 }

 .image {
  height: 24px;
  width: 24px;
  border-radius: 50px;
  background-size: cover;
  background-color: #c3c3c3;
}
</style>