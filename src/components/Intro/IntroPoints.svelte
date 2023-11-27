<script>
  import IntroPoint from './IntroPoint.svelte';
  import { platform } from '../MediaQuerySsr.svelte';

  import { getColor } from '../../utils';

  // const { ctx } = getContext('canvas');


  export let groups;

  export let h;


  // let r, padding, acrossCount, downCount, unaccountedCount;

  
  // $: {
  //   r = $width > 600 ? 10 : 7;
  //   padding = r / 2
  //   acrossCount = Math.floor($width / ((r + padding)*2)) - 2
  //   acrossCount = acrossCount - (settings.groups.length - 1)
  //   downCount = Math.floor(N / acrossCount);
  //   unaccountedCount = N - acrossCount*downCount
  //   h = (downCount + 1)*(r + padding)*2

  //   console.log(acrossCount, downCount, unaccountedCount, settings.groups?.length)
  // }


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

  // let itemGroups = {}

  // const reCalculateItems = () => {
  //   itemGroups = {}
  // settings.groups.forEach(({ id, count }) => {
  //   const { all, pm, minister, secretary, mp } = count;
    
  //   itemGroups[id] = [
  //     ...Array(all).fill('all'),
  //     ...Array(pm).fill('pm'),
  //     ...Array(minister).fill('minister'),
  //     ...Array(secretary).fill('secretary'),
  //     ...Array(mp).fill('mp'),
  //   ]
  // })

  // }

  // $: settings, reCalculateItems()

  // $: console.log(itemGroups)

  // r = 10;
  // padding = 5;
  // downCount = 5;

  const r = $platform === 'mobile' ? 11 : 20;
  const padding = $platform === 'mobile' ? 5 : 5;

</script>

<div class="outer-container">
  {#each groups as group}
    <div class="group" style:min-width={`${(group.count / ($platform === 'mobile' ? 12 : 8))*(r + padding) }px`}>
        {#each Array(group.count) as pt, i}
          <IntroPoint color={group.color || group.getColor(i)} {r} />
        {/each}
    </div>
  {/each}
</div>


<style lang="scss">
  .outer-container {
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin: auto;
    padding: 10vh 0;
    gap: 30px;
    align-items: flex-start;


    @media (max-width: $mobile) {
      // flex-direction: column;
      gap: 20px;
    }
  }
  .group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 200px;
    gap: 5px;

    @media (max-width: $mobile) {
      gap: 5px;
      // flex-direction: row;
      // max-height: 100000px;
    }
  }
</style>


