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
        { count: 160, color: "#E6E6F0"},
      ],
      text: {
        left: "There are currently 160 government members, ministerial secretaries and MPs in office.",
      }
    },
    {
      id: '2',
      showPoints: true,
      groups: [
        { count: 1, color: getColor('pm') },
        { count: 20, color: getColor('minister') },
        { count: 50, color: getColor('secretary') },
        { count: 89, color: getColor('mp') },
      ],
      text: {
        left: "1 Prime Minister, 20 Ministers, 50 ministerial secretaries, and 89 MPs"
      }
    },
    {
      id: '3',
      showPoints: true,
      groups: [
        { count: 65, color: "#00D732"},
        { count: 18, color: "#E6E6F0"},
      ],
      text: {
        left: "65 are newcomers.",
        right: "18 have been a part of the political establishment since the 90s."
      }
    },
    {
      id: '4',
      showPoints: true,
      groups: [
        { count: 64, getColor: i => {
          let key;
          if (i < 7) {
            key = "minister"
          } else if (i < 30) {
            key = "secretary"
          } else {
            key = "mp"
          }

          return getColor(key)
        }},
        { count: 96, getColor: i => {
          let key;
          if (i < 1) {
            key = "pm"
          } else if (i < 14) {
            key = "minister"
          } else if (i < 41) {
            key = "secretary"
          } else {
            key = "mp"
          }

          return getColor(key)
        }},
      ],
      text: {
        left: "64 are women",
        right: "and 96 men."
      },
      textSecondary: {
        left: [
          "7 ministers",
          "23 ministerial secretaries",
          "34 members of parliament"
        ],
        right: [
          "1 prime minister",
          "13 ministers",
          "27 ministerial secretaries",
          "55 members of parliament"
        ]
      }

    },
    { 
      id: 'outro',
    }
  ]

  let typing = false;
  let showSecondaryText = false;
  $: activeSection, typing = activeSection?.id !== 'outro', showSecondaryText = activeSection?.id === 'outro';

</script>

<IntroInner {sections} bind:activeSection >
  <div slot="points" let:typingDisabled>
    <IntroPoints groups={activeSection?.groups || sections[1].groups}>
    </IntroPoints>
    {#if activeSection?.text}
      <div class="section-text">
        <div class="section-text__item">
          <Typewriter disabled={typingDisabled} interval={20} cursor={false} on:done={() => typing = false}>
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
              <Typewriter disabled={typingDisabled} delay={300} interval={20} cursor={false} on:done={() => {
                if (activeSection.id === '4') {
                  showSecondaryText = true;
                }
              }}>
                {$translate(activeSection.text.right)}
              </Typewriter>
            
              {#if showSecondaryText && activeSection.textSecondary?.right}
                <div class="section-text__secondary" in:fade={{ delay: 500, duration: 500 }}>
                  {#each activeSection.textSecondary.right as secondaryText}
                    <span>{$translate(secondaryText)}</span>
                  {/each}
                </div>
              {/if}
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>
  <div slot="network" class="network-container" style:display={$hideIntro ? 'block' : 'none'}>
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

  @media (max-width: $mobile) {
    // flex-direction: column;
    font-size: 12px;
    margin: 0 20px;
    gap: 5px;
    // max-width: 100px;
  }


  &__item {
    flex-basis: 0;
    min-width: 300px;
    // max-width: 300px;
    // text-align: center;
    flex-grow: 1;

    @media (max-width: $mobile) {
      min-width: 130px;
    }
  }

  &__secondary {
    padding-top: 10px;
    span {
      display: block;
      opacity: 0.3;
    }
  }
 }

 .network-container {
  height: calc(100vh - 60px);

 }
</style>