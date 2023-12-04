<script>
 import { arrayUniqueById, groupBy } from "../utils";
	import PersonLabel from "./PersonLabel.svelte";
 import { getInitials } from "../utils";
 import { locale, translate } from '$lib/translations';

 export let affiliations;

 $: console.log(affiliations)

 $: sortedAffiliations =  Object.entries(affiliations)
  .map(([type, items]) => ({ type, items }))
  .sort((a, b) => a.items.length > b.items.length ? -1 : 1)

</script>

<div class="institution-breakdown mobile-hide">
 <div class="outer-container">
  {#each sortedAffiliations as {type, items}}
   {#if !!type}
    <div class="container">
     <div class="left">
      {$translate(type)}
     </div>
     <div class="right">
      {#each items as { person_id, image_link, person_name, curr_position }}
       <PersonLabel 
        id={person_id}
        image_link={image_link}
        imagePlaceholder={getInitials(person_name)}
        position={curr_position}
        size="small"
        clickable
       />
      {/each}
     </div>
    </div>
   {/if}
  {/each}
 </div>
</div>

<style lang="scss">
 .institution-breakdown {
  margin: 20px;
 }

 .outer-container {
  display: table;
  max-width: $max-width;
  margin: auto;
  width: 100%;
  border-collapse: collapse; 
 }

 .container {
  display: table-row;
  border-bottom: 1px solid #E6E6EB;


 }

 .left, .right {
  display: table-cell;
  vertical-align: top;
  padding: 20px;

 }

 .left {
  text-transform: capitalize;
  width: 25%;
 }

 .right {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
 }
</style>