<script>
 import { onMount } from 'svelte';
 import { fade } from 'svelte/transition';
 import { translate, locale } from '$lib/translations';
 import Button, { Label } from '@smui/button'
 import introEnIcon from '$lib/images/about-intro-en.svg';
 import introSiIcon from '$lib/images/about-intro-si.svg';
 import introArrowDown from '$lib/images/intro-arrow-down.svg';


 export let skipAhead;


</script>

<div class="last-slide">
  <div class="content">
   <div class="text" in:fade>
    {#if $locale === 'si'}
     <p>V Zvezoskopu lahko spremljate karierne poti političnih funkcionarjev in ugotovite, kje se stikajo.</p>
     <p>Raziščite povezave v omrežnem pogledu, primerjajte omrežja dveh oseb ali preverite njihov življenjepis.</p>
    {:else}
     <p>Relatoscope enables you to track the careers of political office holders, and to identify points where they intersect.</p>
     <p>Explore the connections on your own in the network view, compare the networks of 2 persons together or explore in details theirs CVs.</p>
   {/if}
   </div>
  </div>
  <div class="scroll-prompt">
   <Button on:click={() => skipAhead()}>
     <Label>{$translate("Try it yourself")}</Label>
   </Button>
  </div>
</div>

<style lang="scss">
 .last-slide {
  height: calc(100vh - 60px);
  width: 100%;
  background: #E6E6F0;
  position: relative;
 }

 .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
 }

 .logo {
  margin-bottom: 40px;
  img {
   width: 100%;
  }
 }

 .text {
  color: var(--Position, #3C465A);
  text-align: center;
  font-family: Noe Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  width: 80%;
  margin: auto;

 
  @media (max-width: $mobile) {
   font-size: 16px;
   width: 100%;
  }

  p {
   margin-bottom: 35px;
  }
 }

 .scroll-prompt {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  img {
   height: 50px;

  }
 }

 :global(.last-slide .mdc-button) {
  border-radius: 40px !important;
  background:#00D732 !important;
 }
</style>
