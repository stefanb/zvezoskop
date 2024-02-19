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
      <p>V Zvezoskopu lahko brskate po kariernih poteh političnih funkcionarjev ter samostojno raziskujete, kje, kdaj in zakaj so se križale.</p>
      <p>Osnovni pogled prikazuje posamezne karierne povezave.</p>
      <p>Z izborom dveh oseb lahko primerjate njuni omrežji.</p>
      <p>Ob ikonah posameznih funkcionarjev so spletne povezave na njihove življenjepise, ki jih lahko samostojno pregledujete.</p>
    {:else}
      <p>With Zvezoskop, you can independently track and explore careers of political officials, and identify the points of intersection.</p>
      <p>Explore the connections on your own in the main view.</p>
      <p>You can compare the networks of two persons by selecting them.</p>
      <p>Next to the icons you will find links to their CVs that you can browse independently.</p>
   {/if}
   </div>
  </div>
  <div class="scroll-prompt">
   <Button on:click={() => skipAhead()}>
     <Label>{$translate("Explore Zvezoskop!")}</Label>
   </Button>
  </div>
</div>

<style lang="scss">
 .last-slide {
  height: calc(100vh - 60px);
  min-height: 600px;
  width: 100%;
  background: #E6E6F0;
  position: relative;
  z-index: 11;
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
