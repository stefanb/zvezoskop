<script>
	import { translate, setLocale, locale, setRoute } from '$lib/translations';
	import { platform } from "./MediaQuerySsr.svelte";

	import { goto } from '$app/navigation';
	import { page, navigating } from '$app/stores';  
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button'
	import Menu from '@smui/menu';
	import Search from './Search/Search.svelte';
	import IconButton from '@smui/icon-button';
	import List, { Item, Separator, Text } from '@smui/list';
	
	import logo from '$lib/images/icon-network.svg';
	import languageEn from '$lib/images/language-en.svg';
	import languageSi from '$lib/images/language-si.svg';
	import LocalizedLink from './LocalizedLink.svelte';
	import NotesTooltip from './NotesTooltip.svelte';
	import { tooltip } from './tooltip';


	let searchOpen = false;
	let mobileMenuOpen = false;
	const toggleSearch = () => searchOpen = !searchOpen

	$: if($navigating) mobileMenuOpen = false
	
	$: if($navigating) searchOpen = false;	
</script>

<header class="header">
	<div class="header__left mobile-hide">
		<LocalizedLink href="/">
			<img src={logo} alt="Home" />
		</LocalizedLink>
		<div>
			<LocalizedLink href="/about">{$translate('header.about')}</LocalizedLink>
		</div>
		<div>
			<LocalizedLink href="/about">{$translate('header.stories')}</LocalizedLink>
		</div>
		<div>
			{#if searchOpen}
				<Search bind:searchOpen />
			{:else}
				<Button on:click={toggleSearch}>
					<Label>{$translate('header.search')}</Label>
				</Button>
			{/if}
		</div>
	</div>
	<div class="header__left mobile-show">
		<div class="search-container">
			{#if searchOpen}
				<Search bind:searchOpen />
			{:else}
				<IconButton class="material-icons" on:click={toggleSearch}>
					search
				</IconButton>
			{/if}
		</div>
		
	</div>
	{#if !searchOpen || $platform === 'desktop'}
		<LocalizedLink component="a" href="/">		
			<h3 class="header__title">{$translate('app_title')}</h3>
		</LocalizedLink>
	{/if}
	<div class="header__right mobile-hide">
		<div>
			<span use:tooltip={[$translate('header.asset_tracker_help_text')]}>
				<a href="//detektorpremozenja.si/">{$translate('header.asset_tracker')}</a>
			</span>
		</div>
		{#if $locale === 'en'}
			<Button on:click={() => { setLocale('si'); goto(`${base}/si${$page.data.route}`) }}>
				<img src={languageSi} alt="Switch language" />
			</Button>
		{:else}
			<Button on:click={() => { setLocale('en'); goto(`${base}/en${$page.data.route}`) }}>
				<img src={languageEn} alt="Switch language" />
			</Button>
		{/if}
	</div>
	<div class="material-icons mobile-show mobile-menu-toggle">
		<IconButton class="material-icons" on:click={() => mobileMenuOpen = !mobileMenuOpen}>{mobileMenuOpen ? 'close' : 'menu'}</IconButton>
	</div>
</header>

{#if mobileMenuOpen}
	<List class="mobile-menu mobile-show">
		<Item>
			<LocalizedLink href="/">{$translate('header.home')}</LocalizedLink>
		</Item>
		<Separator />
		<Item>
			<LocalizedLink href="/about">{$translate('header.stories')}</LocalizedLink>
		</Item>
		<Separator />
		<Item>
				<a href="//detektorpremozenja.si/">{$translate('header.asset_tracker')}</a>
		</Item>
		<Separator />
		<Item>
				{#if $locale === 'en'}
					<Button on:click={() => { setLocale('si'); goto(`${base}/si${$page.data.route}`) }}>
						<img src={languageSi} alt="Switch language" />
					</Button>
				{:else}
					<Button on:click={() => { setLocale('en'); goto(`${base}/en${$page.data.route}`) }}>
						<img src={languageEn} alt="Switch language" />
					</Button>
				{/if}
		</Item>
	</List>
{/if}

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		background-color: #00001E;
		padding: 1px 10px;
		position: fixed;
		width: 100%;
		z-index: 100;
		color: white;
		min-height: 59px;
		
		&__left, &__right {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__title {
			font-family: Noe Display;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			color: white;
			text-align: center;
			font-family: Noe Display;
			font-size: 20px;
			font-style: normal;
			// font-weight: 700;
			line-height: normal;
			margin: 13px 0;
		}
	}

	.mobile-menu-toggle {
		position: absolute;
		right: 30px;
		top: 50%;
		transform: translateY(-50%);
	}

	

	:global(.mdc-button__label) {
		color: #fff !important;
		text-transform: capitalize !important;
  font-family: IBM Plex Sans !important;
	}

	:global(.mdc-deprecated-list.mobile-menu) {
			max-width: $max-width !important;
			width: 100%;
			transform: translateY(60px);
			position: fixed !important;
			height: calc(100vh - 70px);
			background: $grey;
			z-index: 1000;

			:global(.mdc-button) {
				padding: 0;
				min-width: 0;
			}		

			:global(.mdc-deprecated-list-divider) {
				border-bottom-color: white;
			}

			:global(.mdc-deprecated-list-item) {
				background: $grey;

				&:last-child {
					padding-top: 10px;
				}
			}
	}

	:global(a) {
		color: white !important;
		font-size: 14px;
	font-weight: normal;
	text-decoration: none !important;
	}
</style>
