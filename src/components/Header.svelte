<script>
	import { translate, setLocale, locale, setRoute } from '$lib/translations';
	import { platform } from "./MediaQuerySsr.svelte";

	import { goto, invalidateAll } from '$app/navigation';
	import { page, navigating } from '$app/stores';  
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button'
	import Search from './Search/Search.svelte';
	import IconButton from '@smui/icon-button';
	import List, { Item, Separator, Text } from '@smui/list';
	
	import { selected } from '../stores'
	import logo from '$lib/images/icon-network.svg';
	import languageEn from '$lib/images/language-en.svg';
	import languageSi from '$lib/images/language-si.svg';
	import LocalizedLink from './LocalizedLink.svelte';
	import { tooltip } from './tooltip';
 import TutorialDialog from './TutorialDialog.svelte';
	// import { invalidateAll } from '$app/navigation';

	let searchOpen = false;
	let tutorialOpen = false;
	let mobileMenuOpen = false;
	const toggleSearch = () => searchOpen = !searchOpen
	const toggleTutorial = () => tutorialOpen = !tutorialOpen

	$: if($navigating) mobileMenuOpen = false
	
	$: if($navigating) searchOpen = false;	

	$: console.log($platform)
</script>

<header class="header">
	<div class="header__left header-mobile-hide">
		<LocalizedLink href="/#skip-intro" onClick={() => { $selected = [] }}>
			<img src={logo} alt="Home" />
		</LocalizedLink>
		<div>
			<LocalizedLink component="a" href="/about">{$translate('header.about')}</LocalizedLink>
		</div>
		<div style:margin-top="-1px">
			<a target="_blank" href="//www.ostro.si/si/zgodbe/tag/zvezoskop">{$translate('header.stories')}</a>
		</div>
		<div>
			{#if searchOpen}
				<Search bind:searchOpen />
			{:else}
				<a style:cursor="pointer" on:click={toggleSearch}>
					<Label>{$translate('header.search')}</Label>
				</a>
			{/if}
		</div>
	</div>
	<div class="header__left header-mobile-show">
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
	{#if !searchOpen && $platform === 'desktop'}
		<LocalizedLink component="a" href="/">		
			<h3 class="header__title">{$translate('app_title')}</h3>
		</LocalizedLink>
	{/if}
	<div class="header__right header-mobile-hide">
		<Button on:click={() => (tutorialOpen = true)}>
			<Label>{$translate('header.tutorial')}</Label>
		</Button>
		<div>
			{#key $locale}
				<span use:tooltip={[$translate('header.asset_tracker_help_text')]}>
					<a target="_blank" href="//detektorpremozenja.si/">{$translate('header.asset_tracker')}</a>
				</span>
			{/key}
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
	<div class="material-icons header-mobile-show mobile-menu-toggle">
		<IconButton class="material-icons" on:click={() => mobileMenuOpen = !mobileMenuOpen}>{mobileMenuOpen ? 'close' : 'menu'}</IconButton>
	</div>
</header>

{#if mobileMenuOpen}
	<List class="mobile-menu header-mobile-show">
		<Item>
			<LocalizedLink href="/">{$translate('header.home')}</LocalizedLink>
		</Item>
		<Separator />
		<Item>
			<LocalizedLink href="/about">{$translate('header.about')}</LocalizedLink>
		</Item>
		<Separator />
		<Item>
			<a target="_blank" class="mobile-link" href="//www.ostro.si/si/zgodbe/tag/zvezoskop">{$translate('header.stories')}</a>
		</Item>
		<Separator />
		<Item>
			<Button on:click={() => (tutorialOpen = true)}>
				<Label>{$translate('header.tutorial')}</Label>
			</Button>
		</Item>
		<Separator />
		<Item>
				<a target="_blank" class="mobile-link" href="//detektorpremozenja.si/">{$translate('header.asset_tracker')}</a>
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

<TutorialDialog bind:open={tutorialOpen} />

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
		// text-transform: capitalize !important;
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

	:global(.header a), :global(.mobile-menu a), :global(.header .mdc-button__label), :global(.mobile-menu .mdc-button__label)  {
		color: white !important;
		font-family: IBM Plex Sans;
		font-size: 14px !important;
		font-weight: normal;
		text-decoration: none !important;
		padding: 0 8px;
		text-transform: none !important;

		&.mobile-link {
			padding: 6px 6px;
			color: white !important;
		}
	}

	:global(.header .mdc-button__label), :global(.mobile-menu .mdc-button__label)  {
		font-weight: 500 !important;
	}

	:global(.mobile-menu a) {
		color: white !important;
		// padding: 6px 0;
	}

	.header-mobile-hide {
		@media (max-width: 824px) {
			display: none !important;
		}
	}

	.header-mobile-show {
		@media (min-width: 825px) {
			display: none !important;
		}
	}
</style>
