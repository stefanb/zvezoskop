<script>
	import { locale } from '$lib/translations';
	import aboutIntroSiIcon from '$lib/images/about-intro-si.svg';

	import icon1 from '$lib/images/about/1.svg';
	import icon2 from '$lib/images/about/2.svg';
	import icon3 from '$lib/images/about/3.svg';
	import icon4 from '$lib/images/about/4.svg';
	import icon5 from '$lib/images/about/5.svg';
	import icon6 from '$lib/images/about/6.svg';
	import icon7 from '$lib/images/about/7.svg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About" />
</svelte:head>

{#if $locale === 'si'}
	<div>
		<div class="section">
			<div class="section__inner">
				<img class="intro-icon" src={aboutIntroSiIcon} />
				<h1>Po poklicnih poteh političnih funkcionarjev</h1>
				<p>Projekt Zvezoskop interaktivno prikazuje poklicne odnose med aktualnimi slovenskimi politiki, njihovimi karierami in podjetji. Novinarji Oštra so v vizualizacijo vključili člane vlade, državne sekretarje in poslance državnega zbora.</p>
			</div>
		</div>

		<div class="section light-grey">
			<div class="section__inner">
				<h1>O projektu</h1>
				<p>Slovenija je majhna država z dvema milijonoma prebivalcev, v kateri je v javnosti razširjeno mnenje, da so pri kadrovskih odločitvah pomembnejši osebni odnosi in lojalnost kot kompetence. To spodkopava zaupanje ljudi v vlado in državni zbor ter ustvarja tveganja za navidezna ali dejanska navzkrižja interesov pri predstavnikih zakonodajno-izvršilne oblasti.</p>
				<p>Projekt Zvezoskop je bil zasnovan z namenom prikazati kariere političnih funkcionarjev in poiskati njihove presečne točke oziroma področja. Gre za povsem svež pristop k obravnavi te teme v Sloveniji. Pred desetletjem je nemški časopis Die Zeit ustvaril podoben, vendar bolj preprost vizualni prikaz karier ministrov tedanje vlade.</p>

				<h2>Zakaj Zvezoskop?</h2>
				<p>Na zadnjih četvero državnozborskih volitvah v Sloveniji so zmagale politične stranke, ki so nastale pred volitvami. Proporcionalni sistem volivcem onemogoča, da bi dejansko izbrali svoje predstavnike, in tako na politične funkcije lahko pripelje popolne neznance.</p>
				<p>Med člani vlade, državnimi sekretarji in poslanci, ki so zajeti v interaktivno vizualizacijo, je XXXX odstotkov takih, ki nikoli prej niso bili izvoljeni na splošnih volitvah ali imenovani za ministre oziroma državne sekretarje. Zanimalo nas je, kako se njihove dosedanje poti križajo, ali in koliko v posamezno politično kariero pronicajo druge interesne sfere in podobno.</p>
				<p>Oštro je zbral in analiziral podatke o kariernih poteh treh skupin političnih funkcionarjev, njihova omrežja so prikazana v interaktivni vizualizaciji teh podatkov.</p>
			
				<h2>Kaj prikazuje interaktivna vizualizacija?</h2>
				<ol>
					<li>Povezave med političnimi funkcionarji, da bi javnosti olajšali vpogled vanje in omogočili samostojno odkrivanje presečišč njihovih dosedanjih poklicnih poti.</li>
					<li>Preverjene podatke o poklicnih poteh, od izobraževanja v osnovni šoli do današnje politične funkcije.</li>
					<li>Aktualne in pretekle pozicije oziroma vloge funkcionarjev v drugih organizacijah, institucijah ali podjetjih, kar omogoča pregled nad vsemi politiki, ki jih povezuje posamezna organizacija.</li>
					<li>Vpogled v izobrazbene, poklicne in interesne profile političnih strank, ki so zastopane v vladi in državnem zboru.</li>
				</ol>
				<h2>Kako lahko projekt koristi uporabnikom?</h2>
				<ol>
					<li>Na preprost način lahko samostojno raziskujejo podatke o izobrazbi političnih funkcionarjev, preteklih zaposlitvah in članstvu v političnih strankah in drugih interesnih skupinah.</li>
					<li>Pri tem lahko spremljajo, kako se je dosedanja poklicna pot aktualnega funkcionarja prepletala z drugimi funkcionarji.</li>
					<li>Samostojno lahko raziskujejo karierne poti funkcionarjev in spremljajo prehajanje kadrov iz javnega v zasebni sektor in nasprotno.</li>
					<li>Volivcem omogoča dostop do verodostojnih in preverjenih podatkov o karieri poslancev, ministrov in državnih sekretarjev, ki jim bodo v pomoč pri sprejemanju informiranih odločitev.</li>
					<li>Za novinarje, nevladne organizacije, akademike in druge raziskovalce je delovno orodje pri morebitnem samostojnem raziskovanju političnih poti in omrežij.</li>
				</ol>
			</div>
		</div>

		<div class="section medium-grey">
			<div class="section__inner">
				<h1>
					Metodologija projekta
				</h1>
				<p>Karierne in življenjske poti različnih političnih funkcionarjev so v majhni državi, kot je Slovenija, močno prepletene, naj gre za institucije, kjer so se izobraževali, prejšnje delodajalce, politične stranke ali prosti čas. Ekipa projekta Veze.si je za delovno izhodišče vzela javno objavljene življenjepise političnih funkcionarjev, nato pa jih je z uporabo preiskovalnih in podatkovnih tehnik nadgradila.</p>
			
				<h5>
					<img class="icon" src={icon1} />
					<span>Preiskava</span>
				</h5>
				<p>Ekipa je zbirala, preverjala in analizirala podatke o kariernih poteh XXXX političnih funkcionarjev.</p>

				<h5>
					<img class="icon" src={icon2} />
					<span>Viri podatkov</span>
				</h5>
				<p>Podatke smo preverjali in dopolnjevali na podlagi javnih objav, jih iskali v registrih in specializiranih podatkovnih bazah, medijskih arhivih, na družbenih omrežjih in s samostojnim preiskovalnim delom. </p>

				<h5>
					<img class="icon" src={icon3} />
					<span>Dokazi</span>
				</h5>
				<p>Vsak podatek, vključen v interaktivno vizualizacijo, temelji na primarnih virih, uradnih dokumentih in informacijah, pa tudi potrditvah posameznih funkcionarjev.</p>

				<h5>
					<img class="icon" src={icon4} />
					<span>Dvojno preverjanje</span>
				</h5>
				<p>Novinarji so vse podatke dvojno preverili, kar pomeni, da sta podatke o kariernih poteh posameznega funkcionarja neodvisno zbirala dva člana ekipe, pri čemer sta uporabljala tehnike preiskovalnega in podatkovnega novinarstva.</p>

				<h5>
					<img class="icon" src={icon5} />
					<span>Pravica do odgovora</span>
				</h5>
				<p>Vse politične funkcionarje smo pravočasno seznanili z zbranimi podatki ter jih prosili za popravke in dopolnitve. </p>

				<h5>
					<img class="icon" src={icon6} />
					<span>Preverjanje dejstev</span>
				</h5>
				<p>Skladno s kodeksom Oštra so verodostojnost podatkov pred objavo notranje preverili še člani ekipe, ki niso sodelovali pri njihovem pridobivanju. Vse dokaze smo arhivirali in jih hranimo v uredništvu. </p>

				<h5>
					<img class="icon" src={icon7} />
					<span>Wikidata</span>
				</h5>
				<p>Preverjene podatke bomo po objavi projekta naložili tudi v brezplačno in prosto dostopno podatkovno zbirko Wikidata, ki jo ureja skupnost uporabnikov, upravlja pa Wikipedia Foundation. Wikidata deluje kot osrednje skladišče za strukturirane podatke njenih sestrskih projektov, kot so Wikipedija, Wikivoyage, Wiktionary, Wikisource in drugi. Tako bomo k odprtemu dostopu do informacij prispevali tudi v korist širše mednarodne skupnosti.</p>
				
				<p>V podatkovni bazi prikazujemo podatke na dan XXXX 2023. Oštro zaradi omejenih kadrovskih zmogljivosti ne more zagotavljati aktualnosti podatkov v vsakem trenutku. 
					Dodatne informacije o poklicnih poteh funkcionarjev nam lahko pošljete na elektronski naslov XXXX@ostro.si ali po pošti na naslov Oštro, Kotnikova ulica 28, 1000 Ljubljana.</p>
			</div>
		</div>

		<div class="section dark-grey">
			<div class="section__inner">
				<h1>Kolofon</h1>
				<div class="two-columns">
					<div class="two-columns__item">
						<p>Odgovorna urednica</p>
						<p>Anuška Delić</p>
					</div>
					<div class="two-columns__item">
						<p>Vodja projekta</p>
						<p>Klara Škrinjar</p>
					</div>
					<div class="two-columns__item">
						<p>Avtorji</p>
						<p>Maja Čakarić, Samo Demšar, Žana Erznožnik, Martin Justin, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
					</div>
					<div class="two-columns__item">
						<p>Preverjanje dejstev</p>	
						<p>Katarina Bulatović, Maja Čakarić, Samo Demšar, Žana Erznožnik, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
					</div>
					<div class="two-columns__item">
						<p>Prenos v javne podatkovne zbirke</p>
						<p>JD Bohnam (moram še vprašati)</p>
					</div>
					<div class="two-columns__item">
						<p>Razvoj platforme</p>
						<p>Kirk G. Jackson</p>
					</div>
					<div class="two-columns__item">
						<p>Oblikovanje</p>
						<p>Studio Mashoni</p>
					</div>
					<div class="two-columns__item">
						<p>Prevod</p>	
						<p>Sebastijan Maček</p>
					</div>
					<div class="two-columns__item">
						<p>Projekt sofinancira</p>	
						<p>Google News Initiative Innovation Challenge</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
<div>
	<div class="section">
		<div class="section__inner">
			<img class="intro-icon" src={aboutIntroSiIcon} />
			<h1>Po poklicnih poteh političnih funkcionarjev</h1>
			<p>Projekt Zvezoskop interaktivno prikazuje poklicne odnose med aktualnimi slovenskimi politiki, njihovimi karierami in podjetji. Novinarji Oštra so v vizualizacijo vključili člane vlade, državne sekretarje in poslance državnega zbora.</p>
		</div>
	</div>

	<div class="section light-grey">
		<div class="section__inner">
			<h1>O projektu</h1>
			<p>Slovenija je majhna država z dvema milijonoma prebivalcev, v kateri je v javnosti razširjeno mnenje, da so pri kadrovskih odločitvah pomembnejši osebni odnosi in lojalnost kot kompetence. To spodkopava zaupanje ljudi v vlado in državni zbor ter ustvarja tveganja za navidezna ali dejanska navzkrižja interesov pri predstavnikih zakonodajno-izvršilne oblasti.</p>
			<p>Projekt Zvezoskop je bil zasnovan z namenom prikazati kariere političnih funkcionarjev in poiskati njihove presečne točke oziroma področja. Gre za povsem svež pristop k obravnavi te teme v Sloveniji. Pred desetletjem je nemški časopis Die Zeit ustvaril podoben, vendar bolj preprost vizualni prikaz karier ministrov tedanje vlade.</p>

			<h2>Zakaj Zvezoskop?</h2>
			<p>Na zadnjih četvero državnozborskih volitvah v Sloveniji so zmagale politične stranke, ki so nastale pred volitvami. Proporcionalni sistem volivcem onemogoča, da bi dejansko izbrali svoje predstavnike, in tako na politične funkcije lahko pripelje popolne neznance.</p>
			<p>Med člani vlade, državnimi sekretarji in poslanci, ki so zajeti v interaktivno vizualizacijo, je XXXX odstotkov takih, ki nikoli prej niso bili izvoljeni na splošnih volitvah ali imenovani za ministre oziroma državne sekretarje. Zanimalo nas je, kako se njihove dosedanje poti križajo, ali in koliko v posamezno politično kariero pronicajo druge interesne sfere in podobno.</p>
			<p>Oštro je zbral in analiziral podatke o kariernih poteh treh skupin političnih funkcionarjev, njihova omrežja so prikazana v interaktivni vizualizaciji teh podatkov.</p>
		
			<h2>Kaj prikazuje interaktivna vizualizacija?</h2>
			<ol>
				<li>Povezave med političnimi funkcionarji, da bi javnosti olajšali vpogled vanje in omogočili samostojno odkrivanje presečišč njihovih dosedanjih poklicnih poti.</li>
				<li>Preverjene podatke o poklicnih poteh, od izobraževanja v osnovni šoli do današnje politične funkcije.</li>
				<li>Aktualne in pretekle pozicije oziroma vloge funkcionarjev v drugih organizacijah, institucijah ali podjetjih, kar omogoča pregled nad vsemi politiki, ki jih povezuje posamezna organizacija.</li>
				<li>Vpogled v izobrazbene, poklicne in interesne profile političnih strank, ki so zastopane v vladi in državnem zboru.</li>
			</ol>
			<h2>Kako lahko projekt koristi uporabnikom?</h2>
			<ol>
				<li>Na preprost način lahko samostojno raziskujejo podatke o izobrazbi političnih funkcionarjev, preteklih zaposlitvah in članstvu v političnih strankah in drugih interesnih skupinah.</li>
				<li>Pri tem lahko spremljajo, kako se je dosedanja poklicna pot aktualnega funkcionarja prepletala z drugimi funkcionarji.</li>
				<li>Samostojno lahko raziskujejo karierne poti funkcionarjev in spremljajo prehajanje kadrov iz javnega v zasebni sektor in nasprotno.</li>
				<li>Volivcem omogoča dostop do verodostojnih in preverjenih podatkov o karieri poslancev, ministrov in državnih sekretarjev, ki jim bodo v pomoč pri sprejemanju informiranih odločitev.</li>
				<li>Za novinarje, nevladne organizacije, akademike in druge raziskovalce je delovno orodje pri morebitnem samostojnem raziskovanju političnih poti in omrežij.</li>
			</ol>
		</div>
	</div>

	<div class="section medium-grey">
		<div class="section__inner">
			<h1>
				Metodologija projekta
			</h1>
			<p>Karierne in življenjske poti različnih političnih funkcionarjev so v majhni državi, kot je Slovenija, močno prepletene, naj gre za institucije, kjer so se izobraževali, prejšnje delodajalce, politične stranke ali prosti čas. Ekipa projekta Veze.si je za delovno izhodišče vzela javno objavljene življenjepise političnih funkcionarjev, nato pa jih je z uporabo preiskovalnih in podatkovnih tehnik nadgradila.</p>
		
			<h5>
				<img class="icon" src={icon1} />
				<span>Preiskava</span>
			</h5>
			<p>Ekipa je zbirala, preverjala in analizirala podatke o kariernih poteh XXXX političnih funkcionarjev.</p>

			<h5>
				<img class="icon" src={icon2} />
				<span>Viri podatkov</span>
			</h5>
			<p>Podatke smo preverjali in dopolnjevali na podlagi javnih objav, jih iskali v registrih in specializiranih podatkovnih bazah, medijskih arhivih, na družbenih omrežjih in s samostojnim preiskovalnim delom. </p>

			<h5>
				<img class="icon" src={icon3} />
				<span>Dokazi</span>
			</h5>
			<p>Vsak podatek, vključen v interaktivno vizualizacijo, temelji na primarnih virih, uradnih dokumentih in informacijah, pa tudi potrditvah posameznih funkcionarjev.</p>

			<h5>
				<img class="icon" src={icon4} />
				<span>Dvojno preverjanje</span>
			</h5>
			<p>Novinarji so vse podatke dvojno preverili, kar pomeni, da sta podatke o kariernih poteh posameznega funkcionarja neodvisno zbirala dva člana ekipe, pri čemer sta uporabljala tehnike preiskovalnega in podatkovnega novinarstva.</p>

			<h5>
				<img class="icon" src={icon5} />
				<span>Pravica do odgovora</span>
			</h5>
			<p>Vse politične funkcionarje smo pravočasno seznanili z zbranimi podatki ter jih prosili za popravke in dopolnitve. </p>

			<h5>
				<img class="icon" src={icon6} />
				<span>Preverjanje dejstev</span>
			</h5>
			<p>Skladno s kodeksom Oštra so verodostojnost podatkov pred objavo notranje preverili še člani ekipe, ki niso sodelovali pri njihovem pridobivanju. Vse dokaze smo arhivirali in jih hranimo v uredništvu. </p>

			<h5>
				<img class="icon" src={icon7} />
				<span>Wikidata</span>
			</h5>
			<p>Preverjene podatke bomo po objavi projekta naložili tudi v brezplačno in prosto dostopno podatkovno zbirko Wikidata, ki jo ureja skupnost uporabnikov, upravlja pa Wikipedia Foundation. Wikidata deluje kot osrednje skladišče za strukturirane podatke njenih sestrskih projektov, kot so Wikipedija, Wikivoyage, Wiktionary, Wikisource in drugi. Tako bomo k odprtemu dostopu do informacij prispevali tudi v korist širše mednarodne skupnosti.</p>
			
			<p>V podatkovni bazi prikazujemo podatke na dan XXXX 2023. Oštro zaradi omejenih kadrovskih zmogljivosti ne more zagotavljati aktualnosti podatkov v vsakem trenutku. 
				Dodatne informacije o poklicnih poteh funkcionarjev nam lahko pošljete na elektronski naslov XXXX@ostro.si ali po pošti na naslov Oštro, Kotnikova ulica 28, 1000 Ljubljana.</p>
		</div>
	</div>

	<div class="section dark-grey">
		<div class="section__inner">
			<h1>Kolofon</h1>
			<div class="two-columns">
				<div class="two-columns__item">
					<p>Odgovorna urednica</p>
					<p>Anuška Delić</p>
				</div>
				<div class="two-columns__item">
					<p>Vodja projekta</p>
					<p>Klara Škrinjar</p>
				</div>
				<div class="two-columns__item">
					<p>Avtorji</p>
					<p>Maja Čakarić, Samo Demšar, Žana Erznožnik, Martin Justin, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
				</div>
				<div class="two-columns__item">
					<p>Preverjanje dejstev</p>	
					<p>Katarina Bulatović, Maja Čakarić, Samo Demšar, Žana Erznožnik, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
				</div>
				<div class="two-columns__item">
					<p>Prenos v javne podatkovne zbirke</p>
					<p>JD Bohnam (moram še vprašati)</p>
				</div>
				<div class="two-columns__item">
					<p>Razvoj platforme</p>
					<p>Kirk G. Jackson</p>
				</div>
				<div class="two-columns__item">
					<p>Oblikovanje</p>
					<p>Studio Mashoni</p>
				</div>
				<div class="two-columns__item">
					<p>Prevod</p>	
					<p>Sebastijan Maček</p>
				</div>
				<div class="two-columns__item">
					<p>Projekt sofinancira</p>	
					<p>Google News Initiative Innovation Challenge</p>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}


<style lang="scss">

	.intro-icon {
		margin: 60px 0 60px 0;
		width: 100%;
	}
	.section {
		&.light-grey {
			background: #E6E6F0;
		}
		&.medium-grey {
			background: #6E7382;
		}
		&.dark-grey {
			background: #3C465A;
		}

		&__inner {
			max-width: 700px;
			margin: auto;
			padding: 50px 20px;
		}
	
	}
	h1 {
		color: #3C465A;
		font-family: Noe Display;
		font-size: 30px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px;
		margin-bottom: 25px;
		text-align: left;

		
		.dark-grey & {
			color: #00001E;
		}
	}

	h2 {
		font-family: IBM Plex Sans;
		font-size: 30px;
		font-style: normal;
		font-weight: 300;
		line-height: 40px;
		margin-top: 20px;
		margin-bottom: 25px;

	}

	h5 {
		color: #00001E;
		font-family: IBM Plex Sans;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px; /* 120% */
		display: flex;
		align-items: center;
		gap: 6px;
	}

	p {
		color: #3C465A;
		font-family: IBM Plex Sans;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
	}

	.two-columns {
		columns: 2;

		&__item {
			display: inline-block;
			width: 100%;

			p:first-child {
				color: #31C8B0;
				margin-bottom: 0;
			}
			p:last-child {
				margin-top: 0;
			}
		}
	}

	.light-grey {
		h1 {
			color: #00001E;
		}
	}

	.medium-grey {
		h1 {
			color: #00001E;
		}
		p {
			color: #fff;
		}
	}

	.dark-grey {
		h1 {
			color: #31C8B0;
		}
		p {
			color: #fff;
		}
	}

	ol {
  list-style: none;
  counter-reset: my-awesome-counter;
		padding: 0;
	}
	ol li {
			counter-increment: my-awesome-counter;
			display: flex;
			gap: 30px;
			margin-bottom: 15px;
			line-height: 24px;

			&:nth-child(1):before {
				background-color: #4600BE;
				color: #fff;
			}

			&:nth-child(2):before {
				background-color: #1599D0;
			}

			&:nth-child(3):before {
				background-color: #31C8B0;
			}

			&:nth-child(4):before {
				background-color: #ACEC5A;
			}

			&:nth-child(5):before {
				background-color: #FFBE00;
			}

	}
	ol li::before {
			content: counter(my-awesome-counter) " ";
			// color: red;
			// font-weight: bold;
			display: flex;
			border-radius: 20px;
			max-height: 20px;
			font-size: 12px;
			margin-top: 4px;
			line-height: 1.3;
			// width: 25px;
			padding: 6px 12px 4px 11.5px;

	}


</style>