<script>
 import { LayerCake, Svg } from "layercake";
 import { min, max } from 'd3-array'
 import Bars from "./Bars.svelte";
 import AxisY from "./AxisY.svelte";
 import { DATA_UPDATE_DATE } from '../../utils'

 export let items;
 export let selectedIndex;
 export let color;
 export let setSelectedIndex;

 
 $: yMin = min(items, ({ start_year }) => start_year)

 $: xOffset = selectedIndex < 4 ? 0 : selectedIndex - 4;

</script>

<div class='chart-container'>
 <LayerCake
   data={items}
   yDomain={[DATA_UPDATE_DATE.getFullYear(), yMin]}
   let:height
   >
   <Svg>
    <AxisY />
    <Bars {selectedIndex} {setSelectedIndex} {xOffset} {color} />
   </Svg>
 </LayerCake> 
</div>

<style>
 .chart-container {
   width: 100px;
   height: calc(100vh - 130px);
   position: fixed;
   overflow: hidden;
   margin: 5px 0;
  }
 
 </style>