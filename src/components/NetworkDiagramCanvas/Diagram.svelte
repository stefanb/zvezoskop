<script>
    import { getContext, onMount } from 'svelte';
    import { scaleCanvas } from 'layercake';


    import { scaleLinear, scaleOrdinal } from 'd3-scale';
    import { zoom, zoomIdentity } from 'd3-zoom';
    import { schemeCategory10 } from 'd3-scale-chromatic';
    import { select, selectAll, pointer } from 'd3-selection';
    import { drag } from 'd3-drag';
    import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';

    let d3 = { zoom, zoomIdentity, scaleLinear, scaleOrdinal, schemeCategory10, select, selectAll, pointer, drag,  forceSimulation, forceLink, forceManyBody, forceCenter }

    export let people;
    export let connections;

    const { data, width, height, zGet } = getContext('LayerCake');
    const { ctx } = getContext('canvas');

    let canvas;
    const nodeRadius = 5;

    const padding = { top: 20, right: 40, bottom: 40, left: 25 };

    $: links = connections.map(d => Object.create(d));
    $: nodes = people.map(d => Object.create(d));  

    const groupColour = d3.scaleOrdinal(d3.schemeCategory10);

    let transform = d3.zoomIdentity;
    let simulation, context
    
    onMount(() => {
        simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter($width / 2, $height / 2))
            .on("tick", simulationUpdate);

        
     });

      $: {
       if ($ctx) {
        scaleCanvas($ctx, $width, $height);
       // $ctx.clearRect(0, 0, $width, $height);
        // title
        d3.select($ctx.canvas)
             .on("mousemove", () => {
             const pointer = d3.pointer($ctx.canvas);
             const d = simulation.find(transform.invertX(pointer[0]), transform.invertY(pointer[1]), nodeRadius);
             
             if (d) 
                 $ctx.canvas.title = d.id;
             else
                 $ctx.canvas.title = '';
         });

         d3.select(canvas)
         .call(d3.drag()
             .container(canvas)
             .subject(dragsubject)
             .on("start", dragstarted)
             .on("drag", dragged)
             .on("end", dragended))
         .call(d3.zoom()
           .scaleExtent([1 / 10, 8])
           .on('zoom', zoomed));   

       }

      }
   
      // scaleCanvas($ctx, $width, $height);
      // $ctx.clearRect(0, 0, $width, $height);
    function simulationUpdate () {
     if ($ctx) {
        $ctx.save();
        $ctx.clearRect(0, 0, $ctx.canvas.width, $ctx.canvas.height);
        $ctx.translate(transform.x, transform.y);
        $ctx.scale(transform.k, transform.k);

        links.forEach(d => {
            $ctx.beginPath();
            $ctx.moveTo(d.source.x, d.source.y);
            $ctx.lineTo(d.target.x, d.target.y);
            $ctx.globalAlpha = 0.6;
            $ctx.strokeStyle = "#999";
            $ctx.lineWidth = Math.sqrt(d.value);
            $ctx.stroke();
            $ctx.globalAlpha = 1;
        });
        
        nodes.forEach((d, i) => {
            $ctx.beginPath();
            $ctx.arc(d.x, d.y, nodeRadius, 0, 2*Math.PI);
            $ctx.strokeStyle = "#fff";
            $ctx.lineWidth = 1.5;
            $ctx.stroke();
            $ctx.fillStyle = groupColour(d.group);
            $ctx.fill();
        });
        $ctx.restore();
       }
    }

    function zoomed(currentEvent) {
        transform = currentEvent.transform;
        simulationUpdate();
    }

    // Use the d3-force simulation to locate the node
    function dragsubject(currentEvent) {
        const node = simulation.find(transform.invertX(currentEvent.x), transform.invertY(currentEvent.y), nodeRadius);
        if (node) {
            node.x = transform.applyX(node.x);
            node.y = transform.applyY(node.y);
        }
        return node;
    }

    function dragstarted(currentEvent) {
        if (!currentEvent.active) simulation.alphaTarget(0.3).restart();
        currentEvent.subject.fx = transform.invertX(currentEvent.subject.x);
        currentEvent.subject.fy = transform.invertY(currentEvent.subject.y);
    }

    function dragged(currentEvent) {
        currentEvent.subject.fx = transform.invertX(currentEvent.x);
        currentEvent.subject.fy = transform.invertY(currentEvent.y);
    }

    function dragended(currentEvent) {
        if (!currentEvent.active) simulation.alphaTarget(0);
        currentEvent.subject.fx = null;
        currentEvent.subject.fy = null;
    }
</script>



<style>
 canvas {
     float: left;
 }
</style>