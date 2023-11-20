<script>
import { translate } from '$lib/translations';
import { platform } from "./MediaQuerySsr.svelte";
import NotesTooltip from './NotesTooltip.svelte';
import Image from '../components/Image.svelte'
// import BackButton from './BackButton.svelte';

 export let imageLink = undefined;
 export let title = undefined;
 export let subheading = undefined;
 export let notes = undefined;
 export let details = undefined;
 export let background = undefined;
 export let textColor = undefined;


let scrollY;
let h;
// let prevLink;

$: collapsed = scrollY && scrollY !== 0;

// $: {
//   if ($hist.length > 1) {
//     prevLink = $o
//   }
// }

// $: console.log(scrollY, collapsed)
 
</script>
<svelte:window bind:scrollY={scrollY} />

<div class="outer-container" style="--background-color: {background}; --text-color: {textColor}" class:collapsed={collapsed} class:mobile={$platform === 'mobile'} bind:clientHeight={h}>
  <div class="ProfileHeader">
    <div class="ProfileHeader__back-button">
      <!-- <BackButton /> -->
    </div>
    <div class="inner-container">
      <div class="ProfileHeader__main">
        <div class="ProfileHeader__main__inner">
          <Image {imageLink} let:imageSrc>
            {#if imageSrc}
              <div class="ProfileHeader__image" style={`background-image: url('${imageSrc}')`}></div>
            {/if}
          </Image>
          <div class="ProfileHeader__title">
            <h5 class="ProfileHeader__title__heading">
              <span>{title}</span>
              {#if notes?.length}
                <NotesTooltip {notes} />
              {/if}
            </h5>
            {#if subheading}
              <h5 class="ProfileHeader__title__subheading">{$translate(subheading)}</h5>
            {/if}
          </div>
        </div>
      </div>
      {#if details}
        <div class="ProfileHeader__secondary">
          {#each details as { label, value, component, notes }}
          {#if value || component}
            <div class="ProfileHeader__detail">
              <div class="ProfileHeader__detail__label">
                {label}
                {#if notes}
                  <NotesTooltip {notes} />
                {/if}
              </div>
              <div class="ProfileHeader__detail__value">
              {#if value}
                {value}
              {:else if component}
                {@html component}
              {/if}
              </div>
            </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
  <div class="legend">
    <div class="legend__content">
      <div class="legend__title">
        {$translate('legend')}
      </div>
      <div class="legend__item">
        <span class="legend__item__bold">{$translate('DD.MM.YYYY')} –</span>
        <span>{$translate('The function is ongoing as of 27/11/2023')}</span>
      </div>
      <div class="legend__item small-width-hide">
        <div class="legend__item__bar"></div>
        <span>{$translate('Exact start and end date')}</span>
      </div>
      <div class="legend__item medium-width-hide">
        <div class="legend__item__bar end-uncertain"></div>
        <span>{$translate('Exact start and not exact end date')}</span>
      </div>
      <div class="legend__item small-width-hide">
        <div class="legend__item__bar both-uncertain"></div>
        <span>{$translate('Not exact start and end date')}</span>
      </div>
    </div>
  </div>
</div>

<div class="content-spacer" style:height={`${h}px`} /> 

<style lang="scss">
  $transition-duration: 50ms;

  .outer-container {
    position: fixed;
    width: 100%;
    z-index: 15;
  }

 .ProfileHeader {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  transition: padding $transition-duration linear;
  

  :global(a) {
    text-decoration: underline;
  }

  .collapsed & {
    padding: 0 20px;
  }

  .inner-container {
   display: flex;
   justify-content: space-between;
   max-width: $max-width;
   margin: 0 auto;
   width: 100%;

   @media (max-width: $mobile) {
    flex-direction: column;
    gap: 20px;
  }
  }

  &__main__inner, &__secondary {
   display: flex;
   align-items: center;

   @media (max-width: $mobile) {
      justify-content: flex-start;
    }
  }


  &__back-button {
    .collapsed & {
      display: none;
    }
  }

  &__secondary {
   gap: 15px;
   align-items: normal;
   align-self: center;
   justify-content: space-between;

   
   @media (max-width: $mobile) {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .collapsed & {
        display: none;
      }
    }
  }

  &__image {
   // img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-size: cover;
    background-color: #c3c3c3;
    margin-right: 20px;
    transition: all $transition-duration linear;

   // }

   .collapsed & {
    height: 35px;
    width: 35px;
    margin-right: 10px;
   }
  }

  &__title {
   margin: 15px 0;
   font-size: 20px;
   transition: font-size $transition-duration linear;
   max-width: 500px;

   .collapsed & {
    font-size: 14px;
   }

   &__heading {
    margin-top: 0;
    margin-bottom: 5px;
    
   }
   &__subheading {
    font-weight: normal;
    margin: 0;
   }
  }

  &__detail {
   font-size: 13px;
   flex-grow: 1;
   flex-basis: 0;
   min-width: 130px;
   transition: font-size $transition-duration linear;
   overflow-y: hidden;
  

   .collapsed & {
    font-size: 12px;
   }

   &__label {
    font-weight: 600;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    white-space: nowrap;
   }

   &__value {
    & > :global(a) {
      color: var(--text-color) !important;
    }
    }
  }
 }

 .legend {
  height: 60px;
  background: #E6E6F0;
  width: calc(100% - 40px);
  font-size: 11px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 20px;
  overflow: hidden;

  @media (max-width: $mobile) {
    display: none;
  }

  .collapsed & {
    height: 0;
  }

  &__content {
    max-width: $max-width;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__title {
    text-transform: uppercase;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;

    &.medium-width-hide {
      @media (min-width: 740px) and (max-width: 1000px) {
        display: none;
      }
    }

    &.small-width-hide {
      @media (min-width: $mobile) and (max-width: 740px) {
        display: none;
      }
    }

    &__bold {
      font-weight: 600;
    }

    &__bar {
      content: "";
      width: 100%;
      min-width: 35px;
      height: 10px;
      border-radius: 20px;
      background: #272728;
      // border: 0.5px solid white;

      &.end-uncertain {
        background: linear-gradient(to right, rgb(39, 39, 40), rgb(39, 39, 40) 50%, rgb(39, 39, 40) 51%, transparent);
      }

      &.both-uncertain {
        background: linear-gradient(to right, transparent, rgb(39, 39, 40) 40%, rgb(39, 39, 40) 50%, rgb(39, 39, 40) 60%, transparent);
      }
    }
  }
 }
</style>
