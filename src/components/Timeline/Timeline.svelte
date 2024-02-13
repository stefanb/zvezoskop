<script>
  import { translate } from '$lib/translations';
  import TimelineSection from './TimelineSection.svelte';
  import { fade } from 'svelte/transition';
  import { groupBy, DATA_UPDATE_DATE } from '../../utils'
  import { scaleTime } from 'd3-scale'
  import { min } from 'd3-array'

  export let items;
  export let sectionGroupingVar = undefined;
  export let rowGroupingVar;
  export let getItemLink;
  export let getItemLabel;
  export let color;

  const sectionOrder = ["izobraževanje", "delovne izkušnje", "svetovalne in nadzorne funkcije etc.", "strankarska pozicija", "prostočasne aktivnosti"]

  $: sections = groupBy(items, sectionGroupingVar)
  $: flattened = items
    .map(({ startDisplayDate, endDisplayDate }) => ([{ date: new Date(startDisplayDate) }, { date: Math.min(DATA_UPDATE_DATE, new Date(endDisplayDate)) }]))
    .flat()
    .filter(d => !!d.date)

  $: xScale = scaleTime()
    .domain([new Date(min(items, d => d.startDisplayDate)), DATA_UPDATE_DATE])

  $: console.log(sections)
</script>

<div class="timeline-container" style="--theme-color: {color};" in:fade>
  {#if sectionGroupingVar}
    {#each sectionOrder as sectionKey}
      {@const sectionItems = sections[sectionKey]}
      {#if sectionItems}
        <div class="section-title">
          <h5 class="section-title__content">{$translate(sectionKey)}</h5>
        </div>
        <TimelineSection {xScale} data={flattened} items={sectionItems} {rowGroupingVar} {getItemLink} {getItemLabel} />
      {/if}
    {/each}
  {:else}
    <div class="section-title"></div>
    <TimelineSection {xScale} data={flattened} {items} {rowGroupingVar} {getItemLink} {getItemLabel} />
  {/if}
</div>

<style lang="scss">
  .timeline-container {
    max-width: $max-width;
    width: calc(100% - 40px);
    margin: 0 auto 30px;
    padding: 0 20px 20px;
  }
  .section-title {
    margin: 0 0 20px;
    padding-top: 28px;
    border-top: 1px solid var(--theme-color);
    color: var(--theme-color);

    &__content {
      max-width: $timeline-title-width;
      white-space: normal;
      text-transform: uppercase;
      font-family: Noe Display;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }

    &:first-child {
      border: none;
    }
  }
</style>