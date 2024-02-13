<script>
  import { fly } from 'svelte/transition';
  import Autocomplete from '@smui-extra/autocomplete';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text } from '@smui/list';
  import { platform } from '../MediaQuerySsr.svelte';
  import { translate, locale } from '$lib/translations';

  import people from '$lib/data/people.json';
  import institutions from '$lib/data/institutions.json';
  import parties from '$lib/data/parties.json';
  import { slugify, tField, sortNames, sortInstitutions, normalizeString } from "../../utils";
	import { goto } from '$app/navigation';
  import { page } from '$app/stores';  
  import { base } from '$app/paths';
  import { hovered, selected, showAlert } from '../../stores'
  import personIcon from '$lib/images/person.svg';
	import institutionIcon from '$lib/images/institution.svg';
  import partyIcon from '$lib/images/party.svg';


  export let searchOpen = true;
  
  let value;

  $: options = [
   ...sortNames(people.map(({ name, ...rest }) => ({ type: 'person', label: name, name, ...rest }))),

   ...sortInstitutions(
    Object.entries(institutions).map(([slug, affiliations]) => ({ 
      slug, 
      type: !!parties.find(({ id }) => id === slug) ? 'party' : 'institution', 
      label: tField(affiliations[0], 'institution', $locale),
    })))
  ]

  $: {
    if (value && (value.id || value.slug.length)) {
      if (value?.type === 'person') {
        if ($platform === 'mobile') {
          searchOpen = false
          goto(`${base}/${$locale}/people/${value.id}`)
        } else {
          if ($selected.includes(value.id)) {
            $selected = $selected.filter(sId => sId !== value.id)
          } else {
            if ($selected.length > 1) {
              $showAlert = true;
            } else {
              $hovered = value.id
              $selected = [...$selected, value.id]
            }
          }

          // if ($page.url.pathname !== `${base}/${$locale}`) {
            // console.log('navigating', $page.url.pathname, `${base}/${$locale}`)
          goto(`${base}/${$locale}#skip-intro`)
          // }

        }
      }
      if (value?.type === 'institution' || value?.type === 'party') {
        goto(`${base}/${$locale}/institutions/${value.slug}`)
        searchOpen = false;
      }
    }
  }

  const prefix = '<p class="test">'

</script>
<div class="container" in:fly>
 <Autocomplete
  {options}
  textfield$variant="outlined"
  getOptionLabel={(option) =>
    option ? `${option.label + ' ' + normalizeString(option.label)}` : ''}
  bind:value
 >
  <div slot="match" let:match class="search-option">
    <img src={match.type === 'person' ? personIcon : (match.type === 'party' ? partyIcon : institutionIcon)} alt="Home" />
    <span>{match.label}</span>
  </div>
  <div slot="no-matches">
   <Text>{$translate("No matches found")}</Text>
  </div>
</Autocomplete>
<div class="close-icon">
  <IconButton class="material-icons" on:click={() =>{searchOpen = false}} size="button"
    >close</IconButton
  >
</div>

</div>

<style lang="scss">
 :global(.mdc-text-field) {
  background: white;
  max-height: 35px;
  border-radius: 5px;
 }

 :global(.mdc-text-field__input), :global(.mdc-deprecated-list-item__text) {
  font-size: 12px;
  width: 20vw;

  @media (max-width: $mobile) {
    width: 60vw;
  }
  // white-space: wrap;
 }

 :global(.mdc-deprecated-list-item) {
  height: auto;

 }

 :global(.mdc-deprecated-list) {
  max-width: 300px;

  // @media (max-width: $mobile) {
  //   width: 100%;
  // }
 }

 .container {
  display: flex;
  align-items: center;

  // @media (max-width: $mobile) {
  //   width: 100%;
  // }
 }

 .close-icon {
  transform: translateX(-33px);
  color: rgb(173, 173, 173);
  background: #fff;
 }

 :global(.mdc-icon-button) {
  // padding: 3px !important;
  // width: 30px !important;
  // height: 30px !important;

 }

 :global(.mdc-deprecated-list-item) {
  padding: 6px 10px !important;
  font-family: IBM Plex Sans !important;
  height: auto !important;
 }

 :global(.mdc-text-field) {
  border-radius: 4px !important;
 }

 :global(.mdc-text-field__input) {
  font-family: IBM Plex Sans;

 }
 
 :global(.mdc-deprecated-list) {
  padding: 0 !important;
 }

 .search-option {
  display: flex;
  align-items: start;
  gap: 7px;
  width: 100%;
  // padding: 6px 10px;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  img {
    height: 18px;
  }
 }

 
</style>