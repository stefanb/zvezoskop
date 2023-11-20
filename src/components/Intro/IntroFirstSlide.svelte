<script>
 import { onMount } from 'svelte';
 import { fade } from 'svelte/transition';
 import { translate, locale } from '$lib/translations';
 import aboutIntroEnIcon from '$lib/images/about-intro-en.svg';
 import aboutIntroSiIcon from '$lib/images/about-intro-si.svg';

 // let show = false;

 // onMount(() => {
 //  show = true;
 // })

 // $: console.log('show', show)

</script>

<div class="first-slide">
  <div class="content">
   <div class="logo" in:fade>
    {#if $locale === 'si'}
     <img class="intro-icon" src={aboutIntroSiIcon} />
    {:else}
     <img class="intro-icon" src={aboutIntroEnIcon} />
    {/if}
   </div>

   <div class="text">
    {#if $locale === 'si'}
     <p>Karierne in življenjske poti političnih funkcionarjev so v majhni državi, kot je Slovenija, močno prepletene.</p>
     <p>Dobrodošli v Zvezoskopu, interaktivni vizualizaciji kariernih poti aktualnih slovenskih političnih funkcionarjev.</p>
    {:else}
     <p>In a country as small as Slovenia, the career paths and lives of political office holders are deeply intertwined.</p>
     <p>Welcome to Relatoscope, an interactive visualization of career paths of current Slovenian political office holders.</p>
    {/if}
   </div>
  </div>
</div>

<style lang="scss">
 .first-slide {
  height: 100%;
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
  max-width: 650px;
 }

 .logo {
  margin-bottom: 30px;
  img {
   width: 100%;
  }
 }

 .text {
  color: var(--Position, #3C465A);
  text-align: center;
  font-family: Noe Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  width: 80%;
  margin: auto;

  @media (max-width: $mobile) {
   font-size: 16px;
  }

  p {
   margin-bottom: 20px;
  }
 }
</style>
