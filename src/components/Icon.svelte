<script>
 export let icon;
 export let width = "20";
 export let height = "20";
 export let color = "#00001E";
</script>

<svg width={width} height={height} viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
 {#if icon === 'minus'}
  <g>
   <path d="M0 10L20 10" stroke={color}/>
  </g> 
 {:else if icon === 'plus'}
  <g>
   <path d="M0 10L20 10" stroke={color}/>
   <path d="M10 0L10 20" stroke={color}/>
  </g>
 {/if}
</svg>
