<script>
	import IconButton from '@smui/icon-button';
 import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';

 export let notes;

</script>

<span use:tooltip={notes.join('<br><br>')}>
 <IconButton class="material-icons" disabled size="mini">
  info
 </IconButton>
</span>

<style lang="scss">
 :global(.mdc-icon-button.smui-icon-button--size-mini) {
  font-size: 18px;
  height: 0 !important;
  transform: translateY(2.5px);
 }
</style>
