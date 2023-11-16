<script>

 import { getContext, onMount } from 'svelte';
 import {
   forceSimulation,
   forceLink,
   forceManyBody,
   forceCollide,
   forceCenter,
 } from 'd3-force';
 import { drag } from 'd3-drag'
 import { select } from 'd3-selection';
 import Point from './Point.svelte';
	import { getColor } from '../../utils';
	import Link from './Link.svelte';
  import { hovered, selected } from '../../stores'
  import { locale, translate } from '$lib/translations';


 const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

//  console.log($zdata.nodes)

 export let manyBodyStrength = -15;

//  const initialNodes = $data.nodes.map((d) => ({ ...d }))
 const initialLinks = $data.links.map((d, i) => ({ ...d, visible: false, id: i }))
 let initialSimulation;
 let simulation;

 // const simulation = forceSimulation(initialNodes)
 const dragger = (el, node) => {
   const d = drag()
     .on('drag', ({x, y}) => {
       node.fx = x;
       node.fy = y;
     })
     .on('end', () => {
       node.fx = null;
       node.fy = null;
     });
   select(el).call(d);
 }

//  onMount(() => {
// 		runInitialSimulation()
//     // recenterSimulation()
//     tick()
// });

 const runInitialSimulation = () => {
  console.log('running initial simulation', $width, $height)
  let initialNodes = $data.nodes.map((d) => ({ ...d }))
  simulation = forceSimulation(initialNodes)

  simulation
    .force('collide', forceCollide().radius(d => $rGet(d) + 10).strength(0.2))
    .force('center', forceCenter($width / 2, $height / 2).strength(1))
    // .force('charge', forceManyBody().strength(manyBodyStrength))
    .force("boundary", forceBoundary())
    .stop()
  
  // recenterSimulation()
    

    // .alpha(0.8)
    // .restart()

  // simulation.on("tick", () => {
  //   nodes = simulation.nodes()
  //   // links = links
  // })

 }

//  onMount(() => runInitialSimulation())

 

const forceBoundary = () => {
  simulation?.nodes().forEach((node) => {
    const radius = $rGet(node);
    const y = Math.max(radius + 50, Math.min($height - 50 - radius, node.y));
    node.y = y;

    const x = Math.max(radius + 50, Math.min($width - 50 - radius, node.x));
    node.x = x
  });

  // nodes = simulation?.nodes()
}

const selectingForce = () => {
  simulation.nodes().forEach((node) => {
    if ($selected?.includes(node.id)) {
      node.y = $height/2;
      if ($selected.length === 1) {
        node.x = $width/2;
        return;
      } else if ($selected[0] === node.id) {
        node.x = 50;
      } else if ($selected[1] === node.id) {
        node.x = $width - 50;
      }
    }
    // const isLinked = links.find(({sourceNode, targetNode}) => targetNode.id === node.id || sourceNode.id === node.id)
    
    // if (isLinked) {
    //   node.x = 200;
    //   return;
    // } 

    // node.x = 300;
  })

  // nodes = nodes;
  // const selectedNode = nodes.find(({ id }) => {
  //   return id === selected;
  // })

  // if (selectedNode) {
  //   selectedNode.x = 100;

  // }


  // console.log(selectedNode)
}

 let nodes = [];
 let links = []

 const recenterSimulation = () => {
  if (simulation) {
    simulation.force('center', forceCenter($width / 2, $height / 2).strength(1))
      .force("boundary", forceBoundary())
      .force('collide', forceCollide().radius(d => $rGet(d)+ 10).strength(2))
      .force('charge', forceManyBody().strength(-20))

    tick();
  } else if ($width > 100) {
    runInitialSimulation();

    tick();
  }
 }

 const fixSelectedNodes = () => {
  simulation.nodes().forEach((node) => {
    if ($selected?.includes(node.id)) {
      node.fy = $height/2;
      if ($selected.length === 1) {
        node.fx = $width/2;
        return;
      } else if ($selected[0] === node.id) {
        node.fx = 50;
      } else if ($selected[1] === node.id) {
        node.fx = $width - 50;
      }
    }
  })
 }



 const selectItem = () => {
  if (simulation) {
    setLinkVisibility()
    
    if ($selected.length) {
      
      let filteredLinks = links.filter(({ visible }) => !!visible)
      let filteredNodes = $data.nodes
        .map((d) => ({ ...d }))
        .filter((d) => {
          if ($selected.includes(d.id)) {
            return true;
          }
          if ($selected.length === 1) {
            if (!!filteredLinks.find(({ source, target }) => source === d.id || target === d.id)) {
              return true;
            }
          } else {
            const connectedToFirst = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[0] || target === $selected[0]))
            const connectedToSecond = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[1] || target === $selected[1]))
            return connectedToFirst && connectedToSecond
          }
          
          return false;
        })

        console.log('calling select item', $selected, filteredLinks, filteredNodes)


        // to set inactive

        // let filteredNodes = $data.nodes
        // .map((d) => {
        //   let inactive = true;
        //   if ($selected.includes(d.id)) {
        //     inactive = false;
        //   }
        //   if ($selected.length === 1) {
        //     if (!!filteredLinks.find(({ source, target }) => source === d.id || target === d.id)) {
        //       inactive = false;
        //     }
        //   } else {
        //     const connectedToFirst = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[0] || target === $selected[0]))
        //     const connectedToSecond = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[1] || target === $selected[1]))
        //     inactive = !connectedToFirst || !connectedToSecond
        //   }
          
        //   return ({...d, inactive})
        // })


      filteredLinks = filteredLinks.filter(({ source, target }) => {
        return (
          filteredNodes.find(({ id }) => source === id) &&  filteredNodes.find(({ id }) => target === id)
        )
      })

      simulation = forceSimulation(filteredNodes)
        // .force('select', selectingForce())
        .force('collide', forceCollide().radius(d => $rGet(d)+ 10).strength(3))
        .force('charge', forceManyBody().strength(-100))
        // .force('charge', forceManyBody().strength(d => d.inactive ? 0 : -100))
        .force("link", forceLink(filteredLinks).id(d => d.id).strength(0.3).distance(({ source, target }) => { 
          if ($selected.includes(source.id) && $selected.includes(target.id)) {
            return 500;
          } else {
            return 250
          }
        }))
        .force('center', forceCenter($width / 2, $height / 2).strength(1))
        .force("boundary", forceBoundary())
        
        .stop()
        // .force('charge', forceManyBody().strength(-20))
        // .alpha(0.8)
        // .restart()

      tick()
        // .alpha(0.8)
        // .restart()
          
    } else {
      console.log('removing selection, resetting', $selected)

      runInitialSimulation()
      tick()
    }
  }
 }

 const setLinkVisibility = () => {
  console.log('setting link visibility', $selected)
  if ($hovered || $selected.length) {
    links = initialLinks.map(({ source, target, visible, ...rest }) => ({ 
      visible: (source === $hovered || target === $hovered || $selected.includes(source) || $selected.includes(target)),
      showLabel: $selected.includes(source) || $selected.includes(target),
      source,
      target,
      ...rest
    }))
    // console.log('links', links.filter(({ visible }) => !!visible))
  } else {
    links = initialLinks
  }
 }

 $: $width, $height, recenterSimulation()
 $: $selected, selectItem()
 $: $hovered, setLinkVisibility()
 $: visibleLinks = links.filter(({ visible }) => !!visible)

//  $: console.log(visibleLinks)
//  $: {
//   console.log('running simulation')
//   simulation
//     // .force("link", forceLink(links).id(d => d.id).strength(0.2))
   
//   //  .force("boundary", () => {
//   //     nodes.forEach((node) => {
//   //       const radius = 5;
//   //       const y = Math.max(radius, Math.min(Math.max(...$yRange) - offsetY - radius * 2, node.y));
//   //       node.y = y;

//   //       const x = Math.min($width - offsetXBoundary, node.x);
//   //       node.x = x
//   //     });
//   //   })
//     .alpha(0.8)
//     .restart()
// }

const tick = () => {
  fixSelectedNodes();
  for ( let i = 0,
    n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
    i < n;
    ++i ) {
    simulation.tick();
  }
  nodes = simulation.nodes()
}


 const onMouseover = id => {
  $hovered = id;
 }

 const onMouseout = () => {
  $hovered = null;
 }

 const onClick = id => {
  if ($selected.includes(id)) {
    $selected = $selected.filter(sId => sId !== id)
  } else {
    if ($selected.length > 1) {
      $selected.shift()
    }
    $selected = [...$selected, id]
  }
 }

//  $: console.log(links)

//  $: {
  // console.log('hovered', hovered, links, initialLinks)  // if (hovered) {
  //  links = initialLinks
  //   .filter(({ source, target }) => source === selected || target === selected)
    // .map(({ source, target }, i) => ({
    //   id: i,
    //   sourceNode: simulation.nodes().find(d => d.id === source),
    //   targetNode: simulation.nodes().find(d => d.id === target)
    // }))

  // console.log(links)
  // }
  // simulation
  //   .force("link", forceLink(links).id(d => d.id))
 // }

//  $: console.log(links.find(({source, target}) => target === '5' || source === '5'))
// $: console.log($selected, hovered)
</script>

{#each links as { index, source, target, visible, id, showLabel, institutions } (id)}
  <Link
    {id}
    {showLabel}
    {visible}
    institutions={institutions[$locale]}
    sourceNode={nodes.find(({ id }) => source === id)}
    targetNode={nodes.find(({ id }) => target === id)}
  />
{/each}
{#each nodes as point (point.id)}
 <Point
   class='node'
   r={$rGet(point)}
   allActive={!$hovered && !$selected.length}
   hovered={$hovered === point.id || !!visibleLinks.find(({ source, target }) => source === point.id || target === point.id)}
   selected={$selected.includes(point.id)}
   stroke={getColor(point.position)}
   x='{point.x}'
   y='{point.y}'
   id={point.id}
   label={point.name}
   hasImage={!!point.image_link}
   {onMouseover}
   {onMouseout}
   {onClick}
 />
{/each}

<style>
  .link-label {
  }
</style>

<!-- hovered={!!links.find(({sourceNode, targetNode}) => targetNode.id === point.id || sourceNode.id === point.id)} -->
