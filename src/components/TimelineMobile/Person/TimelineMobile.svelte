<script>
  import { locale, translate } from '$lib/translations';
  import Scrolly from "../Scrolly.svelte";
  import PersonLabel from "../../PersonLabel.svelte";
  import VerticalTimeBars from "./VerticalTimeBars.svelte";
	import LocalizedLink from "../../LocalizedLink.svelte";
  import YearsLabel from '../../YearsLabel.svelte';
  import { arrayUniqueById, getColor, slugify, tField, getInitials } from '../../../utils';


 export let items;
 export let color;

let scrollSectionIndex;
let itemHeight;

const setSelectedIndex = (index) => {
  window.scrollTo({
    top: itemHeight * index,
    behavior: 'smooth'
  })
}

// $: console.log(items)

$: sorted = items
  .sort((a, b) => a.endDisplayDate < b.endDisplayDate ? -1 : 1)
  .sort((a, b) => a.startDisplayDate < b.startDisplayDate ? -1 : 1)

$: console.log(sorted)

</script>

<div class="outer-container">
  <div class="left">
    <VerticalTimeBars {items} selectedIndex={scrollSectionIndex} {setSelectedIndex} {color} />
  </div>
  <div class="right">
    <Scrolly bind:value={scrollSectionIndex}>
      {#each sorted as item, i (item.id)}
        <section class="item" id={i} bind:clientHeight={itemHeight}>
          <div class="inner-container">
            <div class="years" style:color={color}>
              <YearsLabel {item} />
            </div>
            <LocalizedLink component={"a"} href={`/institutions/${slugify(item.institution_si)}`}>
              <div class="institution">{tField(item, 'institution', $locale)}</div>
            </LocalizedLink>
            {#if tField(item, 'institution_department', $locale)?.length}
              <div class="department">{tField(item, 'institution_department', $locale)}</div>
            {/if}
            <div class="position">{tField(item, 'position', $locale)}</div>
            <div class="connections">
              {#each arrayUniqueById(item.connections, 'person_id') as { image_link, person_id, person_name, position } (person_id)}
                <div class="connection">
                <PersonLabel clickable {position} id={person_id} {image_link} imagePlaceholder={!image_link ? getInitials(person_name) : null} size="small" />
                </div>
              {/each}
            </div>
            {#if tField(item, 'notes_institution', $locale)}
              <div class="notes">
                * {tField(item, 'notes_institution', $locale)}
              </div>
            {/if}
            {#if tField(item, 'notes_position', $locale)}
              <div class="notes">
                * {tField(item, 'notes_position', $locale)}
              </div>
            {/if}
          </div>

        </section>
      {/each}
    </Scrolly>
  </div>
</div>

<style lang="scss">
  .outer-container {
    display: table;
  }

  .left, .right {
    display: table-cell;
  }

  .left {
    width: 100px;
    
  }

  .right {
    border-left: 0.5px solid #aaa;
    padding-left: 15px;
  }

 .item {
  height: 60vh;
 }

 .inner-container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
 }

 .years {
  font-family: Noe Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  margin-bottom: 7px;
 }

 .institution {
  color: $black;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 136.364% */
  margin-bottom: 2px;

 }

 .department {
  color:$black;
  font-size: $timeline-font-size;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
 }

 .position {
  color:$black;
  font-size: $timeline-font-size;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
 }

 .connections {
  display: flex;
  margin-top: 7px;
  gap: 3px;
  flex-wrap: wrap;
 }

 .notes {
  color: $light-grey;
  font-size: $timeline-font-size;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
 }
</style>
