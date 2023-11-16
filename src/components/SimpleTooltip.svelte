<script>
	import IconButton from '@smui/icon-button';
 import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';

 export let text;

</script>

<span use:tooltip>
  <slot />
</span>