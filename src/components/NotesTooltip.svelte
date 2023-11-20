<script>
	import IconButton from '@smui/icon-button';
 import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';

 export let notes;

</script>

<span class="notes-tooltip" use:tooltip={notes.join('<br><br>')}>
 <IconButton class="material-icons" disabled size="mini">
  info
 </IconButton>
</span>

<style lang="scss">
 :global(.notes-tooltip > .mdc-icon-button.smui-icon-button--size-mini) {
  font-size: 18px !important;
  height: 0 !important;
  transform: translateY(2.5px);
 }

 :global(.notes-tooltip  .mdc-icon-button__ripple) {
  height: 18px !important;
  width: 18px !important;
 }
</style>
