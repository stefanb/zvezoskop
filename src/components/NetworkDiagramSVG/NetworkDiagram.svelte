<script>
	// Node-link diagram in layercake.graphics 
	// as seen on:
	// https://jandot.github.io/posts/nodelink-in-layercake/
	// https://vis.social/@jandot

	import { onDestroy } from 'svelte';
	import { LayerCake, Svg } from 'layercake';
import NodeLink from './NodeLink.svelte';
import { scaleOrdinal, scaleBand } from 'd3-scale';
import { selected } from '../../stores'
import Image from '../Image.svelte';


 export let people;
 export let connections;

	onDestroy(() => {
		$selected = []
	})

	const seriesColors = ['#4600BE', '#3CBEAA', '#28A0D2', '#b2c1ff'];

	// console.log(people)
</script>

<style>
	.chart-container {
		width: 100%;
		height: calc(100vh - 60px);
	}
</style>

<div class="chart-container">
	<LayerCake
			data={{ nodes: people, links: connections }}
			flatData={people}
			r="connectionCount"
			rRange={[4, 24]}
			z="position"
			zScale={scaleOrdinal()}
   zRange={seriesColors}
	>
		<Svg>
			<svelte:fragment slot="defs">
				{#each people as { id, image_link }}
					<Image imageLink={image_link} let:imageSrc>
						{#if imageSrc}
							<pattern id={id} x="0" y="0" height = "100%" width = "100%" patternContentUnits = "objectBoundingBox" xmlns="http://www.w3.org/2000/svg">
									<image x="0" y="0" preserveAspectRatio = "none" width = "1" height = "1" xlink:href={imageSrc}></image>
							</pattern>
						{/if}
					</Image>
				{/each} 
			</svelte:fragment>
			<NodeLink />
		</Svg>
	</LayerCake>
</div>