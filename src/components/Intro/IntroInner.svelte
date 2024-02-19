<script>
  import { translate, setLocale, locale, setRoute } from '$lib/translations';
  import { fade } from 'svelte/transition';

  import { onMount } from 'svelte';
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { page, navigating } from '$app/stores';  
  import IntroFirstSlide from './IntroFirstSlide.svelte';
  import IntroLastSlide from './IntroLastSlide.svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';



  import slide1 from '$lib/images/intro/slide-1.svg';
  import slide2 from '$lib/images/intro/slide-2.svg';
  import slide3 from '$lib/images/intro/slide-3.svg';
  import slide4 from '$lib/images/intro/slide-4.svg';
  import slide5 from '$lib/images/intro/slide-5.svg';
  import Waypoint from 'svelte-waypoint';


  // import { scrollto } from "svelte-scrollto";

  import IntroPoints from './IntroPoints.svelte';
  import Scrolly from '../TimelineMobile/Scrolly.svelte';
  import { colors, groupBy } from '../../utils'
  import Typewriter from 'svelte-typewriter'
  // import { hideIntro } from '../../stores';

  import { scaleOrdinal } from 'd3-scale'
    import { SecondaryText } from '@smui/list';

  const defaultColor = '#E6E6F0'
  
  export let sections;
  export let activeSection;
  export let skipIntro;

  let showNetwork = false;

  let scrollSectionIndex = 0;
  let sectionProgress;

  let stepHeight;

  $: activeSection = sections[scrollSectionIndex] || sections[0]
  // $: scrollSectionIndex, typing = true, showSecondaryText = false;
  
  
  // $: console.log(showSecondaryText)

//  $: {
//   const varGroupings = groupBy(people, activeSection.variable)

//   colorCounts = activeSection.domain?.map((key, i) => {
//    const grouped = varGroupings[key]
//    const color = activeSection.range[i]
//    return Array(grouped.length).fill(color)
//   }).flat()
//  }

 const skipAhead = () => {
  window.scrollTo({
    top: 100000,
    behavior: 'smooth'
  })

  goto(`${base}/${$locale}?skip-intro=true`, { replaceState: true })
 }

 let pointsFixed = false;

 $: {
  if (!activeSection.showPoints) {
   pointsFixed = false;
  }
 }

//  let chartTopPosition = 1000;

//   if (scrollSectionIndex === 0) {
//     chartTopPosition = sectionProgress * stepHeight;
//   } else if (scrollSectionIndex === 1) {
//     chartTopPosition = (1 - sectionProgress) * stepHeight;
//   } else {
//     chartTopPosition = 0;
//   }

//   chartTopPosition += 200;
//   // chartTopPosition = scrollSectionIndex < 1 ? `${(sectionProgress) * stepHeight}px` : 0;
</script>

<!-- https://svelte.dev/repl/2bdbf66371a3418e9e3eda076df6e32d?version=3.18.1 -->
<!-- <svelte:window use:wheel={{disableScroll}} /> -->
  <div class="scroll-tracker">
    <Scrolly bind:value={scrollSectionIndex} bind:progress={sectionProgress} >
      {#if !skipIntro}
        {#each sections as { id, groups, text_si, text_en }}
          <div class="step" class:last={id === 'outro' || id === '4'}>
            {#if id === 'intro'}
             <IntroFirstSlide {skipAhead} />
            {:else if id === 'outro'}
              <div class="waypoint" style:background={"green"} style:transform="translateY(-120vh)">
                <Waypoint once={false} throttle="500" on:enter={() => pointsFixed = false}></Waypoint>
              </div>
             <IntroLastSlide {skipAhead} />
            {:else if id === '1'}
              {#if !pointsFixed}
               <div class="chart-container">
                <slot name="points" typingDisabled={false} />
               </div>
              {/if}
              <div class="waypoint">
               <Waypoint once={false} throttle="500" offset="0" on:enter={() => pointsFixed = true}></Waypoint>
              </div>
            {:else if id === '4'}
              {#if !pointsFixed}
               <div class="chart-container">
                <slot name="points" typingDisabled={true} />
               </div>
              {/if}
            {:else}
            <div class="waypoint">
              <Waypoint once={false} throttle="500" offset="0" on:enter={() => pointsFixed = true}></Waypoint>
             </div>
            <!-- <div class="waypoint">
              <Waypoint once={false} throttle="500" offset="0" on:enter={() => pointsFixed = true}></Waypoint>
             </div> -->
            {/if}
            
          </div>
        {/each}
      {/if}
      
      <!-- {#if $hideIntro} -->
        <slot name="network" />
      <!-- {/if} -->
      
    </Scrolly>
  </div>

  {#if pointsFixed}
   <div class="chart-container fixed">
      <slot name="points" typingDisabled={false} />
    </div>
  {/if}
<!-- 
{#if activeSection.showPoints}
  <div class="chart-container" in:fade>
    <LayerCake
      data={people}
    >
      <Svg>
        <IntroPoints settings={activeSection.showPoints ? activeSection : sections[1]} bind:h />
      </Svg>
    </LayerCake>
  </div>
{/if} -->
<!-- 
   -->

  <!-- <a use:scrollto={'#scroll-element'}> Scroll to element </a> -->
{#if !skipIntro}
  <div class="skip-ahead" on:click={() => skipAhead()}>
    <span class="skip-ahead__text">{$translate('Skip')}</span>
  </div>
{/if}

<style lang="scss">
 .chart-container {
   width: 100%;
   background: #fff;

   &.fixed {
    position: fixed;

   }
   // padding: 30px;
 }

 .step {
  position: relative;
  /* top: 60vh; */
  /* transform: translateY(90vh); */
  height: calc(100vh - 60px);
  // min-height: 700px;
  // min-height: 500px;
  // text-align: center;
  // font-family: Noe Display;
  // font-size: 20px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 30px; /* 133.333% */

  // &__text {
  //  padding: 20px;
  //  position: absolute;
  //  bottom: 50vh;
  //  left: 50%;
  //  transform: translateX(-50%);
  //  opacity: 0;
  //  transition: opacity 800ms ease-in-out;

  //  .active & {
  //   opacity: 1;
  //  }
  // }

  // &.last {
  //   height: 120vh;
  // }
 }

 .skip-ahead {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  left: 10px;
  color: #4e566a;
  border-radius: 100px;
  border: 1px solid #4e566a;
  text-transform: uppercase;
  padding: 43px;
  cursor: pointer;


  &:hover {
    background: rgba(#4e566a, 0.1)
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 }

 .waypoint {
  position: absolute;
  bottom: 0;
  background: green;
 }

</style>