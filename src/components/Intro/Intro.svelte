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
  import { colors, getColor, groupBy } from '../../utils'
  import Typewriter from 'svelte-typewriter'
  import { hideIntro } from '../../stores';

  import { scaleOrdinal } from 'd3-scale'
    import IntroInner from './IntroInner.svelte';

  let activeSection;


  const sections = [
    { 
      id: 'intro',
    },
    {
      id: '1',
      showPoints: true,
      groups: [
        { count: 180, color: "#E6E6F0"},
      ],
      text: {
        left: "There are 158 members of government currently in office.",
      }
    },
    {
      id: '2',
      showPoints: true,
      groups: [
        { count: 1, color: getColor('pm') },
        { count: 17, color: getColor('minister') },
        { count: 50, color: getColor('secretary') },
        { count: 90, color: getColor('mp') },
      ],
      text: {
        left: "1 prime minister, 17 ministers, 50 state secretaries, and 90 members of parliament"
      }
    },
    {
      id: '3',
      showPoints: true,
      groups: [
        { count: 74, color: "#00D732"},
        { count: 84, color: "#E6E6F0"},
      ],
      text: {
        left: "74 are newcomers",
        right: "while XY have been part of the political establishment since the 90s"
      }
    },
    {
      id: '4',
      showPoints: true,
      groups: [
        { count: 63, color: "#00D732"},
        { count: 95, color: "#E6E6F0"},
      ],
      text: {
        left: "There are 63 women",
        right: "and 95 men"
      },
      textSecondary: {
        left: [
          "6 ministers",
          "23 state secretaries",
          "34 members of parliament"
        ],
        right: [
          "11 ministers",
          "27 state secretaries",
          "56 members of parliament"
        ]
      }

    },
    { 
      id: 'outro',
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

  let typing = false;
  let showSecondaryText = false;
  $: activeSection, typing = true, showSecondaryText = activeSection?.id === 'outro';



</script>

<IntroInner {sections} bind:activeSection>
  <div slot="points">
    <IntroPoints groups={activeSection?.groups || sections[1].groups}>
    </IntroPoints>
    {#if activeSection?.text}
      <div class="section-text">
        <div class="section-text__item">
          <Typewriter interval={20} cursor={false} on:done={() => typing = false}>
            {$translate(activeSection.text.left)}
          </Typewriter>
          {#if showSecondaryText && activeSection.textSecondary?.left}
            <div class="section-text__secondary" in:fade={{ delay: 500, duration: 500 }}>
              {#each activeSection.textSecondary.left as secondaryText}
                <span >{secondaryText}</span>
              {/each}
            </div>
          {/if}
        </div>
        {#if activeSection.text.right}
          <div class="section-text__item">
            {#if !typing}
              <Typewriter delay={300} interval={20} cursor={false} on:done={() => {
                if (activeSection.id === '4') {
                  showSecondaryText = true;
                }
              }}>
                {$translate(activeSection.text.right)}
              </Typewriter>
            
              {#if showSecondaryText && activeSection.textSecondary?.right}
                <div class="section-text__secondary" in:fade={{ delay: 500, duration: 500 }}>
                  {#each activeSection.textSecondary.right as secondaryText}
                    <span>{secondaryText}</span>
                  {/each}
                </div>
              {/if}
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>
  <div slot="network">
    <slot />
  </div>
</IntroInner>

<style lang="scss">
 
 .section-text {
  display: flex;
  justify-content: space-around;
  color: var(--Black, #00001E);
  font-family: Noe Display;
  gap: 20%;
  // font-size: 24px;
  // font-style: normal;
  font-weight: 700;
  max-width: 550px;
  margin: auto;
  // line-height: 32px; /* 133.333% */


  &__item {
    flex-basis: 0;
    min-width: 300px;
    // max-width: 300px;
    // text-align: center;
    flex-grow: 1;
  }

  &__secondary {
    span {
      display: block;
      opacity: 0.3;
    }
  }
 }
</style>