<script>
  import { getContext } from 'svelte';

  export let cx;
  export let cy;
  export let r;

  export let color;


</script>

<circle
 {cx}
 {cy}
 r={r}
 fill={color || "#c3c3c3"}
/>




