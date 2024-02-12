<script>
	import IconButton from '@smui/icon-button';
 import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';
	import { locale } from '$lib/translations';

 export let notes;
 export let size;

</script>

{#key $locale}
 <span style="--size: {size}" class="notes-tooltip" use:tooltip={notes.join('<br><br>')}>
  <IconButton class="material-icons" disabled size="mini">
   info
  </IconButton>
 </span>
{/key}

<style lang="scss">
 :global(.notes-tooltip > .mdc-icon-button.smui-icon-button--size-mini) {
  font-size: var(--size) !important;
  height: var(--size) !important;
  transform: translateY(2.5px);
  padding: 0 !important;
 }

 :global(.notes-tooltip  .mdc-icon-button__ripple) {
  height: var(--size) !important;
  width: var(--size) !important;
 }
</style>
