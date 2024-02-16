<script>
	import { locale } from '$lib/translations';
	import aboutIntroSiIcon from '$lib/images/about-intro-si.svg';
	import aboutIntroEnIcon from '$lib/images/about-intro-en.svg';


	import icon1 from '$lib/images/about/1.svg';
	import icon2 from '$lib/images/about/2.svg';
	import icon3 from '$lib/images/about/3.svg';
	import icon4 from '$lib/images/about/4.svg';
	import icon5 from '$lib/images/about/5.svg';
	import icon6 from '$lib/images/about/6.svg';
	import icon7 from '$lib/images/about/7.svg';
</script>

{#if $locale === 'si'}
	<div>
		<div class="section">
			<div class="section__inner">
				<img class="intro-icon" src={aboutIntroSiIcon} />
				<h1>Po poklicnih poteh političnih funkcionarjev</h1>
				<p>Zvezoskop je interaktivna vizualizacija kariernih presečišča članov vlade, državnih sekretarjev in poslancev državnega zbora.</p>
			</div>
		</div>

		<div class="section light-grey">
			<div class="section__inner">
				<h1>Zakaj Zvezoskop?</h1>
				<p>Slovenija je majhna država z dvema milijonoma prebivalcev, v slovenski javnosti pa je razširjeno mnenje, da so pri kadrovskih odločitvah pomembnejši osebni odnosi in lojalnost kot kompetence. To spodkopava zaupanje ljudi v vlado in državni zbor ter ustvarja tveganja za navidezna ali dejanska navzkrižja interesov med predstavniki zakonodajne in izvršilne oblasti.</p>
				<p>Projekt Zvezoskop smo zasnovali, da bi javnosti omogočili vpogled v podatke o karierah političnih funkcionarjev in samostojno raziskovanje njihovih dosedanjih poklicnih poti. Pred desetletjem je nemški časopis Die Zeit ustvaril podoben, vendar bolj preprost <a target="_blank" href="//driven-by-data.net/2013/09/19/bundeskabinett.html">vizualni prikaz</a> karier ministrov tedanje vlade. V primeru Zvezoskopa gre za povsem svež pristop k obravnavi te teme v Sloveniji.</p>
				<p>Po zadnjih štirih državnozborskih volitvah v Sloveniji so na oblast prišle politične stranke, ki so nastale bolj ali manj pred volitvami.</p>
				<p>Med funkcionarji, katerih kariere predstavljamo v interaktivni vizualizaciji, je 40 odstotkov takih, ki do državnozborskih volitev 2022 niso bili izvoljeni na splošnih volitvah ali imenovani za ministre oziroma državne sekretarje.</p>
			
				<h2>Kaj prikazuje interaktivna vizualizacija?</h2>
				<ol>
					<li>Povezave med političnimi funkcionarji, da bi javnosti omogočili samostojno odkrivanje presečišč njihovih dosedanjih poklicnih poti.</li>
					<li>Preverjene podatke o poklicnih poteh, od izobraževanja do današnje politične funkcije.</li>
					<li>Aktualne in pretekle položaje oziroma vloge funkcionarjev v drugih organizacijah, institucijah ali podjetjih, kar omogoča pregled nad vsemi politiki, ki jih povezuje posamezna organizacija.</li>
					<li>Vpogled v izobrazbene, poklicne in interesne profile političnih strank, ki so zastopane v vladi in državnem zboru.</li>
				</ol>
				<h2>Kako lahko projekt Zvezoskop koristi uporabnikom?</h2>
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
				<p>Karierne in življenjske poti različnih političnih funkcionarjev so v mali državi, kot je Slovenija, močno prepletene, naj gre za institucije, kjer so se izobraževali, prejšnje delodajalce, politične stranke ali prosti čas. Ekipa projekta Zvezoskop je za delovno izhodišče vzela javno objavljene življenjepise političnih funkcionarjev, nato pa jih je z uporabo preiskovalnih in podatkovnih novinarskih tehnik dopolnila in nadgradila.</p>
			
				<h5>
					<img class="icon" src={icon1} />
					<span>Preiskava</span>
				</h5>
				<p>Ekipa je zbirala, preverila in analizirala podatke o kariernih poteh 160 političnih funkcionarjev.</p>

				<h5>
					<img class="icon" src={icon2} />
					<span>Viri podatkov</span>
				</h5>
				<p>Podatke smo preverjali in dopolnjevali na podlagi javnih objav, jih iskali v registrih in specializiranih podatkovnih bazah, medijskih arhivih, na družbenih omrežjih in s preiskovalnim novinarskim delom.</p>

				<h5>
					<img class="icon" src={icon3} />
					<span>Dokazi</span>
				</h5>
				<p>Podatki, vključeni v interaktivno vizualizacijo, temeljijo na uradnih dokumentih in podatkih, pa tudi na potrditvah posameznih funkcionarjev.</p>

				<h5>
					<span>Začetni in končni datum</span>
				</h5>
				<p>V analizo so vključeni le podatki, za katere smo lahko določili datuma vstopa v institucijo in izstopa iz nje (vsaj letnico). Presečišč med posamezniki brez teh spremenljivk ni mogoče predvideti.</p>

				<h5>
					<span>Institucija</span>
				</h5>
				<p>Izraz institucija uporabljamo za kraje, kjer se osebe srečujejo zaradi poklicnih zadev pa tudi hobijev, zato njihova imena niso nujno imena pravnih oseb.</p>

				<h5>
					<img class="icon" src={icon5} />
					<span>Pravica do odgovora</span>
				</h5>
				<p>Vse politične funkcionarje smo pravočasno seznanili z zbranimi podatki ter jih prosili za popravke in dopolnitve.</p>

				<h5>
					<img class="icon" src={icon4} />
					<span>Dvojno preverjanje</span>
				</h5>
				<p>Novinarji so vse podatke dvojno preverili, kar pomeni, da sta podatke o kariernih poteh posameznega funkcionarja neodvisno zbirala dva člana ekipe, pri čemer sta uporabljala tehnike preiskovalnega in podatkovnega novinarstva.</p>
				
				<h5>
					<img class="icon" src={icon6} />

					<span>Preverjanje dejstev</span>
				</h5>
				<p>Skladno s <a href="//www.ostro.si/si/kodeks" target="_blank">kodeksom</a> Oštra so verodostojnost podatkov pred objavo preverili še člani ekipe, ki niso sodelovali pri njihovem pridobivanju. Vse dokaze smo arhivirali in jih hranimo v uredništvu.</p>
		
				<h5>
					<img class="icon" src={icon7} />
					<span>Odprte zbirke podatkov</span>
				</h5>
				<p>Preverjene podatke bomo po objavi projekta naložili tudi v brezplačni in prosto dostopni podatkovni zbirki Wikidata in OpenSanctions.</p>

				<p>Wikidata, ki jo ureja skupnost uporabnikov, upravlja pa Wikipedia Foundation, deluje kot osrednje skladišče za strukturirane podatke sestrskih projektov, kot so Wikipedia, Wikivoyage, Wikisource in drugi.</p>
				<p>OpenSanctions je prosto dostopna mednarodna zbirka podatkov o ljudeh in podjetjih, ki jih povezujejo politika, kriminal ali ekonomski interes.</p>
				<p>Zvezoskop je tako v korist širše mednarodne skupnosti prispeval tudi k odprtemu dostopu do informacij.</p>

				<h5>
					<span>Drugo</span>
				</h5>
				<p>V podatkovni bazi prikazujemo podatke na dan 1. 2. 2024. Oštro zaradi omejenih kadrovskih zmogljivosti ne more v vsakem trenutku zagotavljati aktualnosti podatkov.</p>
				<p>Dodatne informacije o poklicnih poteh funkcionarjev nam lahko pošljete na elektronski naslov contact@ostro.si ali po pošti na naslov Oštro, Kotnikova ulica 28, 1000 Ljubljana.</p>
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
						<p>Maja Čakarić, Samo Demšar, Žana Erznožnik, Nina Rozman, Klara Škrinjar, Matej Zwitter, Katarina Bulatović</p>
					</div>
					<div class="two-columns__item">
						<p>Strokovna pomoč pri podatkovni analizi</p>
						<p>dr. Anuška Ferligoj, dr. Vladimir Batagelj</p>
					</div>
					<div class="two-columns__item">
						<p>Razvoj platforme</p>
						<p>Kirk G. Jackson</p>
					</div>
					<div class="two-columns__item">
						<p>Obdelava podatkov</p>
						<p>Jan Daniel Bothma, Friedrich Lindenberg</p>
					</div>
					<div class="two-columns__item">
						<p>Prevod</p>
						<p>Sebastijan Maček</p>
					</div>
					<div class="two-columns__item">
						<p>Oblikovanje</p>
						<p><a target="_blank" href="//mashoni.com/">Studio Mashoni</a></p>
					</div>
					<div class="two-columns__item">
						<p>Projekt je sofinanciral</p>	
						<p>Google News Initiative Innovation Challenge</p>
					</div>
					<div class="two-columns__item">
						<p>Kontakt</p>	
						<p>contact@ostro.si</p>
					</div>
				</div>
				<p><a target="_blank" href="https://www.ostro.si/">Oštro © 2024</a></p>
			</div>
		</div>
	</div>
{:else}
<div>
	<div class="section">
		<div class="section__inner">
			<img class="intro-icon" src={aboutIntroSiIcon} />
			<h1>Exploring Careers of Political Officials</h1>
			<p>Zvezoskop (roughly translated as Relationscope) is an interactive visualization of careers of government members, ministerial secretaries and Members of Parliament.</p>
		</div>
	</div>

	<div class="section light-grey">
		<div class="section__inner">
			<h1>Why Zvezoskop?</h1>
			<p>Slovenia is a small country with a population of 2 million and a widespread belief that personal relationships and loyalty outweigh competence in staffing choices. This perception undermines public trust in government and the Parliament and perpetuates perceived or actual conflicts of interest in the legislative and executive branches.</p>
			<p>Zvezoskop provides the public with information about career trajectories of political officials while enabling it to conduct independent research. A decade ago, the German newspaper Die Zeit introduced a similar, albeit simpler, visual representation of government ministers' careers. In Slovenia, this approach is entirely novel.			</p>
			<p>Following the last four national elections in Slovenia, political parties that were formed (roughly) prior to the elections came to power. The proportional system prevents voters from directly electing their representatives and affords novices the chance to ascend to political office.</p>
			<p>Among the officials featured in Zvezoskop, 40% had never been elected in a general election or appointed as ministers or ministerial secretaries before the 2022 parliamentary elections.</p>

			<h2>The interactive shows:</h2>
			<ol>
				<li>Links between political officials, allowing the public to discover their career intersections and gain insights.</li>
				<li>Verified information on career paths, spanning from educational years to current political roles.</li>
				<li>Current and past positions or roles of political officials in other organizations, institutions, or companies, providing an overview of all the politicians associated with an entity.</li>
				<li>Insight into the educational, professional, and interest profiles of political parties represented in Government and the Parliament.</li>
			</ol>
			<h2>How can Zvezoskop benefit its users?</h2>
			<ol>
				<li>Independent exploration of information about education, past employment, and political affiliations of officials.</li>
				<li>Discovery of career intersections of current political officials.</li>
				<li>Independent research of officials’ career paths while tracking revolving door transitions between the public and private sectors.</li>
				<li>Providing voters with access to credible and verified information on the careers of ministers, ministerial secretaries and parliamentarians to assist them in making informed decisions.</li>
				<li>A tool for journalists, NGOs, academics, and other researchers conducting independent research into political careers and networks.</li>
			</ol>
		</div>
	</div>

	<div class="section medium-grey">
		<div class="section__inner">
			<h1>
				Project methodology
			</h1>
			<p>In a small country like Slovenia, career and life paths of various political officials are intricately connected, spanning their educational years, previous employers, political affiliations, and leisure activities.</p>
			<p>The team behind Zvezoskop began research by utilizing publicly available CVs of active political officials. Then they employed investigative and data journalism techniques to supplement and upgrade this information.</p>
			<h5>
				<img class="icon" src={icon1} />
				<span>Research</span>
			</h5>
			<p>The team meticulously collected, verified, and analyzed data pertaining to career paths of 160 political officials.</p>

			<h5>
				<img class="icon" src={icon2} />
				<span>Data sources</span>
			</h5>
			<p>Data was verified and supplemented against official press releases, public and specialized databases, social networks and other investigative work.</p>

			<h5>
				<img class="icon" src={icon3} />
				<span>Evidence</span>
			</h5>
			<p>Data available in the interactive is sourced from official documents, data and information, and corroboration by individual officials.</p>

			<h5>
				<span>Start and End Date</span>
			</h5>
			<p>Only data for which we could verify the start and end dates (at least the year) is included in the analysis. These parameters are crucial for predicting intersections between individuals.</p>

			<h5>
				<span>Institution</span>
			</h5>
			<p>The term "institution" refers to locations where individuals intermingle and does not necessarily denote actual legal entities.</p>
			
			<h5>
				<img class="icon" src={icon5} />
				<span>Right of Reply</span>
			</h5>
			<p>All political officials were presented with a timely request to reply to the collected data, and invited to provide corrections and additions, if necessary.</p>
		
			<h5>
				<img class="icon" src={icon4} />
				<span>Double-checking</span>
			</h5>
			<p>To ensure accuracy, all data underwent double-checking by journalists. Two team members independently collected information on career trajectories of each official by utilizing investigative and data journalism techniques.</p>

			<h5>
				<img class="icon" src={icon6} />
				<span>Fact-checking</span>
			</h5>
			<p>In compliance with Oštro’s <a target="_blank" href="//ostro.si/en/code-of-conduct">Code of Conduct</a>, the data underwent internal verification before publication by team members who were not involved in its collection. All evidence was archived and is securely stored by the newsroom.</p>
			
			<h5>
				<img class="icon" src={icon7} />
				<span>Open data</span>
			</h5>
			<p>After publication, we will upload the verified data to the free and openly accessible Wikidata and OpenSanctions data repositories.</p>
			
			<p>Wikidata is governed by a community of users and managed by the Wikipedia Foundation, and serves as a central repository for structured data from various sister projects.</p>
			<p>OpenSanctions is an international repository of information on individuals and entities linked by politics, crime, or economic interests.</p>
			<p>By contributing to these repositories, we aim to promote open access to information for the broader international community.</p>
			
			<h5>
				<span>Other</span>
			</h5>
			<p>The data is current as of 1 February 2024. Due to limited staff, Oštro cannot guarantee updates of the data at all times.</p>
			<p>For additional information about career paths of officials, please contact us at contact@ostro.si or by post at Oštro, Kotnikova ulica 28, 1000 Ljubljana, Slovenia.</p>
		</div>
	</div>

	<div class="section dark-grey">
		<div class="section__inner">
			<h1>Impressum</h1>
			<div class="two-columns">
				<div class="two-columns__item">
					<p>Editor in chief</p>
					<p>Anuška Delić</p>
				</div>
				<div class="two-columns__item">
					<p>Project leader</p>
					<p>Klara Škrinjar</p>
				</div>
				<div class="two-columns__item">
					<p>Authors</p>
					<p>Maja Čakarić, Samo Demšar, Žana Erznožnik, Martin Justin, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
				</div>
				<div class="two-columns__item">
					<p>Fact-checking</p>	
					<p>Maja Čakarić, Samo Demšar, Žana Erznožnik, Nina Rozman, Klara Škrinjar, Matej Zwitter, Katarina Bulatović</p>
				</div>
				<div class="two-columns__item">
					<p>Expert consultants</p>
					<p>dr. Anuška Ferligoj, dr. Vladimir Batagelj</p>
				</div>
				<div class="two-columns__item">
					<p>Front-end development</p>
					<p>Kirk G. Jackson</p>
				</div>
				<div class="two-columns__item">
					<p>Data wrangling</p>
					<p>Jan Daniel Bothma, Friedrich Lindenberg</p>
				</div>
				<div class="two-columns__item">
					<p>Translation</p>
					<p>Sebastijan Maček</p>
				</div>
				<div class="two-columns__item">
					<p>Design</p>
					<p><a target="_blank" href="//mashoni.com/">Studio Mashoni</a></p>
				</div>
				<div class="two-columns__item">
					<p>The project was co-financed by</p>	
					<p>Google News Initiative Innovation Challenge</p>
				</div>
				<div class="two-columns__item">
					<p>Contact</p>	
					<p>contact@ostro.si</p>
				</div>
			</div>
			<p><a target="_blank" href="https://www.ostro.si/">Oštro © 2024</a></p>
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
		font-weight: 200;
		line-height: 40px;
		margin-top: 60px;
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

	a {
		text-decoration: underline;
		color: #fff !important;
	}


</style>