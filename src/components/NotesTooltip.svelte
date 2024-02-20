<script>
	import IconButton from '@smui/icon-button';
 import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';
	import { locale } from '$lib/translations';

 export let notes;
 export let size;
 export let zIndex = 100;

</script>

{#key $locale}
 <span style="--size: {size}" class="notes-tooltip" use:tooltip={{ title: notes.join('<br><br>'), zIndex }}>
  <IconButton class="material-icons" disabled size="mini">
   info
  </IconButton>
 </span>
{/key}

<style lang="scss">
 :global(.notes-tooltip > .mdc-icon-button.smui-icon-button--size-mini) {
  font-size: var(--size) !important;
  height: var(--size) !important;
  width: calc(var(--size) + 5px) !important;
  transform: translateY(2.5px);
  padding: 0 !important;
  padding-left: 3px !important;
 }

 :global(.notes-tooltip  .mdc-icon-button__ripple) {
  height: var(--size) !important;
  width: var(--size) !important;
 }
</style>
