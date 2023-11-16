<!--
  @component
  Generates an SVG Beeswarm chart using a [d3-force simulation](https://github.com/d3/d3-force).
 -->
 <script>
  import { getContext } from 'svelte';
  import { forceSimulation, forceX, forceY, forceCollide, forceCenter, forceLink, forceManyBody } from 'd3-force';
  import Point from './Point.svelte';

  const { data, xGet, width, height, zGet, xScale, yRange, xRange, rGet } = getContext('LayerCake');

  export let connections;

  const nodes = $data.map((d) => ({ ...d }));
  const links = connections.map((d) => ({ ...d }));

  $: console.log($height)


  /** @type {Number} [xStrength=0.95] - The value passed into the `.strength` method on `forceX`. See [the documentation](https://github.com/d3/d3-force#x_strength). */
  export let xStrength = 0.95;

  /** @type {Number} [yStrength=0.075] - The value passed into the `.strength` method on `forceY`. See [the documentation](https://github.com/d3/d3-force#y_strength). */
  export let yStrength = 0.075;

  export let manyBodyStrength = -15;


  const forceBoundary = () => {
    simulation?.nodes().forEach((node) => {
      const radius = $rGet(node);
      const y = Math.max(radius + 50, Math.min($height - 50 - radius, node.y));
      node.y = y;

      const x = Math.max(radius + 50, Math.min($width - 50 - radius, node.x));
      node.x = x
    });

    // nodes = nodes
  }

  const recenterSimulation = () => {
    console.log('recentering')
    if (simulation) {
      simulation.force('center', forceCenter($width / 2, $height / 2).strength(1))
    }
  }

  $: simulation = forceSimulation(nodes)
    // .force('x', forceX().x(d => $xGet(d)).strength(xStrength))
    // .force('y', forceY().y($height).strength(yStrength))
    .force('collide', forceCollide().radius(d => $rGet(d) + 10).strength(0.2))
    .force('center', forceCenter($width / 2, $height / 2).strength(1))
    .force('charge', forceManyBody().strength(manyBodyStrength))
    .force("boundary", forceBoundary())

    // .force("charge", forceManyBody().strength(-5))
    // .force("center", forceCenter($width / 2, $height / 2))
    // .force('collide', forceCollide().radius((d => isNaN(d.connectionCount) ? 2 : d.connectionCount/20)))
    // .force('link', forceLink(links).id((d) => d.id))
    // .force('boundary', () => {
    //   nodes.forEach((node) => {
    //     const radius = 5;
    //     const y = Math.max(radius, Math.min(Math.max(...$yRange) - radius * 2, node.y));
    //     node.y = y;

    //     const x = Math.min($width, node.x);
    //     node.x = x
    //   });
    // })
    .stop();

  $: {
    for ( let i = 0,
      n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
      i < n;
      ++i ) {
      simulation.tick();
    }
  }

  $: $width, $height, recenterSimulation()

</script>

<g class='bee-group'>
  {#each simulation.nodes() as node}
    <Point
      x='{node.x}'
      y='{node.y}'
      r='{isNaN(node.connectionCount) ? 2 : node.connectionCount}'
      id={node.id}
    />
  {/each}

  {#each links as link}
    <g stroke='#999' stroke-opacity='0.6'>
      <line x1='{link.source.x}' y1='{(link.source.y)}' 
            x2='{link.target.x}' y2='{(link.target.y)}'
            transform='translate(0 {$height}) scale(1 -1)'>
        
      </line>
    </g>
	{/each}

</g>