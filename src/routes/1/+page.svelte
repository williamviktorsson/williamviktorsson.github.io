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
		<Title title="Hybridutveckling med Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Personal på kursen</li>
				<li class="fragment">Kursplan</li>
				<li class="fragment">Utbildningsupplägg</li>
				<li class="fragment">Förväntade studieresultat</li>
				<li class="fragment">Dart vs. Flutter</li>
				<li class="fragment">Varför Dart?</li>
				<li class="fragment">Likheter med andra språk</li>
				<li class="fragment">Pedagogisk ansats</li>
				<li class="fragment">Kursinnehåll</li>
				<li class="fragment">Examinerande uppgifter</li>
				<li class="fragment">Uppgift 1</li>
				<li class="fragment">Kodexempel</li>
				<li class="fragment">Installation</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Angående dessa slides"></Title>
		<Content>
			<ol>
				<li class="fragment">Kommer uppdateras inför varje vecka</li>
				<li class="fragment">
					Föreläsning 4 om persistent datalagring kommer få en omfattande uppdatering
				</li>
				<ul>
					<li class="fragment">Motsvarar förändringarna till andra uppgiften, mer om det sen</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Personal på kursen"></Title>
		<Content>
			<ul>
				<li class="fragment">Jag - William Viktorsson 😎</li>
				<ul>
					<li class="fragment">Civilingenjör från Umeå</li>
					<li class="fragment">Konsult, entreprenör, anställd, lärare, student</li>
					<ul>
						<li class="fragment">Appar(webb+mobil) i Flutter</li>
						<li class="fragment">Undervisning av teknik/spel/webbutveckling på lokalt gymnasium</li>
						<li class="fragment">Edtech startup (hårdvara, PCB:er, raspberry, workshops, ...)</li>
					</ul>
					<li class="fragment">Två barn (tredje på väg)</li>
					<ul>
						<li class="fragment">
							<strong>Valter, Elton (& ...)</strong>
						</li>
					</ul>
					<li class="fragment">
						Snowboard, cykling, träning, serier, hemmafix, skotta snö, klippa gräs 🔥
					</li>
				</ul>
				<hr />
				<li class="fragment">Utbildningsledare - Henrik Sandqvist 😎</li>
				<ul>
					<li class="fragment">Vinka Henrik!</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kursplan"></Title>
		<Content>
			<ol>
				<li class="fragment">Programmering i Dart</li>
				<ul>
					<li class="fragment">v.5 - v.10</li>
					<li class="fragment">
						Examineras med <strong>två</strong> praktiska uppgifter
					</li>

					<ul>
						<li class="fragment">Kod lämnas in (helst via GitHub helst men zip går bra)</li>
						<li class="fragment">
							Kortare inspelad demo lämnas in (kort guide till detta senare...)
						</li>
					</ul>
				</ul>
				<li class="fragment">Applikationsutveckling med Dart/Flutter</li>
				<ul>
					<li class="fragment">v.11 - v.24</li>
					<li class="fragment">
						Examineras med <strong>fyra</strong> praktiska uppgifter
					</li>

					<ul>
						<li class="fragment">Kod (helst på Git) + kort video demo</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Utbildningsupplägg"></Title>
		<Content>
			<ol>
				<li class="fragment">
					60 minuter föreläsning på torsdagar <strong>kl. 13.00 - 14.00</strong>
				</li>
				<ul>
					<li class="fragment">15st föreläsningar</li>
					<li class="fragment">teori, kodexempel, live-kodning, frågor</li>
				</ul>
				<li class="fragment">
					90 minuter handledning på torsdagar <strong>kl. 14.00 - 15.30</strong>
				</li>
				<ul>
					<li class="fragment">Alltså direkt efter föreläsningen</li>
					<li class="fragment">Inte ovanligt att föreläsningen drar över i tid</li>
				</ul>
				<li class="fragment">
					60 minuter handledning på tisdagar <strong>kl. 09.00 - 10.00</strong>
				</li>

				<ul>
					<li class="fragment">Varmt välkomna att komma och ställa frågor och få hjälp!</li>
					<li class="fragment">
						Större möjlighet att lära om andra får lyssna in på hjälpen ni får, var inte blyga!
					</li>
					<li class="fragment">
						Positivt om ni skriver i förväg på teams vad ni behöver hjälp med
					</li>
					<ul>
						<li class="fragment">
							Absolut inget krav, men blir det många på handledning är det bra om jag hinner
							förbereda mig 😅😅
						</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Förväntade studieresultat"></Title>
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
					<li class="fragment">Testa och bygga appar för olika plattformar</li>
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
						<strong>Använda populära tredjeparts-bibliotek</strong>
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Dart vs. Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Dart</li>
				<ul>
					<li class="fragment">
						Modernt, objektorienterat programmeringsspråk utvecklat av Google
					</li>
					<li class="fragment">
						Kompilerar till ARM, x64, RISC-V, JavaScript, WebAssembly för plattformsoberoende
						utveckling (hybridutveckling?)
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
		<Title title="Varför Dart?"></Title>
		<Content>
			<ol>
				<li class="fragment">Utvecklarproduktivitet</li>
				<ul>
					<li class="fragment">Specifikt designat för att skriva klientkod</li>
					<li class="fragment">
						Omfattande verktygsstöd (för debuggning/kompilering) inkl. "hot reload"
					</li>
					<li class="fragment">Stark & robust typsäkerhet förhindrar fel</li>
					<li class="fragment">Objektorienterat</li>
				</ul>
				<li class="fragment">Multi-plattform kompilering</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Likheter med andra språk"></Title>
		<Content>
			<ol>
				<li class="fragment">OOP & Designmönster (Java, C#)</li>
				<ul>
					<li class="fragment">Faciliterar Singleton, Factory</li>
					<li class="fragment">Arv och polymorfism</li>
				</ul>
				<li class="fragment">Avancerad Typning & Generics (Kotlin, TypeScript, Java, C#)</li>

				<ul>
					<li class="fragment">Nullsäkerhet</li>
					<li class="fragment">Generiska typer</li>
					<li class="fragment">Typinferens med var, final, const</li>
				</ul>
				<li class="fragment">Asynkronitet & Felhantering (JavaScript, C#, Java, Python)</li>
				<ul>
					<li class="fragment">Async-Await</li>
					<li class="fragment">try-catch för felhantering</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Pedagogisk ansats"></Title>
		<Content>
			<ol>
				<li class="fragment">Introducera koncept i en lämplig ordning för uppgifterna</li>
				<ul>
					<li class="fragment">Fullt möjligt att det finns en bättre ordning</li>
				</ul>
				<li class="fragment">
					Målet är att <strong>hålla er intresserade</strong> och på rätt spår
				</li>
				<li class="fragment">Uppgifter som en stark motivationsfaktor</li>
				<li class="fragment">Viktigt att kunna lära genom dokumentation och praktisk erfarenhet</li>
				<li class="fragment">
					<i> "The only way to learn a new programming language is by writing programs in it." </i>
				</li>

				<ul style="list-style: none;">
					<li class="fragment">- Dennis Ritchie (skapare av C)</li>
				</ul>

				<li class="fragment">Mål att inkludera nyttigt innehåll för alla utvecklare</li>
			</ol>
		</Content></Slide
	>

	<Slide>
		<Title title="Kursinnehåll"></Title>
		<Content>
			<ol>
				<li class="fragment">V.5 Introduktion till kursen och Dart-programmering</li>
				<li class="fragment">V.6 GIT, OOP, OBS(inspelning för inlämning), täcka kunskapsluckor</li>
				<li class="fragment">V.7 Grundläggande app-arkitektur och serverinteraktion</li>
				<li class="fragment">V.8 Datahantering och introduktion till state management</li>
				<li class="fragment">
					V.9 Avancerade Dart-koncept (mixins, extension methods, extension types, patterns, ...)
				</li>
				<hr class="fragment" />
				<li class="fragment">V.11 Introduktion till Flutter och grundläggande UI-komponenter</li>
				<li class="fragment">V.12 Layoutdesign och dynamisk datavisning</li>
				<li class="fragment">V.13 Användarinteraktion och navigering i appen</li>
				<li class="fragment">
					V.14 Responsiv design och animationer för bättre användarupplevelse
				</li>
				<li class="fragment">V.15 Avancerad state management med Bloc-mönstret</li>
				<ul>
					<li class="fragment"><strong>Dubbel föreläsning torsdag!</strong></li>
				</ul>
				<li class="fragment">V.17 Introduktion till molntjänster med Firebase</li>
				<ul>
					<li class="fragment"><strong>Dubbel föreläsning torsdag!</strong></li>
				</ul>
				<li class="fragment">V.19 Interaktion med enhetens hårdvara</li>
				<li class="fragment">V.20 Deployments & distribuering av appar</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Examinerande uppgifter"></Title>
		<Content>
			<ol>
				<li class="fragment"><strong>6 examinerande uppgifter</strong></li>
				<ul>
					<li class="fragment">2 i Dart kursen (15 YHP)</li>
					<li class="fragment">4 i Flutter kursen (35 YHP)</li>
				</ul>
				<li class="fragment">2023 byggde studenterna tre olika applikationer</li>
				<ul>
					<li class="fragment">Mycket jobb, många som inte blev klar med alla uppgifter</li>
					<li class="fragment">Många sena inlämningar, några som inte fick examensbevis</li>
				</ul>
				<li class="fragment">Ni ska få bygga <strong>EN APPLIKATION</strong></li>
				<ul>
					<li class="fragment">Samma koncept examineras</li>
					<li class="fragment">Gradvis inkluderas fler koncept</li>
					<li class="fragment">
						Ni kommer få leverera [inkrement/versioner/...] av samma applikation i slutet av 6
						[utvecklingscykler/sprintar/delmoment/...]
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Examinerande uppgifter - fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Ni kommer bygga en applikation för att <strong>parkera fordon</strong> 🚙🚗🚚🛵
				</li>
				<ul>
					<li class="fragment">Tänk QPark, AimoPark, Parkster, ...</li>
					<li class="fragment">Personer, Fordon, Parkeringsplatser, Parkeringar</li>
				</ul>
				<li class="fragment">Sprintar</li>
				<ol style="list-style:lower-latin">
					<li class="fragment">
						CLI i Dart för att CRUD [Personer, Fordon, Parkeringsplatser, Parkeringar]
					</li>
					<ul>
						<li style="list-style: none;" class="fragment">
							<samp>"Vad vill du hantera? Välj: 1. för Personer, 2. för Fordon 3. för ... osv"</samp
							>
						</li>
					</ul>
					<li class="fragment">
						Utöka CLI till att bli ett HTTP API med persistent datalagring. Separation av kod till
						klient + server.
					</li>
					<hr class="fragment" />
					<li class="fragment">
						CLI klienten skrotas och ersätts med en applikation i Flutter. Mobilvy för att parkera,
						desktop/webb för att redigera parkeringsplatser.
					</li>
					<li class="fragment">
						Refaktorisering av klientkoden till att nyttja populär state management lösning (bloc).
					</li>
					<li class="fragment">HTTP servern skrotas och ersätts med molntjänster i Firebase</li>
					<li class="fragment">
						Utökning av applikationen till att nyttja hårdvaru-API:er på mobiltelefonen
					</li>
				</ol>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Förändringar sen senaste kurstillfälle (HFL24)"></Title>
		<Content>
			<ol>
				<li class="fragment">
					<strong>Uppgift 2</strong> - Simplare val av persistent datalagring.
				</li>
				<ul>
					<li class="fragment">
						Fokus ligger på att strukturera & kunna serializera data, samt tänka på relationer
						mellan data
					</li>
					<li class="fragment">Inte en kurs i att hantera databaser</li>
					<li class="fragment">
						Möjligheten finns att nyttja t.ex. SQLite men annars uppmanas ni köra en simpel ad-hoc
						lösning
					</li>
				</ul>
				<li class="fragment">
					<strong>Uppgift 6</strong> - Begränsad mängd hårdvaru-API:er.
				</li>
				<ul>
					<li class="fragment">Kortare uppgift, nedförsbacke på slutet</li>
					<li class="fragment">Kvalité över kvantitet.</li>
					<li class="fragment">Förstå arbetsgången med att jobba mot mobilens operativsystem</li>
					<li class="fragment">Inte slita ut sig med för mycket mängdträning!</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Introduktion uppgift 1"></Title>
		<Content>
			<Split>
				<ol>
					<li class="fragment">Datamodeller (Dart)</li>
					<ul>
						<li class="fragment">Klasser: Person, Vehicle, ParkingSpace, Parking</li>
						<li class="fragment">Repository-mönstret: Lagring och hantering av data</li>
					</ul>
					<li class="fragment">CLI (Command Line Interface)</li>
					<ul>
						<li class="fragment">CRUD-operationer för alla modeller</li>
						<li class="fragment">Enkel interaktion via terminalen</li>
					</ul>
					<li class="fragment">Utmaningar & Fördjupning</li>
					<ul>
						<li class="fragment">Felhantering och beräkning av parkeringskostnad</li>
					</ul>
					<li class="fragment">Vidare Utveckling</li>
					<ul>
						<li class="fragment">Serialisering, datavalidering, och databasförberedelse</li>
						<li class="fragment">Asynkrona metoder (Future)</li>
					</ul>
					<hr class="fragment" />
					<li class="fragment"><strong>Läs mer på Teams!</strong></li>
				</ol>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Användning av AI?"></Title>
		<Content>
			<div class="mt-60 text-center">
				<tt>Snabb monolog?</tt>
			</div>
		</Content>
	</Slide>

	<Slide>
		<Title title="Koncept att läsa upp på (länk till docs i uppgift)"></Title>
		<Content>
			<Split>
				<ol>
					<li>Class Definitions</li>
					<li>Getters</li>
					<li>Abstract Classes</li>
					<li>Interfaces</li>
					<li>Inheritance</li>
					<li>Enumerated Types (enum)</li>
					<li>Generics</li>
					<li>Nullable Types</li>
					<li>Named Constructors</li>
					<li>Mixins</li>
					<li>Method Overriding</li>
					<li>Future</li>
				</ol>
				<ol start="13">
					<li>Required Named Parameters</li>
					<li>Optional Parameters</li>
					<li>Default Parameters</li>
					<li>Numbers (int, double)</li>
					<li>Strings (String)</li>
					<li>Booleans (bool)</li>
					<li>Records (Tuples)</li>
					<li>Lists (List)</li>
					<li>Maps (Map)</li>
					<li>Null (Null)</li>
					<li>Lambda Functions</li>
				</ol>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kodexempel"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code.update``
						}}
					>
						Grundläggande datatyper
					</li>

					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;`
							}}
						>
							Numbers (int, double)
						</li>

						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;

// Strings (String)
String name = "Alice";`
							}}
						>
							Strings (String)
						</li>

						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;

// Strings (String)
String name = "Alice";

// Booleans (bool)
bool isActive = true;`
							}}
						>
							Booleans (bool)
						</li>

						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;

// Strings (String)
String name = "Alice";

// Booleans (bool)
bool isActive = true;

// Null (Null)
String? nullableString = null;`
							}}
						>
							Null (Null) - konceptet "inget värde".
						</li>


					</ol>

					<li class="fragment">Grundläggande datastrukturer</li>

					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;

// Strings (String)
String name = "Alice";

// Booleans (bool)
bool isActive = true;

// Null (Null)
String? nullableString = null;

// Lists (List)
List<int> numbers = [1, 2, 3];`
							}}
						>
							Lists (List) - Kollektion av data, i ordning, indexerad
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Numbers (int, double)
int age = 30;
double pi = 3.14159;

// Strings (String)
String name = "Alice";

// Booleans (bool)
bool isActive = true;

// Null (Null)
String? nullableString = null;

// Lists (List)
List<int> numbers = [1, 2, 3];

// Maps (Map)
Map<String, int> ages = {'Alice': 30, 'Bob': 25};`
							}}
						>
							Maps (Map) - Nyckel-värde-par.
						</li>
					</ol>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Funktionsparametrar"></Title>
		<Content>
			<Split>
				<ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Required Named Parameters
void greet({required String name}) {
	print("Hello, $name");
}

greet(name:"steve");`
						}}
					>
						Required Named Parameters - Anropa funktioner med namngivna parametrar.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Required Named Parameters
void greet({required String name}) {
	print("Hello, $name");
}

greet(name:"steve");

// Optional Parameters
void sayHello([String name = "World"]) {
	print("Hello, $name");
}

sayHello();
sayHello("steve");`
						}}
					>
						Optional Parameters - Göra funktionsparametrar valfria.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Required Named Parameters
void greet({required String name}) {
	print("Hello, $name");
}

greet(name:"steve");

// Optional Parameters
void sayHello([String name = "World"]) {
	print("Hello, $name");
}

sayHello();
sayHello("steve");

// Default Parameters
void makeCoffee({String type = "Espresso"}) {
	print("Making $type coffee");
}

makeCoffe();`
						}}
					>
						Default Parameters - Sätta standardvärden för funktionsparametrar.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Required Named Parameters
void greet({required String name}) {
	print("Hello, $name");
}

greet(name:"steve");

// Optional Parameters
void sayHello([String name = "World"]) {
	print("Hello, $name");
}

sayHello();
sayHello("steve");

// Default Parameters
void makeCoffee({String type = "Espresso"}) {
	print("Making $type coffee");
}

makeCoffe();

// Positioned Parameters
void shout(String stuff) {
	print("$stuff!!!");
}

shout("food");`
						}}
					>
						Positioned Parameters - "Det vanliga?".
					</li>
				</ol>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code1}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code2.update``
		}}
	>
		<Title title="OOP Grundläggande"></Title>
		<Content>
			<Split>
				<ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Class Definitions
class Person {
	String name;
	int age;
	Person(this.name, this.age);
}`
						}}
					>
						Class Definitions - Hur man definierar klasser och vad de representerar.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Class Definitions
class Person {
	String name;
	int age;
	Person(this.name, this.age);
}

// Method Overriding
class Employee extends Person {
	@override
	String toString() => "Employee: $name, $age";
}`
						}}
					>
						Method Overriding - Hur man omdefinierar föräldraklassmetoder.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Class Definitions
class Person {
	String name;
	int age;
	Person(this.name, this.age);
}

// Method Overriding
class Employee extends Person {
	@override
	String toString() => "Employee: $name, $age";
}

// Inheritance
class Manager extends Employee {
	Manager(String name, int age) : super(name, age);
}`
						}}
					>
						Inheritance - Utöka klasser för att skapa ny funktionalitet.
					</li>
				</ol>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code2}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code3.update``
		}}
	>
		<Title title="Mer om OOP och typfunktioner"></Title>
		<Content>
			<Split>
				<ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// Getters
class Circle {
	double radius;
	Circle(this.radius);
	double get area => 3.14159 * radius * radius;
}`
						}}
					>
						Getters - Åtkomst av attribut.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// Getters
class Circle {
	double radius;
	Circle(this.radius);
	double get area => 3.14159 * radius * radius;
}

// Named Constructors
class Point {
	double x, y;
	Point.origin(): x = 0,y = 0;
}`
						}}
					>
						Named Constructors - Flera sätt att skapa objekt.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// Getters
class Circle {
	double radius;
	Circle(this.radius);
	double get area => 3.14159 * radius * radius;
}

// Named Constructors
class Point {
	double x, y;
	Point.origin(): x = 0,y = 0;
}

// Abstract Classes (can be extended)
abstract class Shape {
	double get area;
}`
						}}
					>
						Abstract Classes - Konceptet av abstraktion i klasser.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// Getters
class Circle {
	double radius;
	Circle(this.radius);
	double get area => 3.14159 * radius * radius;
}

// Named Constructors
class Point {
	double x, y;
	Point.origin(): x = 0,y = 0;
}

// Abstract Classes (can be extended)
abstract class Shape {
	double get area;
}	

// Interfaces (can be implemented)
interface class Printable {
	void printInfo();
}`
						}}
					>
						Interfaces - Implementera gemensam funktionalitet över klasser.
					</li>
				</ol>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code3}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code4.update``
		}}
	>
		<Title title="Avancerade funktioner"></Title>
		<Content>
			<Split>
				<ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }`
						}}
					>
						Enumerated Types (enum) - Begränsad uppsättning av värden som en variabel kan anta.
					</li>

					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }

// Nullable Types
int? maybeNull = null;`
						}}
					>
						Nullable Types - Typer som kan hålla ett null-värde.
					</li>

					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }

// Nullable Types
int? maybeNull = null;

// Generics
List<int> numbers = [1, 2, 3];`
						}}
					>
						Generics - Användning av typ-parametrar för mer återanvändbar kod.
					</li>

					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }

// Nullable Types
int? maybeNull = null;

// Generics
List<int> numbers = [1, 2, 3];

// Mixins (can be mixed in anywhere)
mixin Debug {
	void debugPrint() => print("Debugging...");
}

// use "with" to "mix in" mixin
class DebuggingThing with Debug {}`
						}}
					>
						Mixins - Lägga till funktionalitet i klasser utan arv.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }

// Nullable Types
int? maybeNull = null;

// Generics
List<int> numbers = [1, 2, 3];

// Mixins (can be mixed in anywhere)
mixin Debug {
	void debugPrint() => print("Debugging...");
}

// use "with" to "mix in" mixin
class DebuggingThing with Debug {}
	
// Lambda Functions
var add = (int a, int b) => a + b;`
						}}
					>
						Lambda Functions - Anonyma och ofta kortlivade funktioner.
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Enumerated Types (enum)
enum Color { red, green, blue }

// Nullable Types
int? maybeNull = null;

// Generics
List<int> numbers = [1, 2, 3];

// Mixins (can be mixed in anywhere)
mixin Debug {
	void debugPrint() => print("Debugging...");
}

// use "with" to "mix in" mixin
class DebuggingThing with Debug {}
	
// Lambda Functions
var add = (int a, int b) => a + b;

// Future
Future<String> fetchData() async {
	await Future.delayed(Duration(seconds: 2));
	return "Data fetched";
}`
						}}
					>
						Future - Hantering av asynkron programmering.
					</li>
				</ol>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code4}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Installation"></Title>
		<Content>
			<div class="mt-60 text-center">
				<a
					style="color: white;"
					href="https://docs.flutter.dev/get-started/install"
					class="link text-4xl font-extrabold"
					><tt>https://docs.flutter.dev/get-started/install</tt></a
				>
			</div>
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
</style>
