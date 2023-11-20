<script>
  import { getContext } from 'svelte';
  import { scaleCanvas } from 'layercake';
  import IntroPoint from './IntroPoint.svelte';
  import { getColor } from '../../utils';

  const { width, height, rGet, zGet, zDomain } = getContext('LayerCake');

  // const { ctx } = getContext('canvas');

  const N = 119;

  export let settings;

  export let h;


  let r, padding, acrossCount, downCount, unaccountedCount;

  
  $: {
    r = $width > 600 ? 10 : 7;
    padding = r / 2
    acrossCount = Math.floor($width / ((r + padding)*2)) - 2
    acrossCount = acrossCount - (settings.groups.length - 1)
    downCount = Math.floor(N / acrossCount);
    unaccountedCount = N - acrossCount*downCount
    h = (downCount + 1)*(r + padding)*2

    console.log(acrossCount, downCount, unaccountedCount, settings.groups?.length)
  }


  // $: {
  //    if ($ctx) {
       
  //      scaleCanvas($ctx, $width, $height);
  //      $ctx.clearRect(0, 0, $width, $height);

  //      let dataIndex = 0;
  //      let currGroup = 0;

  //      for (let column = 0; column < acrossCount; column++) {
  //       for (let row = 0; row < (downCount + 1); row++) {
  //         if (dataIndex < N) {
  //           if (row === downCount && column >= unaccountedCount) {
  //             // do nothing
  //           } else {

  //             $ctx.beginPath();
  //             $ctx.arc(column*(r + padding)*2 + (r + padding), row*(r + padding)*2 + (r + padding), r, 0, 2 * Math.PI, false);        
  //             $ctx.fillStyle = "#c3c3c3";
  //             $ctx.fill();

  //             dataIndex++;
  //           }
  //         }
  //       }
  //      }
  //    }
  //  }

  let itemGroups = {}

  const reCalculateItems = () => {
    itemGroups = {}
  settings.groups.forEach(({ id, count }) => {
    const { all, pm, minister, secretary, mp } = count;
    
    itemGroups[id] = [
      ...Array(all).fill('all'),
      ...Array(pm).fill('pm'),
      ...Array(minister).fill('minister'),
      ...Array(secretary).fill('secretary'),
      ...Array(mp).fill('mp'),
    ]
  })

  }

  $: settings, reCalculateItems()

  $: console.log(itemGroups)

  // r = 10;
  // padding = 5;
  // downCount = 5;

</script>

{#if itemGroups}
  {#each Object.entries(itemGroups) as [key, items]}
    <g>
      {#each items as item, i}
        {#key item}
          <IntroPoint 
            cy={i%downCount * r * 3 + padding}
            cx={Math.floor(i/downCount) * r * 3 + padding}
            r={r}
            color={getColor(item)}
          />
        {/key}
      {/each}
    </g>
  {/each}
{/if}





