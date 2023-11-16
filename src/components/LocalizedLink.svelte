<script>
	import { locale } from '$lib/translations';
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button'

	export let onClick = undefined;
 export let href;
 export let forceLocale = false;
	export let component = 'button';
	export let css = "display: flex";

	$: fullHref = `${base}/${forceLocale || $locale}${href}`;
</script>

{#if component === 'button'}
	<Button href={fullHref} on:click={onClick}>
			<Label>
				<slot></slot>
			</Label>
		</Button>
{:else}
	<a href={fullHref} on:click={onClick} style={css}><slot></slot></a>

{/if}

<style>
	:global(.mdc-button__label) {
			color: #000;
			text-transform: capitalize;
			letter-spacing: 0;
		}

	:global(.mdc-button) {
		text-decoration: none !important;

	}
</style>