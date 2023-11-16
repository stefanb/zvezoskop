<script>
 import { arrayUniqueById, groupBy } from "../utils";
	import PersonLabel from "./PersonLabel.svelte";
 import { getInitials } from "../utils";
 import { locale } from '$lib/translations';

 export let affiliations;
 export let peopleLookup;

 console.log(affiliations)

 $: sortedAffiliations =  Object.entries(affiliations)
  .map(([type, items]) => ({ type, items: arrayUniqueById(items, 'person_id')}))
  .sort((a, b) => a.items.length > b.items.length ? -1 : 1)

</script>

<div class="institution-breakdown mobile-hide">
 <div class="outer-container">
  {#each sortedAffiliations as {type, items}}
   {#if !!type}
    {@const typeLabel = $locale !== 'si' && items[0].affiliation_type_en ? items[0].affiliation_type_en : type}
    <div class="container">
     <div class="left">
      {typeLabel}
     </div>
     <div class="right">
      {#each items as { person_id }}
       {@const personData = peopleLookup.find(({ id }) => id === person_id)}
       <PersonLabel 
        id={person_id}
        image_link={personData.image_link}
        imagePlaceholder={getInitials(personData.person_name)}
        position={personData.position}
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
  gap: 4px;
 }
</style>