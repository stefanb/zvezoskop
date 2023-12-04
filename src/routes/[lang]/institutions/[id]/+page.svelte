<script>
 import PersonLabel from '../../../../components/PersonLabel.svelte';
 import { locale } from '$lib/translations';

import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
	import TimelineMobile from '../../../../components/TimelineMobile/Institution/TimelineMobile.svelte';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';
 import InstitutionBreakdown from '../../../../components/InstitutionBreakdown.svelte';
 import TimelineLegend from '../../../../components/TimelineLegend.svelte';
 import { tField } from '../../../../utils';

 export let data;

 let notes;
 let timelineHeight;

 $: {
  const notesRaw = data.affiliations.map(a => tField(a, 'notes_institution', $locale)).filter(note => note?.length > 0)

  notes = [...new Set(notesRaw)];
 }


</script>


{#key data.route}
  <ProfileHeader
    title={tField(data.affiliations?.[0], 'institution', $locale)}
    notes={notes}
    background={$platform === 'mobile' || !!data.partyData ? '#E6E6EB' : '#FFF'}
    border={$platform === 'mobile' || !!data.partyData ? '#FFF' : '#6E7382'}
    hideLegend={!!data.partyData}
    pageContentHeight={timelineHeight}
  />
  {#if data.partyData}
    <InstitutionBreakdown affiliations={data.partyData.affiliations} />
    <TimelineLegend />
  {/if}
  {#if $platform}
    <div bind:clientHeight={timelineHeight}>
      {#if $platform === 'mobile'}
        <TimelineMobile
        items={data.affiliations}
        />
      {:else}
        <Timeline
          items={data.affiliations}
          rowGroupingVar="person_name"
          getItemLink={({ person_id }) => `/people/${person_id}`}
          getItemLabel={({ person_id }) => {
            const person = data.associatedPeople.find(({ id }) => id === person_id)
            return person
          }}
        />
      {/if}
    </div>
  {/if}
{/key}
