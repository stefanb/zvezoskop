<script>
  import { onMount } from 'svelte';
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { fade } from 'svelte/transition';
  import { page, navigating } from '$app/stores';  
  import { translate } from '$lib/translations';
  import IntroFirstSlide from './IntroFirstSlide.svelte';
  import slide1 from '$lib/images/intro/slide-1.svg';
  import slide2 from '$lib/images/intro/slide-2.svg';
  import slide3 from '$lib/images/intro/slide-3.svg';
  import slide4 from '$lib/images/intro/slide-4.svg';
  import slide5 from '$lib/images/intro/slide-5.svg';


  // import { scrollto } from "svelte-scrollto";

  import IntroPoints from './IntroPoints.svelte';
  import Scrolly from '../TimelineMobile/Scrolly.svelte';
  import { colors, groupBy } from '../../utils'
  import Typewriter from 'svelte-typewriter'
  import { hideIntro } from '../../stores';

  import { scaleOrdinal } from 'd3-scale'

  const defaultColor = '#E6E6F0'
  
  export let people;

  let scrollSectionIndex = 0;
  let sectionProgress;
  let typing = false;

  let stepHeight;

  const sections = [
    { 
      id: '0',
    },
    // { 
    //   id: '1',
    //   background: slide1,
    //   text: {
    //     center: [
    //       $translate("There are 158 members of the government, state secretaries and MPs now in the office.")
    //     ]
    //   }
    // },
    // { 
    //   id: '2',
    //   background: slide2,
    //   text: {
    //     left: [
    //       $translate("1 prime minister + 17 ministers."),
    //       $translate("50 state secretaries.")
    //     ],
    //     right: [
    //       $translate("90 members of parliament.")
    //     ]
    //   }
    // },
    // { 
    //   id: '3',
    //   background: slide3,
    //   text: {
    //     left: [
    //       $translate("74 are newcomers."),
    //     ],
    //     right: [
    //       $translate("XY were present in the first the national assembly."),
    //       $translate("XY were part of the political establishment since 90’s.")
    //     ]
    //   }
    // },
    // { 
    //   id: '5',
    //   background: slide5,
    //   text: {
    //     left: [
    //       $translate("There are 63 women"),
    //       $translate("6 ministers"),
    //       $translate("23 state secretarie"),
    //       $translate("34 members of parliament"),
    //     ],
    //     right: [
    //       $translate("and 95 men"),
    //       $translate("11 ministers"),
    //       $translate("27 state secretarie"),
    //       $translate("56 members of parliament"),
    //     ]
    //   }
    // },
  ]

  $: activeSection = sections[scrollSectionIndex] || sections[0]
  $: scrollSectionIndex, typing = true;
  // $: {
  //   if ($page.url.hash === '#skip-intro' || (scrollSectionIndex > 0 && scrollSectionIndex === sections.length)) {
  //     $hideIntro = true
  //   }
  // }

  let colorCounts;
  let h;

  $: console.log(activeSection)

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
      {#if !$hideIntro}
        {#each sections as { id, background, text }}
          <div class="step">
            {#if id === '0'}
              <IntroFirstSlide />
            {:else}
              <img src={background} />
              {#if text.left}
                <div>
                  <div>
                    {#each text.left as textItem}
                    <Typewriter disabled={id !== activeSection.id} cursor={false} interval={30} on:done={(i) => { typing = false }}>
                      <h5>{textItem}</h5>
                    </Typewriter>
                    {/each}
                  </div>
                  <div>
                    {#each text.right as textItem}
                      <Typewriter disabled={id !== activeSection.id} cursor={false} interval={30} on:done={(i) => { typing = false }}>
                        <h5>{textItem}</h5>
                      </Typewriter>
                    {/each}
                  </div>
                </div>
              {:else}
                {#each text.center as textItem}
                  <Typewriter disabled={id !== activeSection.id} cursor={false} interval={30} on:done={(i) => { typing = false }}>
                    <h5>{textItem}</h5>
                  </Typewriter>
                {/each}
              {/if}

            {/if}
          </div>
        {/each}
      {/if}

      <div style:margin-top="60px">
        <slot />
      </div>
    </Scrolly>
  </div>
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

  <div class="skip-ahead" on:click={() => skipAhead()}>
    <span class="skip-ahead__text">{$translate('Skip')}</span>
  </div>

  <!-- <a use:scrollto={'#scroll-element'}> Scroll to element </a> -->


<style lang="scss">
 .chart-container {
   width: 100%;
   height: 300px;
   position: fixed;
   background: #fff;
   padding: 30px;
 }

 .step {
  position: relative;
  /* top: 60vh; */
  /* transform: translateY(90vh); */
  height: calc(100vh - 60px);
  text-align: center;
  font-family: Noe Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 133.333% */

  &__text {
   padding: 20px;
   position: absolute;
   bottom: 50vh;
   left: 50%;
   transform: translateX(-50%);
   opacity: 0;
   transition: opacity 800ms ease-in-out;

   .active & {
    opacity: 1;
   }
  }
 }

 .skip-ahead {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  left: 10px;
  color: #6E7382;
  border-radius: 100px;
  border: 1px solid #6E7382;
  text-transform: uppercase;
  padding: 35px;
  cursor: pointer;


  &:hover {
    background: rgba(#6E7382, 0.1)
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 }
</style>