<script>
  import { locale, translate } from '$lib/translations';
  import { getYearsLabel } from '../utils';

  export let item;

  $: label = getYearsLabel(item, $locale, $translate('present'))

</script>

{label}