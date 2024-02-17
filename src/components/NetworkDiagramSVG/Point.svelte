
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
	$: labelWidth = label.length * 7

	// $: console.log(r)

</script>

<circle
	class="Point"
 transition:fade
 cx={$tX}
 cy={$tY}
 r={$tR}
	fill={allActive || hovered || selected ? (hasImage ? `url(#${id})` : stroke) : "#c3c3c3"}
 stroke={selected ? "#FA0" : (allActive || hovered ? stroke : "none")}
 stroke-width='{strokeWidth}'
	on:mouseover={() => {onMouseover(id)}}
	on:mouseout={() => {onMouseout()}}
	on:click={() => {onClick(id)}}
/>

{#if selected}
	<circle 
		r=8
		fill="#FA0"
		cx={$tX + $tR}
		cy={$tY - $tR}
		stroke="#fff"
		class="close-icon"
		on:click={() => {onClick(id)}}
	/>
	<g class="close-icon__inner" transform={`translate(${$tX + $tR}, ${$tY - $tR})`}>
		<path stroke="#fff" stroke-width=2 d="M-3 -3 3 3 M3 -3 -3 3" />
	</g>
{/if}


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
				height="17"
				fill={selected ? "#FA0" : stroke} rx="7"
			/>
			<text
				x={0}
				y={4}
				fill={"#fff"}
			>
				{label}
			</text>
	</g>

{/if}

{#if selected}
	<g 
		transform={`translate(${$tX}, ${$tY - $tR - 15})`}
		in:fade
		class="label"
		on:click={() => goto(`${base}/${$locale}/people/${id}`)}
		>
		<rect 
				x={-35}
				y={-14}
				width={70}
				height="17"
				fill="#00001E"
				stroke={selected ? "#00001E" : stroke} rx="7"
		/>
	<text
			class="label link"
			x={0}
			y={-4}
			fill={"#FFF"}
		>
			{$translate("View CV")}
		</text>
	</g>
{/if}

<style lang="scss">
	.Point {
		cursor: pointer;
			// &:hover {
			// 	stroke: #ffcd80;
			// }
	}

	.label {
		text-anchor: middle;
		font-size: 8px;
		font-weight: 600;
		background: white;
		cursor: pointer;

		text {
		 dominant-baseline: middle;
			font-size: 11px;
		}
	}

	.link {
		cursor: pointer;
		transition: all 100ms ease-in-out;
		
		text {
		 dominant-baseline: middle;
			font-size: 11px;
		}

		&:hover {
			opacity: 0.6
		}
	}

	.close-icon {
		cursor: pointer;

		&:hover {
			fill: #ffcd80;
		}

		&__inner {
			pointer-events: none;
		}
	}

</style>