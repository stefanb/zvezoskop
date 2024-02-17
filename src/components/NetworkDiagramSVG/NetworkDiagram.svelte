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
	import Button, { Label } from '@smui/button'
 import { translate, locale } from '$lib/translations';
	import iconNetwork from '$lib/images/icon-network_blue.svg';
	import iconBack from '$lib/images/arrow_back_blue.svg';



 export let people;
 export let connections;

	const clearSelected = () => {
		$selected = []
	}

	onDestroy(clearSelected)

	const seriesColors = ['#4600BE', '#3CBEAA', '#28A0D2', '#b2c1ff'];
</script>

{#if $selected.length > 0}
<div class="clear-selected">
	<Button on:click={clearSelected} size="mini" variant="outlined">
		
		<Label>
			<img style:height="14px" src={iconNetwork} />
			<img style:height="16px" src={iconBack} />

			{$translate("Back to full network")}</Label>

	</Button>
</div>
{/if}

<div class="chart-container">
	<LayerCake
			data={{ nodes: people, links: connections }}
			flatData={people}
			r="connectionCount"
			rRange={[9, 28]}
			z="position"
			zScale={scaleOrdinal()}
   zRange={seriesColors}
	>
		<Svg>
			<svelte:fragment slot="defs">
				{#each people as { id, image_link }}
					<Image imageLink={image_link} size={100} let:imageSrc>
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

<style>
	.chart-container {
		width: calc(100vw - 70px);
		height: calc(100vh - 100px);
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.clear-selected {
		position: absolute;
		top: 70px;
		left: 10px;
		z-index: 10;
	}

	:global(.clear-selected .mdc-button) {
  border-radius: 40px !important;
		background: #fff !important;

		/* opacity: 0.6; */
  border: 2px solid #4600BE !important;


 }

	:global(.clear-selected .mdc-button__label) {
		color: #4600BE !important;
		text-transform: none;
		font-size: 11px;
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
</style>