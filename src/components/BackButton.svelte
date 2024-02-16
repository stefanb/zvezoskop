<script>
import { hist } from '../stores';
import { translate, locale } from '$lib/translations';
import { tField } from '../utils';
import backArrowIcon from '$lib/images/arrow_back.svg';
import LocalizedLink from './LocalizedLink.svelte';
import { platform } from "./MediaQuerySsr.svelte";



// let showButton = false;
let buttonText = null;

$: currentPage = $hist.length > 0 ? $hist[$hist.length - 1] : null
$: previousPage = $hist.length > 1 ? $hist[$hist.length - 2] : null

$: {
 if (!!previousPage?.url?.pathname) {
  if (previousPage.url.pathname !== currentPage.url.pathname) {
   if (previousPage.data.name) {
    buttonText = previousPage.data.name
   } else if (previousPage.data.affiliations?.length) {
    buttonText = tField(previousPage.data.affiliations[0], 'institution', $locale)
   } else if (previousPage.data.route === '/' || previousPage.data.route === '') {
    buttonText = $platform === 'mobile' ? $translate("Directory") : $translate("Main view")
   } else {
    buttonText = null;
   }
  } else {
   buttonText = null;
  }
 } else {
  buttonText = null;
 }
}

</script>

{#if buttonText}
 <div class="back-button">
  <LocalizedLink component="a" href={previousPage.data.route}>
   <img src={backArrowIcon} />
   <span>{$translate("Back to")} {buttonText}</span>
  </LocalizedLink>
  
 </div>
{/if}

<style lang="scss">
 :global(.back-button a) {
  color: #00001E !important;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 14px;
 }
 
</style>