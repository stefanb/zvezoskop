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
  import { hovered, selected, showAlert } from '../../stores'
  import { locale, translate } from '$lib/translations';


 const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');


 export let manyBodyStrength = -15;

 const initialLinks = $data.links.map((d, i) => ({ ...d, visible: false, id: i }))
 const initialNodes = $data.nodes.map((d) => ({ ...d }))

 let simulation;

 const runInitialSimulation = () => {
  console.log("runInitialSimulation", $selected, visibleLinks)
  let initialNodes = $data.nodes.map((d) => ({ ...d }))
  simulation = forceSimulation(initialNodes)

  simulation
    .force('collide', forceCollide().radius(d => $rGet(d) + 10).strength(2))
    .force('center', forceCenter($width / 2, $height / 2).strength(1))
    .force('charge', forceManyBody().strength(-35))
    .force("boundary", forceBoundary())
    .stop()


  recenterSimulation()
  recenterSimulation()
  recenterSimulation()
 }
 

const forceBoundary = () => {
  simulation?.nodes().forEach((node) => {
    const radius = $rGet(node);
    if (node.y < 0) {
      node.y = Math.random() * ($height/5)
    } else if (node.y > ($height - radius)) {
      node.y = Math.random() * (4 * $height/5)
    }
    // const y = Math.max(radius + 50, Math.min($height - 50 - radius, node.y));
    // node.y = y;

    if (node.x < 0) {
      node.x = Math.random() * ($width/5)
    } else if(node.x > ($width - radius)) {
      node.x = Math.random() * (3 * $width/5)
    }
    // const x = Math.max(radius + 50, Math.min($width - 50 - radius, node.x));
    // node.x = x
  });
}

 let nodes = [];
 let links = []
 let visibleLinks = []

 const recenterSimulation = () => {
  console.log("recenterSimulation", $selected, visibleLinks)

  if (simulation) {
    simulation.force('center', forceCenter($width / 2, $height / 2).strength(1))
      .force("boundary", forceBoundary())
      .force('collide', forceCollide().radius(d => $rGet(d)+ 10).strength(2))
      .force('charge', forceManyBody().strength(-35))

    tick();
  } else if ($width > 100) {

    runInitialSimulation();
    tick();
  }
 }

 const onResize = () => {
  clearFixedNodes();

  if (simulation) {
    selectItem();
  } else {
    runInitialSimulation()
  }
  // recenterSimulation();
 }

 const isConnectedToSelected = (d) => {
  if ($selected.length === 1) {
    if (!!visibleLinks.find(({ source, target }) => source.id === d.id || target.id === d.id)) {
      return true;
    }
  } else {
    const connectedToFirst = !!visibleLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[0] || target === $selected[0]))
    const connectedToSecond = !!visibleLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[1] || target === $selected[1]))
    return connectedToFirst && connectedToSecond
  }
  return false;
 }

 const fixConnectedNodes = () => {
  simulation.nodes().forEach((node) => {
    if (isConnectedToSelected(node)) {
      node.fx = node.x;
      node.fy = node.y;
    }
  })
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

 const clearFixedNodes = () => {
  simulation?.nodes().forEach((node) => {
    node.fx = undefined;
    node.fy = undefined;
  })
 }

 const selectItem = () => {
  console.log("selectItem", $selected, visibleLinks)

  if (simulation) {
    setLinkVisibility()
    
    if ($selected.length) {
      let whichNodes = initialNodes;
      let filteredLinks = visibleLinks;

      if ($selected.length === 2) {
        whichNodes = $data.nodes
          .map((d) => ({ ...d }))
          .filter((d) => {
            if ($selected.includes(d.id)) {
              return true;
            } else if (isConnectedToSelected(d)) {
              return true;
            } else {
              return false;
            }
          })

        filteredLinks = filteredLinks.filter(({ source, target }) => {
          return (
            whichNodes.find(({ id }) => source === id) && whichNodes.find(({ id }) => target === id)
          )
        })
      }
      // let filteredLinks = links.filter(({ visible }) => !!visible)
      // let filteredNodes = $data.nodes
      //   .map((d) => ({ ...d }))
      //   .filter((d) => {
      //     if ($selected.includes(d.id)) {
      //       return true;
      //     }
      //     if ($selected.length === 1) {
      //       if (!!filteredLinks.find(({ source, target }) => source === d.id || target === d.id)) {
      //         return true;
      //       }
      //     } else {
      //       const connectedToFirst = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[0] || target === $selected[0]))
      //       const connectedToSecond = !!filteredLinks.find(({ source, target }) => (source === d.id || target === d.id) && (source === $selected[1] || target === $selected[1]))
      //       return connectedToFirst && connectedToSecond
      //     }
          
      //     return false;
      //   })

        // console.log('calling select item', $selected, filteredLinks, filteredNodes)


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


      // filteredLinks = filteredLinks.filter(({ source, target }) => {
      //   return (
      //     filteredNodes.find(({ id }) => source === id) &&  filteredNodes.find(({ id }) => target === id)
      //   )
      // })

      simulation = forceSimulation(whichNodes)
        // .force('select', selectingForce())
        .force('collide', forceCollide().radius(d => $rGet(d)+ 10).strength(3))
        .force('charge', forceManyBody().strength(-100))
        // .force('charge', forceManyBody().strength(d => d.inactive ? 0 : -100))
        .force("link", forceLink(filteredLinks).id(d => d.id).strength(0.3).distance(({ source, target }) => { 
          // return 250;
          if ($selected.length > 1) {
            if ($selected.includes(source.id) && $selected.includes(target.id)) {
              return 250;
            } else {
              return 500
            }
          } else {
            if ($selected.includes(source.id) && $selected.includes(target.id)) {
              return 500;
            } else {
              return 250
            }
          }
         
        }))
        .force('center', forceCenter($width / 2, $height / 2).strength(1))
        .force("boundary", forceBoundary())
        
        .stop()

      fixSelectedNodes();

      tick()

      fixConnectedNodes()

      recenterSimulation()
      recenterSimulation()
          
    } else {
      clearFixedNodes()
      runInitialSimulation()
      tick()
    }
  }
 }

 const setLinkVisibility = () => {
  console.log("setLinkVisibility", $selected, visibleLinks)
  if ($hovered || $selected.length) {
    links = initialLinks.map(({ source, target, visible, ...rest }) => ({ 
      visible: (source === $hovered || target === $hovered || $selected.includes(source) || $selected.includes(target)),
      showLabel: $selected.includes(source) || $selected.includes(target),
      source,
      target,
      ...rest
    }))
    if (!visibleLinks.length) {
      visibleLinks = links.filter(({ visible }) => !!visible)
    }
    // console.log('links', links.filter(({ visible }) => !!visible))
  } else {
    links = initialLinks
  }
 }

 $: $width, $height, onResize()
 $: $selected, selectItem()
 $: $hovered, setLinkVisibility()
 $: visibleLinks = links.filter(({ visible }) => !!visible)

const tick = () => {
  // fixSelectedNodes();
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
  } else if ($selected.length > 1) {
    $showAlert = true;
  } else {
    $selected = [...$selected, id]
  }
 }

//  $: console.log('fixed nodes', simulation?.nodes().filter(({ fx }) => !!fx))


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
