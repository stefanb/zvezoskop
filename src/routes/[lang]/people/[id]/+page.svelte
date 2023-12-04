<script>
 import { translate, locale, translations } from '$lib/translations';
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 import TimelineMobile from '../../../../components/TimelineMobile/Person/TimelineMobile.svelte';
 import { slugify, getColor, getTextColor, getDateYear, getDate, tField, getPositionLabel } from '../../../../utils';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';
 import LocalizedLink from '../../../../components/LocalizedLink.svelte';

 export let data;
 let timelineHeight;


$: party = tField(data, 'party', $locale);
</script>

<ProfileHeader
 title={data.name}
 subheading={getPositionLabel(data.position, data.gender, $locale)}
 imageLink={data.image_link}
 background={getColor(data.position)}
 textColor={getTextColor(data.position)}
 pageContentHeight={timelineHeight}
 details={[
  {
   label: $translate("Party"),
   component: party ? LocalizedLink : null,
   componentInner: party,
   componentProps: { href: `/institutions/${slugify(data.party_si)}`, component: 'a'}
  //  
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
   html: data.asset_tracker_link?.includes('http') && `<a rel="external" target="_blank" href=${data.asset_tracker_link}>${$translate('Link')}</a>`
  }
 ]}



/>

{#key data.id}
  {#if $platform}
    {#if data.cv}
      <div bind:clientHeight={timelineHeight}>
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
      </div>
    {:else}
      <div class="placeholder">
        {$translate("This person has no CV items in the database.")}
      </div>
    {/if}
  {/if}
{/key}


<style lang="scss">
  .placeholder {
    margin: 20px;
    // font-weight: 500;
    font-style: italic;
  }
</style>