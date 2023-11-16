
 <script>
	import { fade } from "svelte/transition";
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { locale, translate } from '$lib/translations';


	export let id;
 export let x;
 export let y;
 export let r;
	export let allActive;
	export let hovered;
	export let selected;
	export let stroke;
	export let onMouseover = () => null;
	export let onMouseout = () => null;
	export let onClick;
	export let label;
	export let hasImage;

 const strokeWidth = 2;
 // const stroke = '#fff';
 const tweenParameters = {
			duration: 400,
			easing: cubicOut,
	};

	const tX = tweened(x, tweenParameters);
 const tY = tweened(y, tweenParameters);
	const tR = tweened(r, tweenParameters);

	// let hovered = false;

 $: $tX = x;
 $: $tY = y;
	$: $tR = (allActive || hovered || selected) && !isNaN(r) ? r : 2;
	$: labelWidth = label.length * 5.5

	// $: console.log(r)

</script>

<circle
	class="Point"
 transition:fade
 cx={$tX}
 cy={$tY}
 r={$tR}
	fill={allActive || hovered || selected ? (hasImage ? `url(#${id})` : stroke) : "#c3c3c3"}
 stroke={selected ? "#ffb700" : (allActive || hovered ? stroke : "none")}
 stroke-width='{strokeWidth}'
	on:mouseover={() => {onMouseover(id)}}
	on:mouseout={() => {onMouseout()}}
	on:click={() => {onClick(id)}}
/>


{#if hovered || selected}
	<g 
		transform={`translate(${$tX}, ${$tY + $tR + 12})`}
		in:fade
		class="label"
		>
			<rect 
				x={-labelWidth/2}
				y={-5}
				width={labelWidth}
				height="15"
				fill={selected ? "#ffb700" : stroke} rx="7"
			/>
			<text
				x={0}
				y={3}
				fill={"#fff"}
			>
				{label}
			</text>
	</g>
	
{/if}

{#if selected}
	<g 
		transform={`translate(${$tX}, ${$tY - $tR - 10})`}
		in:fade
		class="label"
		on:click={() => goto(`${base}/${$locale}/people/${id}`)}
		>
		<rect 
				x={-25}
				y={-14}
				width={50}
				height="15"
				fill="#fff"
				stroke={selected ? "#ffb700" : stroke} rx="7"
		/>
	<text
			class="label link"
			x={0}
			y={-5}
			fill={"#ffb700"}
		>
			{$translate("View CV")}
		</text>
	</g>
{/if}

<style lang="scss">
	.Point {
		cursor: pointer;
	}

	.label {
		text-anchor: middle;
		font-size: 8px;
		font-weight: 600;
		background: white;

		text {
		 dominant-baseline: middle;
		}
	}

	.link {
		cursor: pointer;
		transition: all 100ms ease-in-out;
		

		&:hover {
			opacity: 0.6
		}
	}


</style>