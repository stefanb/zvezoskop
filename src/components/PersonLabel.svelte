<script>
	import { getColor } from "../utils";
 import Label from "./Label.svelte";
	import LocalizedLink from "./LocalizedLink.svelte";

 export let image_link = undefined;
	export let imagePlaceholder = undefined;
 export let position = undefined;
	export let id = undefined;
 export let name = undefined;
	export let subheading = undefined;
	export let clickable = false;
	export let coloredText = false;
	export let css = undefined;
	export let size;
 
</script>

{#if clickable}
<LocalizedLink component={"a"} href={`/people/${id}`} {css}>
	<Label
			imageLink={image_link}
			{imagePlaceholder}
			border={getColor(position)}
			title={name}
			{subheading}
			{coloredText}
			{size}
		/>
</LocalizedLink>
{:else}
	<Label
		imageLink={image_link}
		{imagePlaceholder}
		border={getColor(position)}
		title={name}
		{subheading}
		{coloredText}
		{size}
	/>
{/if}

