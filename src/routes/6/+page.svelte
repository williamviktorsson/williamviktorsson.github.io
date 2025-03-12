<script lang="ts">
	import { Presentation, Slide, Code, Transition } from '@animotion/core'
	import Front from '$lib/front.svelte'
	import Title from '$lib/title.svelte'
	import Content from '$lib/content.svelte'
	import Split from '$lib/split.svelte'

	const dateops = { year: 'numeric', month: 'long', day: 'numeric' }
	const today = new Date()
	const dateInSwedish = today.toLocaleDateString('sv-SE', dateops as any)

	let code: Code
	let code1: Code
	let code2: Code
	let code3: Code
	let code4: Code
	let code5: Code
	let code6: Code

	let showcode: boolean = $state(false)
</script>

<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: true,
		progress: false,
		autoAnimateEasing: 'ease',
		autoAnimateUnmatched: true
	}}
>
	<Front></Front>

	<Slide>
		<Title title="Dagens agenda"></Title>
		<Content>
			<ol>
				<li class="fragment">Repetition: Förväntade studieresultat</li>
				<li class="fragment">Repetition: Dart vs. Flutter</li>
				<li class="fragment">Repetition: Examinerande uppgifter</li>

				<li class="fragment">Uppstart Flutter</li>
				<ul>
					<li class="fragment">Installation</li>
					<li class="fragment">Projektstruktur</li>
					<li class="fragment">Emulator</li>
					<li class="fragment">Widgets</li>
					<li class="fragment">Material Design</li>
					<li class="fragment">BuildContext</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Repetition: Förväntade studieresultat"></Title>
		<Content>
			<ol>
				<li class="fragment">Dart</li>
				<ul>
					<li class="fragment">Grundläggande Dart syntax</li>
					<li class="fragment">Strukturer, variabler, funktioner, iterering</li>
					<li class="fragment">
						<strong
							>Objektorientering, datahantering, asynkrona anrop & datamodellering i Dart</strong
						>
					</li>
				</ul>
				<li class="fragment">Flutter</li>
				<ul>
					<li class="fragment">State Management, Arkitektur</li>
					<li class="fragment">Widgets, layouter, animationer</li>
					<li class="fragment">Firebase plattform</li>
					<li class="fragment">Designa och skapa användarvänliga UI</li>
					<li class="fragment">Testa och distribuera mobilappar på olika plattformar</li>
					<li class="fragment">
						<strong>Skicka och ta emot data från servrar och molntjänster via API</strong>
					</li>
					<li class="fragment">
						<strong>Hantera notiser och interaktioner med serverlösa molnfunktioner</strong>
					</li>
					<li class="fragment">
						<strong>Interagera med hårdvaru-API:er i native-applikationer</strong>
					</li>
					<li class="fragment">
						<strong>Använda populära, avancerade tredjeparts-bibliotek</strong>
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Repetition: Dart vs. Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Dart</li>
				<ul>
					<li class="fragment">
						Modernt, objektorienterat programmeringsspråk utvecklat av Google
					</li>
					<li class="fragment">
						Kompilerar till ARM, x64, JavaScript, WebAssembly för plattformsoberoende utveckling
						(hybridutveckling?)
					</li>
					<li class="fragment">Stöder webb, mobil och desktop-applikationer</li>
				</ul>
				<li class="fragment">Flutter</li>

				<ul>
					<li class="fragment">UI-ramverk för applikationsutveckling, driven av Dart</li>
					<li class="fragment">Omfattande bibliotek av vy-komponenter(widgets)</li>
					<li class="fragment">Open source med aktiv community och support från Google</li>
				</ul>
				<li class="fragment">Förhållande</li>
				<ul>
					<li class="fragment">
						Dart är grunden för Flutter, ger språket och exekveringsmiljö?(runtime)
					</li>
					<li class="fragment">
						Flutter utökar Darts kapacitet för effektiv och flexibel UI-utveckling
					</li>
					<li class="fragment">
						Tillsammans möjliggör de snabb utveckling av appar för flera plattformar
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Repetition: Examinerande uppgifter"></Title>
		<Content>
			<ol>
				<li class="fragment">
					<s>CLI i Dart för att CRUD [Personer, Fordon, Parkeringsplatser, Parkeringar]</s>
				</li>

				<li class="fragment">
					<s
						>Utöka CLI till att bli ett HTTP API med databas. Separation av kod till klient +
						server.</s
					>
				</li>
				<hr class="fragment" />
				<li class="fragment">CLI klienten skrotas och ersätts med en applikation i Flutter.</li>
				<li class="fragment">
					Refaktorisering av klientkoden till att nyttja populär state management lösning (bloc).
				</li>
				<li class="fragment">HTTP servern skrotas och ersätts med molntjänster i Firebase</li>
				<li class="fragment">
					Utökning av applikationen med schemaläggning och hantering av notiser.
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Uppstart Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Installation</li>
				<li class="fragment">Projektstruktur</li>
				<li class="fragment">Emulator</li>
				<li class="fragment">Widgets</li>
				<li class="fragment">Material Design</li>
				<li class="fragment">BuildContext</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Installation: ~ 30-60 minuter"></Title>
		<Content>
			<div class="flex h-full items-center justify-center">
				<a href="https://docs.flutter.dev/get-started/install" class="font-mono text-2xl">
					https://docs.flutter.dev/get-started/install
				</a>
			</div>
		</Content>
	</Slide>

	<Slide>
		<Title title="Installation - fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">Antaganden:</li>
				<ul>
					<li class="fragment">Flutter SDK + Dart SDK installerat</li>
					<li class="fragment">Android Studio installerat</li>
					<li class="fragment">Utvecklingsmiljö för Android potentiellt inte konfigurerad.</li>
				</ul>
				<li class="fragment">Uppmaning:</li>
				<ul>
					<li class="fragment">Kör kommandot: <code>flutter upgrade</code></li>
					<li class="fragment">
						Kör kommandot: <code>flutter doctor</code> för att se om allt är konfigurerat för att kunna
						utveckla Android-appar
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Utvecklingsmiljö för Android"></Title>
		<Content>
			<ol>
				<li class="fragment">Öppna Android Studio</li>
				<li class="fragment">
					Följ dessa steg: <a
						href="https://docs.flutter.dev/get-started/install/windows/mobile#configure-android-development"
						>https://docs.flutter.dev/get-started/install/windows/mobile#configure-android-development</a
					>
				</li>
				<li class="fragment">
					Öppna <code>SDK Manager</code> i Android Studio
				</li>
				<li class="fragment">
					Se till att du har följande under <code>SDK Platforms</code> och <code>SDK Tools</code>
				</li>
				<ul>
					<li class="fragment">
						Android SDK Platform, API 35.0.1 - <code>Android 15.0 ("VanillaIceCream")</code>
					</li>
					<li class="fragment">Android SDK Build-Tools</li>
					<li class="fragment">Android SDK Command-line Tools</li>
					<li class="fragment">Android Emulator</li>
					<li class="fragment">Android SDK Platform-Tools</li>
					<li class="fragment">På Windows för Emulatorn:</li>
					<ul>
						<li class="fragment">Android Emulator Hypervisor driver installer</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Utvecklingsmiljö för Android - fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Gör steg 1 här: <a
						href="https://docs.flutter.dev/get-started/install/windows/mobile#set-up-the-android-emulator"
						>https://docs.flutter.dev/get-started/install/windows/mobile#set-up-the-android-emulator</a
					>
				</li>
				<ul>
					<li class="fragment">
						Här konfigurerar du så att ditt operativsystem stödjer att köra en virtuell emulator på
						bästa sätt. Följ instruktionerna för din plattform.
					</li>
					<li class="fragment">Jag rekommenderar <code>AEHD</code> för Windows.</li>
					<ul>
						<li class="fragment">
							Android Emulator Hypervisor driver installer under SDK Tools i Android studio
						</li>
					</ul>
					<li class="fragment">Mac bör fungera OOTB</li>
					<li class="fragment">Linux-användare följer guiden för KVM längre ned på sidan.</li>
					<li class="fragment">Följ sedan steg två till 16</li>
					<ul>
						<li class="fragment">
							Välj <code>VanillaIceCream med API = 35, Target = Google APIs</code> som System Image i
							steg 10
						</li>
						<li class="fragment">
							Rätt image kan ligga under x86_64 Images/Other Images/ARM Images(för er med ARM
							processor)
						</li>
					</ul>
					<li class="fragment">Följ resterande steg på sidan.</li>
					<li class="fragment">Testa starta din emulator.</li>
					<li class="fragment">Du ska nu vara redo att utveckla mobilappar!</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Skapa exempelprojekt"></Title>
		<Content>
			<ol>
				<li class="fragment">Skapa ett nytt flutterprojekt i valfri mapp</li>
				<li class="fragment">
					Du kan ta bort detta projekt senare då du skapar nya projekt för uppgift tre i kursen.
				</li>
				<li class="fragment">Kör någon av följande kommandon:</li>
				<ul>
					<li class="fragment">
						<code>flutter create [projektnamn]</code> i terminalen
					</li>
					<li class="fragment">
						<code>Flutter: New Project</code> i VSCode via Command Palette(ctrl+shift+p)
					</li>
				</ul>
				<li class="fragment">
					Om du får en notis om att din gradle version är inte överensstämmer med din java-version,
					gör följande:
				</li>
				<ul>
					<li class="fragment">
						Öppna mappen <code>/android</code> i ditt nya projekt i Android Studio
					</li>
					<li class="fragment">
						Vänta tills du får popup för <code>Start AGP Upgrade Assistant</code> och kör sedan igenom
						den
					</li>
					<li class="fragment">Läs mer här om det inte fungerar:</li>
					<ul>
						<li class="fragment">
							<a
								href="https://docs.flutter.dev/release/breaking-changes/android-java-gradle-migration-guide"
								>https://docs.flutter.dev/release/breaking-changes/android-java-gradle-migration-guide</a
							>
						</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Starta exempelprojekt"></Title>
		<Content>
			<ol>
				<li class="fragment">Öppna hela flutterprojektet i VSCode</li>
				<li class="fragment">
					Längst ned till höger kan du välja devices. Välj din android emulator.
				</li>
				<ul>
					<li class="fragment">
						Om VSCode inte lyckas koppla till emulatorn: Gå in i AVD Manager i Android Studio och:
					</li>
					<ul>
						<li class="fragment">Öppna menyn på din device och välj <code>Wipe Data</code></li>
					</ul>
				</ul>
				<li class="fragment">Öppna <code>/lib/main.dart</code> i VSCode</li>
				<li class="fragment">
					Kör <code>Run without debugging</code> från antingen play knappen uppe till höger eller run
					menyn längst upp i VSCode
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Flutter Projektstruktur"></Title>
		<Content>
			<Split>
				<ol>
					<li class="fragment"><code>lib/</code></li>
					<ul>
						<li class="fragment"><code>main.dart</code> - Appens startpunkt</li>
						<li class="fragment">
							Bör fyllas med underkataloger som t.ex. <code>widgets/</code>, <code>models/</code>,
							<code>views/</code> etc.
						</li>
					</ul>
					<li class="fragment"><code>assets/</code></li>
					<ul>
						<li class="fragment">För bilder, ikoner, och andra statiska resurser</li>
						<li class="fragment">Du kan vara tvungen att skapa denna mapp själv</li>
						<ul>
							<li class="fragment">
								Då får du specifiera sökvägen till mappen i din <code>pubspec.yaml</code>
							</li>
						</ul>
					</ul>
					<li class="fragment"><code>pubspec.yaml</code></li>
					<ul>
						<li class="fragment">
							Konfigurationsfil för projektet - Definierar beroenden och resurser
						</li>
					</ul>

					<li class="fragment"><code>test/</code></li>
					<ul>
						<li class="fragment">Innehåller tester för appen</li>
					</ul>
				</ol>
				<ol start="5">
					<li class="fragment">
						Platform-specifika mappar - <stron
							>rörs sällan, kanske för config av SDK/API-nycklar</stron
						>
					</li>
					<ul>
						<li class="fragment"><code>android/</code></li>
						<li class="fragment"><code>ios/</code></li>
						<li class="fragment"><code>linux/</code></li>
						<li class="fragment"><code>macos/</code></li>
						<li class="fragment"><code>web/</code></li>
						<li class="fragment"><code>windows/</code></li>
					</ul>
				</ol>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Emulator"></Title>
		<Content>
			<ol>
				<li class="fragment">Följ installationshänvisningar</li>
				<ul>
					<li class="fragment">Går även att använda fysisk enhet med usb-kabel</li>
					<li class="fragment">Går även över wifi med lite setup</li>
					<li class="fragment"><strong>För kursen:</strong> Android Studio - AVD Manager</li>
					<li class="fragment"><strong>För kursen:</strong> Web - Chrome/Edge</li>
					<li class="fragment"><strong>För kursen:</strong> Desktop (macOS/Windows/Linux)</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Flutter Widgets Koncept"></Title>
		<Content>
			<ol>
				<li class="fragment">Grundsten</li>
				<ul>
					<li class="fragment">Allt visuellt i Flutter är en <code>Widget</code></li>
					<li class="fragment">Byggstenar för användargränssnittet</li>
					<li class="fragment">Använd existerande eller bygg egna</li>
					<li class="fragment">
						En Widget är en Dart <code>class</code> som kan <code>extend</code>as
					</li>
				</ul>
				<li class="fragment">Det finns många existerande Widgets</li>
				<ul>
					<li class="fragment">
						T.ex. <code>Text</code>, <code>Row</code>, <code>Column</code>, <code>Scaffold</code>
					</li>
				</ul>
				<li class="fragment">Egenskaper</li>
				<ul>
					<li class="fragment">Widgetar har egenskaper (properties/klassvariabler)</li>
					<li class="fragment">Bestämmer widgetens utseende och beteende</li>
					<li class="fragment">
						Kan finnas en del <code>defaults</code> som du kan välja att själv konfigurera
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Flutter Widgets Koncept - fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">Kombinera Widgetar</li>
				<ul>
					<li class="fragment">
						Widgetar kan inneslutas i andra widgetar. Ofta säger man att en widget kan ha ett <code
							>child</code
						>
					</li>
					<li class="fragment">
						Nästlade widgetar skapar en <code>widget tree structure</code>, går att se över i
						DevTools
					</li>
				</ul>
				<li class="fragment">Återanvändning</li>
				<ul>
					<li class="fragment">Möjlighet att återanvända och anpassa widgetar</li>
					<li class="fragment">Skapar konsekvent och återanvändbart UI</li>
					<li class="fragment">Notera: Detta är inte en kurs i att skapa designsystem.</li>
					<ul>
						<li class="fragment">
							Vi kommer använda Material Design som är Googles egna designsystem.
						</li>
						<li class="fragment">
							Men vi kan absolut göra ändringar till de Widgets vi får från Material Design.
						</li>
						<li class="fragment">Eller skapa egna från grundkomponenterna i Flutter.</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Material Design i Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Designsystem skapat av Google</li>
				<ul>
					<li class="fragment">Riktlinjer för skapande av visuellt sammanhängande appar</li>
				</ul>
				<li class="fragment">Material Widgets</li>
				<ul>
					<li class="fragment">Flutter levererar inbyggda Material Design-widgets</li>
					<li class="fragment">
						T.ex. <code>AppBar</code>, <code>FlatButton</code>, <code>Card</code>
					</li>
				</ul>
				<li class="fragment">Interaktion & Rörelse</li>
				<ul>
					<li class="fragment">Animeringar och övergångar för bättre användarupplevelse</li>
					<li class="fragment">Ripple-effekter, skuggor, med mera.</li>
				</ul>
				<li class="fragment">Teman</li>
				<ul>
					<li class="fragment">Möjlighet att skapa och tillämpa egna teman</li>
					<li class="fragment">Konsistent färgschema och typografi</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="BuildContext i Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Definition</li>
				<ul>
					<li class="fragment">En referens till widgetens plats i widget-trädet</li>
					<li class="fragment">
						Innehåller information som tillhör widgetens specifika plats i widget-trädet
					</li>
				</ul>
				<li class="fragment">Varför det är viktigt</li>
				<ul>
					<li class="fragment">
						Används för injection av state, styling och routing till Widgets.
					</li>
					<li class="fragment">Används ofta i byggmetoder (<code>build</code>)</li>
					<ul>
						<li class="fragment">
							När en Widget byggs kan den välja att läsa information från widgetens <strong
								>UNIKA</strong
							> BuildContext
						</li>
						<li class="fragment">
							En buildcontext skickas alltid med som argument till en widgets build-metod
						</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="BuildContext i Flutter - fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">Hierarki & Ägande</li>
				<ul>
					<li class="fragment">Varje widget har sin egen BuildContext</li>
					<li class="fragment">Widgets skapar och ger sina barn en ny specifik BuildContext</li>
					<ul>
						<li class="fragment">Sker automagiskt</li>
					</ul>
				</ul>
				<li class="fragment">Användningsfall</li>
				<ul>
					<li class="fragment">Navigering mellan skärmar med <code>Navigator.of(context)</code></li>
					<li class="fragment">Använda temadata med <code>Theme.of(context)</code></li>
					<li class="fragment">
						Läsa värden från <code>BLoC</code> eller andra state management-lösningar
					</li>
					<li class="fragment">
						Få information från föräldern t.ex. gällande hur stor en Widget kan bli.
					</li>
					<ul>
						<li class="fragment">
							En förälder kan ha introducerat så kallade <code>constraints</code> som påverkar barnen.
						</li>
					</ul>
					<li class="fragment">Visa en popup som täcker widgeten eller skärmen.</li>
					<li class="fragment">
						Visa en <code>Toast/Snackbar/Notis</code> som dyker upp i widgeten eller på hela skärmen.
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Demo time? Check check?"></Title>
		<Content>
			<ol>
				<li class="fragment">Projektstruktur</li>
				<li class="fragment">Emulator</li>
				<li class="fragment">Widgets</li>
				<li class="fragment">Material Design</li>
				<li class="fragment">BuildContext</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Uppgift 3: Flutter Parkeringsapp"></Title>
		<Content>
			<ul>
				<li class="fragment">
					Dags att bygga grafiska gränssnitt till er parkeringsapplikation! 🎨
				</li>
				<li class="fragment">
					Vi ska bygga en Flutter-applikation för parkeringsanvändare (mobil/web/desktop)
				</li>
				<ul>
					<li class="fragment">Användare ska kunna hantera</li>

					<li class="fragment">Parkeringsadministratörer får fortsätta använda ert CLI</li>
				</ul>
				<li class="fragment">Samma server/backend som tidigare - men nytt användargränssnitt</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Två separata klienter"></Title>
		<Content>
			<ol>
				<li class="fragment"><strong>CLI</strong> - För parkeringsadministratörer</li>
				<ul>
					<li class="fragment">Huvudfunktioner:</li>
					<ul>
						<li class="fragment">Hantera parkeringsplatser (CRUD)</li>
					</ul>
				</ul>
				<li class="fragment"><strong>Flutter applikation</strong> - För bilister</li>
				<ul>
					<li class="fragment">Optimerad för mobil + webb (portrait + landscape)</li>
					<li class="fragment">Huvudfunktioner:</li>
					<ul>
						<li class="fragment">Registrera sig/logga in</li>
						<ul>
							<li class="fragment">Förtydligande nästa slide</li>
						</ul>
						<li class="fragment">Hantera fordon</li>
						<li class="fragment">Starta/stoppa parkering</li>
					</ul>
					<li class="fragment">
						Använder förslagsvis <code>NavigationBar</code> eller <code>BottomAppBar</code> för navigation
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Om inloggning/autentisering"></Title>
		<Content>
			<ul>
				<li class="fragment">Förenklad lösning för denna uppgift! 🎯</li>
				<ul>
					<li class="fragment">Ingen kryptering, salt, hash eller session tokens</li>
					<li class="fragment">Ingen "äkta" säkerhet krävs</li>
				</ul>
				<li class="fragment">Implementera så här:</li>
				<ul>
					<li class="fragment">Registrering = skapa en person i databasen</li>
					<li class="fragment">Inloggning = kolla om personen finns</li>
					<li class="fragment">
						Ska <strong>se ut</strong> som ett inloggningsflöde för användaren
					</li>
				</ul>
				<li class="fragment">Riktig autentisering kommer senare! 🔒</li>
				<ul>
					<li class="fragment">Vi implementerar Firebase Auth i senare uppgift</li>
					<li class="fragment">Då kopplar vi Firebase-tokens till era personer</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kom igång denna vecka"></Title>
		<Content>
			<ol>
				<li class="fragment">Börja med att skapa projektet:</li>
				<ul>
					<li class="fragment"><code>flutter create parking_user</code></li>
				</ul>
				<li class="fragment">Fokusera på grundläggande UI först:</li>
				<ul>
					<li class="fragment">Sätt upp navigation (BottomAppBar/NavigationBar/NavigationRail)</li>
					<li class="fragment">Skapa tomma vyer för huvudfunktionerna</li>
					<li class="fragment">Experimentera med olika widgets (knappar, listor, formulär)</li>
					<li class="fragment">Använd hårdkodad data - ingen serveranslutning än</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kommande veckor"></Title>
		<Content>
			<ul>
				<li class="fragment">Denna vecka (v.11): Grundläggande UI och navigation</li>
				<li class="fragment">Nästa vecka (v.12): Layouts och serverintegration</li>
				<li class="fragment">v.13: Forms och datahantering</li>
				<li class="fragment">v.14: State management och responsive design</li>
				<li class="fragment">v.15: Examination</li>
				<hr class="fragment" />
				<li class="fragment">
					<strong>Fullständig uppgiftsbeskrivning finns på Teams</strong>
				</li>
				<li class="fragment">Fokusera på att få grundstrukturen på plats denna vecka! 🎯</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">Det var allt för idag!</div>
		</Content>
	</Slide>

	<div class="date">
		<p class="mb-2 text-xl" id="date">{dateInSwedish}</p>
		<p class="text-xl">Stockholms Tekniska Institut</p>
	</div>
</Presentation>

<style>
	.date {
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: left;
	}

	a {
		color: white;
	}

	code {
		background-color: #eee;
		border-radius: 3px;
		font-family: courier, monospace;
		padding: 0 3px;
		color: black;
	}
</style>
