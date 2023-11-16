
 <script>
  import { slugify } from "../../utils";
	import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { locale } from '$lib/translations';

  export let sourceNode;
  export let targetNode;
  export let id;
  export let institutions;
  export let visible;
  export let showLabel

  let path;
  $: {
   if (visible && sourceNode && targetNode) {
    const flip = sourceNode.x > targetNode.x;
    const start = flip ? targetNode : sourceNode;
    const end = flip ? sourceNode : targetNode;
    path = `M${start.x} ${start.y} L${end.x} ${end.y}`
   }
  }

  // $: shouldSplitLabel = sourceNode?.institution_si.length > 50;
</script>


{#if visible && sourceNode && targetNode}
 <path
   class='link'
   d={path}
   stroke="#c3c3c3"
   id={`link-${id}`}
  />
  {#if showLabel}
  <text
    dy="-3"
   >
    <textPath
      xlink:href={`#link-${id}`}
      startOffset="50%"
    >
      <tspan
        class="link__label"
        on:click={() => goto(`${base}/${$locale}/institutions/${slugify(institutions[0])}`)}
      >
        {institutions[0]}
      </tspan>
    </textPath>
  </text>
  
  {#if institutions.length > 1}
    <text
      dy="8"
    >
      <textPath
        xlink:href={`#link-${id}`}
        startOffset="50%"
      >
        {#if institutions.length > 2}
          <tspan
            class="link__label"
            style:pointer-events="none"
          >
            {`+${institutions.length - 1} more`}
          </tspan>
        {:else}
          <tspan
            class="link__label"
            on:click={() => goto(`${base}/${$locale}/institutions/${slugify(institutions[1])}`)}
          >
            {institutions[1]}
          </tspan>
        {/if}
      </textPath>
    </text>
  {/if}

 {/if}
{/if}

  


<style lang="scss">
  .link {
    &__label {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  text {
    text-anchor: middle;
    font: 8px sans-serif;
  }

</style>