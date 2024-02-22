<script>
	import 'material-icons/iconfont/material-icons.css';

	import { setContext } from 'svelte';
	import '../app.scss';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Alert from '../components/Alert.svelte';
	import './styles.css';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { showAlert } from '../stores';
	import { translate, locale } from '$lib/translations';
	import Analytics from '$lib/analytics.svelte'
	import defaultSiteImage from '$lib/images/zvezoskop.png';

	import { hist } from '../stores'
	import MediaQuery, { platform } from '../components/MediaQuerySsr.svelte';

	const images = import.meta.glob('$lib/img/**', { 
  query: { w: '100', h: '100', format: 'webp', grayscale: 'true' },
		eager: true
	});

	setContext("images", images)

	// let password = '';
	// const hash = (s) =>
	// 	s.split('').reduce((a, b) => {
	// 		a = (a << 5) - a + b.charCodeAt(0);
	// 		return a & a;
	// 	}, 0);

	// $: passwordProtected = process.env.NODE_ENV === 'production' && hash(password) !== -1258221729;
	$: {
		const histLength = $hist.length;

		if (histLength === 0) {
			$hist = [$page]
		} else if (histLength >= 2 && $hist[histLength - 2]?.data?.route === $page.data.route) {
			$hist.pop()
			$hist = $hist
		} else if ($hist[histLength - 1]?.data?.route !== $page.data.route) {
			$hist = [...$hist, $page]
		}
	}

	$: metaTitle = `${$page.data[$locale === 'en' ? 'title_en' : 'title_si']} • ${$translate('app_title')}`
	$: metaDescription = $page.data[$locale === 'en' ? 'description_en' : 'description_si'] || $translate('app_description')
	
	let metaImage = defaultSiteImage
	$: {
		if ($page.data.meta_image) {
			metaImage = images?.[$page.data.meta_image]?.default || defaultSiteImage
		}
	}

	$: console.log(metaImage)
</script>


<Analytics />

<MediaQuery />
<!-- {#if passwordProtected}
	<div class="password-container">
		<label for="password">Password:</label>
		<input id="password" bind:value={password} type="password" />
	</div>
{:else} -->
	<div class="app" class:noscroll={$showAlert}>
		<Alert />
		<!-- {#if $platform === 'mobile'}
			<MobileHeader />
		{:else} -->
			<Header />
		<!-- {/if} -->
		
		<main>
			<slot />
		</main>
		<!-- <footer /> -->
	</div>
<!-- {/if} -->

<svelte:head>
	<!-- <html lang="en" /> -->
	<!-- <link href="https://fonts.googleapis.com/css2?family=Material+Icons" -->
	<!-- rel="stylesheet"> -->
		<!-- <link rel="stylesheet" href="fonts/roboto.css" />
	<link rel="stylesheet" href="fonts/roboto-mono.css" />
	<link rel="stylesheet" href="mdc.typography.14.0.0.css" /> -->
	<link rel="stylesheet" href="{base}/smui.css" />
	<title>{metaTitle}</title>

	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={metaTitle}>
	<meta property="og:type" content="website" />
	<meta property="og:description" content={metaDescription}>

	<meta property="og:image" content={metaImage}>
	<meta property="og:url" content={$page.url.href}>
	<meta property="og:site_name" content="Zvezoskop">
	<meta name="twitter:card" content="summary">

</svelte:head>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		&.noscroll {
			overflow: hidden;
		}
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		margin-top: 61px;
		/* margin: 60px auto 0; */
		box-sizing: border-box;
		overflow-x: hidden;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	label {
		font-weight: bold;
	}
	input[type='password'] {
		width: 200px;
	}

	.password-container {
		margin: 20px;
	}
</style>
