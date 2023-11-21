import institutions from '$lib/data/institutions.json';
import people from '$lib/data/people.json';
import parties from '$lib/data/parties.json';

// export const prerender = "auto";

export async function load({ params }) {
 const { id } = params;

 const affiliations = institutions[id]

 const associatedPeople = affiliations.map(({ person_id }) => people.find(d => d.id === person_id))

 const partyData = parties.find(({ id:partyId }) => id === partyId)

 const institutionData = affiliations[0];

 const title_si = institutionData.institution_si
	const title_en = institutionData.institution_en

 return ({ affiliations, associatedPeople, partyData, title_si, title_en })
}