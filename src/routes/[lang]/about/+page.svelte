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
				<p>Skladno s <a target="_blank" href="//ostro.si/en/code-of-conduct">kodeksom</a> Oštra so verodostojnost podatkov pred objavo notranje preverili še člani ekipe, ki niso sodelovali pri njihovem pridobivanju. Vse dokaze smo arhivirali in jih hranimo v uredništvu. </p>

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
						<p>Jan Daniel Bothma, Friedrich Lindenberg</p>
					</div>
					<div class="two-columns__item">
						<p>Razvoj platforme</p>
						<p>Kirk G. Jackson</p>
					</div>
					<div class="two-columns__item">
						<p>Oblikovanje</p>
						<p><a target="_blank" href="//mashoni.com/">Studio Mashoni</a></p>
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
			<img class="intro-icon" src={aboutIntroEnIcon} />
			<h1>Tracking career paths of politicians</h1>
			<p>Relatoscope project is an interactive visualization of career paths of current Slovenian political office holders – cabinet ministers, state secretaries and National Assembly deputies.</p>
		</div>
	</div>

	<div class="section light-grey">
		<div class="section__inner">
			<h1>About the project</h1>
			<p>In Slovenia, a small country of 2 million people, the public perception is that personal relationships and loyalty are more important than competence in staffing decisions. This undermines public confidence in the government and the National Assembly and creates potential risks of perceived or actual conflicts of interest between representatives of the legislative and executive branches of government.</p>
			<p>The interactive enables users to track the careers of political office holders, and to identify points where they intersect. It is an entirely novel approach to addressing this topic in Slovenia. A decade ago, the German newspaper Die Zeit created a similar, but simpler, visualization of careers of governmental ministers at the time.</p>
			
			<h2>Why Relatoscope?</h2>
			<p>The last four general elections in Slovenia have been won by political parties that were formed just before the elections. The existing proportional electoral system prevents voters from actually picking their representatives and they can end up voting complete strangers into political office.</p>
			<p>Among the ministers, state secretaries and MPs included in the interactive visualization, XXXX% have never been elected at a general election or appointed ministers or secretaries of state. We were interested to see how their previous paths intersect, whether and to what extent other spheres of interest permeate their individual political careers, and similar.</p>
			<p>Oštro collected and analyzed data on career paths of three groups of political office holders whose networks can be explored in the interactive.</p>
			
			<h2>What does the interactive show?</h2>
			<ol>
				<li>Links between political office holders to facilitate public insight and enable independent discovery of their career points of convergence.</li>
				<li>Verified information on their career paths, from primary school to their current political office.</li>
				<li>Current and past positions in other organizations, institutions or companies that give an overview of all the politicians associated with a particular organization.</li>
				<li>Insight into the educational, professional and interest-based profiles of political parties represented in the Government and the National Assembly.</li>
			</ol>
			<h2>How can the project benefit its users?</h2>
			<ol>
				<li>They can easily and independently research information on the education of political office holders, their employment history and memberships in political parties and other interest groups.</li>
				<li>They can track how the career of an office holder has intersected with the careers of other politicians.</li>
				<li>They can independently investigate the career paths of officials and analyze the movement of individuals from the public to the private sector and vice versa.</li>
				<li>It gives voters access to credible and verified information on the careers of MPs, ministers and state secretaries to help them make informed decisions.</li>
				<li>For journalists, NGOs, scholars and other researchers, it is a tool for independent exploration of political trajectories and networks.</li>
			</ol>
		</div>
	</div>

	<div class="section medium-grey">
		<div class="section__inner">
			<h1>
				Project methodology
			</h1>
			<p>In a country as small as Slovenia, the career paths and lives of political office holders are deeply intertwined, whether through institutions where they were educated, their previous employers, political parties, or their leisure time. The project team took the published CVs of political office holders as a starting point and then built on them using investigative and data journalism techniques. </p>
		
			<h5>
				<img class="icon" src={icon1} />
				<span>Investigation</span>
			</h5>
			<p>The team collected, verified and analyzed data on the career paths of XXXX political officers.</p>

			<h5>
				<img class="icon" src={icon2} />
				<span>Data sources</span>
			</h5>
			<p>The data was verified and supplemented with the help of various publications, searches in registers and specialized databases, media archives, social networks, and independent investigative work.</p>

			<h5>
				<img class="icon" src={icon3} />
				<span>Evidence</span>
			</h5>
			<p>Vsak podatek, vključen v interaktivno vizualizacijo, temelji na primarnih virih, uradnih dokumentih in informacijah, pa tudi potrditvah posameznih funkcionarjev.</p>

			<h5>
				<img class="icon" src={icon4} />
				<span>Double verification</span>
			</h5>
			<p>Journalists double-checked all the data, which means that information about the career paths of each official was collected independently by two members of the team, using both investigative and data journalism techniques.</p>

			<h5>
				<img class="icon" src={icon5} />
				<span>Right to reply</span>
			</h5>
			<p>All political office holders were informed in good time of the data collected, and asked for corrections and additions.</p>

			<h5>
				<img class="icon" src={icon6} />
				<span>Fact-checking</span>
			</h5>
			<p>In accordance with Oštro’s <a target="_blank" href="//ostro.si/en/code-of-conduct">Code of Conduct</a>, the veracity of the data was fact-checked before publication by team members who were not involved in data collection. All evidence has been archived and is stored by the newsroom.</p>

			<h5>
				<img class="icon" src={icon7} />
				<span>Open data</span>
			</h5>
			<p>Once the project is published, the verified data will be uploaded to two public databases, Wikidata and OpenSanctions. Wikidata is a freely accessible community database managed by the Wikipedia Foundation. It acts as a central repository for structured data of its sister projects, such as Wikipedia, Wikivoyage, Wiktionary, Wikisource and others. OpenSanctions is an international database of persons and companies of political, criminal, or economic interest. In this way, Oštro contributed to open access to information for the benefit of the broader international community.</p>
			
			<p>The database shows data as of XXXX 2023. Due to limited staff capacity, it is difficult to ensure that the data is at all times up-to-date. You can send information about career paths of officials XXXX@ostro.si, or by post to Oštro, Kotnikova ulica 28, 1000 Ljubljana, Slovenia.</p>
		</div>
	</div>

	<div class="section dark-grey">
		<div class="section__inner">
			<h1>Impressum</h1>
			<div class="two-columns">
				<div class="two-columns__item">
					<p>Editor-in-chief</p>
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
					<p>Fact checking</p>	
					<p>Katarina Bulatović, Maja Čakarić, Samo Demšar, Žana Erznožnik, Nina Rozman, Klara Škrinjar, Matej Zwitter</p>
				</div>
				<div class="two-columns__item">
					<p>Data wrangling</p>
					<p>Jan Daniel Bothma, Friedrich Lindenberg</p>
				</div>
				<div class="two-columns__item">
					<p>Interactive platform</p>
					<p>Kirk G. Jackson</p>
				</div>
				<div class="two-columns__item">
					<p>Design</p>
					<p><a target="_blank" href="//mashoni.com/">Studio Mashoni</a></p>
				</div>
				<div class="two-columns__item">
					<p>Translation</p>	
					<p>Sebastijan Maček</p>
				</div>
				<div class="two-columns__item">
					<p>Project co-financed by</p>	
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

	a {
		text-decoration: underline;
		color: #fff !important;
	}


</style>