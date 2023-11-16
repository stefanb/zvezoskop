<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
	import { getColor, getLinearGradient } from '../../utils';

 export let item
 export let refX;
 export let i;

 const { xScale, xRange } = getContext('LayerCake');


 $: startX = $xScale(new Date(item.startDisplayDate))
 $: endX = $xScale(Math.min(new Date(item.endDisplayDate), new Date()))

 // console.log(person_id, refX)
</script>

<div
 class="item__bar"
 style:width={`${endX - startX}px`}
 style:background={getLinearGradient(item, getColor(item.position))}
 style:left={`${startX - refX}px`}
/>
 

<style lang="scss">
 .item {
  position: relative;
  cursor: pointer;
  top: 50%;

  &:hover {
   opacity: 0.7;
  }

  &__bar {
   position: absolute;
   // left: 0;
   // top: 5px;
   width: 10px;
   height: 10px;
   min-width: 10px;
   content: "";  
   // background-color: #3CBEAA;
   border-radius: 20px;
  }

  &__label {
   // position: absolute;
   right: 5px;
   top: 0;
   // text-align: right;
   color: #3CBEAA;
   // color: white;
   font-size: 9px;
   white-space: nowrap;
   background: white;
  }
 }
</style>