<script>
 import { translate, locale, translations } from '$lib/translations';
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 import TimelineMobile from '../../../../components/TimelineMobile/Person/TimelineMobile.svelte';
 import { slugify, getColor, getTextColor, getDateYear, getDate, tField, getPositionLabel } from '../../../../utils';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';

 export let data;

//  $: console.log($translations)
//  $: console.log(data)

</script>

<ProfileHeader
 title={data.name}
 subheading={getPositionLabel(data.position, data.gender, $locale)}
 imageLink={data.image_link}
 background={getColor(data.position)}
 textColor={getTextColor(data.position)}
 details={[
  {
   label: $translate("Party"),
   value: tField(data, 'party', $locale)
  },
  {
   label: $translate("Birth year"),
   value: getDateYear(data.birth_date)
  },
  {
   label: $translate("First time in office"),
   value: getDate(data.time_in_office),
   notes: [$translate("help_text.time_in_office")],
  },
  {
   label: $translate("Assets"),
   component: data.asset_tracker_link?.includes('http') && `<a rel="external" target="_blank" href=${data.asset_tracker_link}>${$translate('Link')}</a>`
  }
 ]}

/>

{#key data.id}
  {#if data.cv && $platform}
    {#if $platform === 'mobile'}
      <TimelineMobile
        items={data.cv}
        color={getColor(data.position)}
      />
    {:else}
      <Timeline 
        items={data.cv}
        color={getColor(data.position)}
        sectionGroupingVar="part_of_cv"
        rowGroupingVar="institution_si"
        getItemLink={({ institution_si }) => `/institutions/${slugify(institution_si)}`}
      />
    {/if}
  {/if}
{/key}