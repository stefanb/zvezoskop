<script>
  import { locale } from '$lib/translations';
  import { getContext } from 'svelte';
  import NotesTooltip from '../NotesTooltip.svelte';
  import TimelineItem from './TimelineItem.svelte';
  import { tField } from '../../utils';
  
  export let positions;
  export let hovered;
  export let refX;

//  $: console.log(positions)

  const { data, xGet, width, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

  let labelWidth;
  let deptLabelWidth;
  let label;
  let departmentLabel;
  let height = 25
  //  $: height = hovered ? 20 : 10;
  // 
  //  $: tT
  // $: height = 10

  // let uniqueConnections;

  $: {
    const uniquePositionLabels = [...new Set(positions.map((position) => tField(position, 'position', $locale)))];
    label = uniquePositionLabels.join(' / ')

    const department = tField(positions[0], 'institution_department', $locale);

    // console.log("department", department, positions[0])
    if (department?.length) {
      departmentLabel = department;
    }

    // let allConnections = []
    // positions.forEach(({ connections }) => {
    //   if (connections?.length) {
    //     allConnections = [...allConnections, ...connections]
    //   }
    // })

    // uniqueConnections = allConnections?.length ? arrayUniqueById(allConnections, 'person_id') : null
    
    // console.log(hasConnections)
    // height = uniqueConnections?.length > 0 ? 10 : 20
  } 
  $: startX = $xScale(new Date(positions[0].startDisplayDate))


  // $: leftShift = (labelWidth && ((startX - refX) + labelWidth) > $width) ? $width - ((startX - refX) + labelWidth) : 0
  $: deptLabelLeftShift = deptLabelWidth && ((startX + deptLabelWidth) > $width) ? $width - (startX + deptLabelWidth): 0
  $: labelLeftShift = labelWidth && ((startX + labelWidth) > $width) ? $width - (startX + labelWidth): 0
  // $: connectionsLeftShift = connectionsWidth && ((startX + connectionsWidth) > $width) ? $width - (startX + connectionsWidth): 0
  $: combinedLabelShift = Math.min(labelLeftShift, deptLabelLeftShift)

  let positionNotes
  $:  {
    const positionNotesRaw = positions.map(a => tField(a, 'notes_position', $locale)).filter(note => note?.length > 0)
    positionNotes = [...new Set(positionNotesRaw)];
  }


</script>
  {#if departmentLabel}
    <div class="label department-label"
      bind:clientWidth={deptLabelWidth} 
      style:left={`${startX - refX + deptLabelLeftShift}px`}
      style:text-align={combinedLabelShift < 0 ? 'end' : 'start'}
      >
      <span>{departmentLabel}</span>
    </div>
  {/if}
  <div class="label"
    bind:clientWidth={labelWidth} 
    style:left={`${startX - refX + labelLeftShift}px`}
    style:text-align={combinedLabelShift < 0 ? 'end' : 'start'}
  >
    <span>{label}</span>
    {#if positionNotes.length}
      <NotesTooltip notes={positionNotes} size="15px" zIndex={14} />
    {/if}
  </div>
  <div class="bars" style:height={`${height}px`}>
    {#each positions as item, i}
      <TimelineItem {item} {hovered} {refX} {positions} index={i} />
    {/each}
  </div>
  
 
<style lang='scss'>
  .label {
    white-space: nowrap;
    margin: 0;
    padding-bottom: 2px;
    font-weight: normal;
    font-size: $timeline-font-size;
    position: relative;
    display: table-row-group;
    color: $light-grey;
    line-height: 1.5;

    &.department-label {
      color: $grey;
      padding-bottom: 2px;
      padding-top: 5px;
      line-height: 1;
    }
  }

  .bars {
    position: relative;
    top: 1px;
    transition: min-height 200ms ease-in;
  }

  .connections-outer-container {
    position: relative;
    display: inline-block;
  }

 .connections {
  display: flex;
  flex-wrap: nowrap;
  min-height: 26px;
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
</style>