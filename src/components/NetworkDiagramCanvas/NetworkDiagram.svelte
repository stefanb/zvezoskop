<script>
    import { LayerCake, Canvas } from 'layercake';
    import Diagram from './Diagram.svelte';
   
    export let people;
    export let connections;
   //  export let yearRange;
   
   //  const rKey = 'teilnehmende_angemeldet'
   //  const titleKey = 'thema';
   
   //  const dataTransformed = data.map(d => {
   //    return {
   //      [titleKey]: d[titleKey],
   //      [xKey]: new Date(d[xKey]),
   //      [rKey]: +d[rKey]
   //    }
   //  })
   //  // filter out invalid dates and radii
   //  .filter(d => !isNaN(d[xKey]) && !isNaN(d[rKey]))
   //   // TODO: small sample for dev
   //  .filter((__, i) => i % 20 === 0)
   
   //  $: filteredData = dataTransformed.filter(d => {
   //   return d[xKey] > yearRange[0] && d[xKey] < yearRange[1]
   //  })
   </script>
   
   <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 250px;
    }
   </style>
   
   <div class='chart-container'>
    <LayerCake
      padding={{bottom: 15}}
      data={people}
      let:width
    >
      <Canvas>
        <Diagram {people} {connections} />
      </Canvas>
    </LayerCake> 
   </div>