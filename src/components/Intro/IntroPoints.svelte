<script>
  import { getContext } from 'svelte';
  import { scaleCanvas } from 'layercake';

  const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

  const { ctx } = getContext('canvas');

  export let colorCounts = [];

  export let h;


  let r, padding, acrossCount, downCount, unaccountedCount;

  
  $: {
    r = $width > 600 ? 10 : 7;
    padding = r / 2
    acrossCount = Math.floor($width / ((r + padding)*2)) - 2
    downCount = Math.floor($data.length / acrossCount);
    unaccountedCount = $data.length - acrossCount*downCount
    h = (downCount + 1)*(r + padding)*2
  }

  $: {
     if ($ctx) {
       
       scaleCanvas($ctx, $width, $height);
       $ctx.clearRect(0, 0, $width, $height);

       let dataIndex = 0;

       for (let column = 0; column < acrossCount; column++) {
        for (let row = 0; row < (downCount + 1); row++) {
          if (dataIndex < $data.length) {
            if (row === downCount && column >= unaccountedCount) {
              // do nothing
            } else {
              $ctx.beginPath();
              $ctx.arc(column*(r + padding)*2 + (r + padding), row*(r + padding)*2 + (r + padding), r, 0, 2 * Math.PI, false);        
              $ctx.fillStyle = colorCounts[dataIndex] || "#c3c3c3";
              $ctx.fill();

              dataIndex++;
            }
          }
        }
       }
     }
   }

</script>





