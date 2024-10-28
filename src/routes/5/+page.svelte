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
		<Title title="Föreläsning 5 - Avslutning Dart-kursen"></Title>
		<Content>
			<ol>
				<li class="fragment">Avancerade Dart-koncept</li>
				<ul>
					<li class="fragment">extension types</li>
					<li class="fragment">mixins</li>
					<li class="fragment">extension methods</li>
					<li class="fragment">patterns</li>
					<ul>
						<li class="fragment">object desctructuring</li>
						<li class="fragment">rest element</li>
						<li class="fragment">if-case</li>
					</ul>
					<li class="fragment">isolates</li>
				</ul>
				<li class="fragment">
					Inget som examineras under Dart-kursen som slutar bästa vecka (v.45)
				</li>
				<li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Nästa vecka"></Title>
		<Content>
			<ol>
				<li class="fragment">Ingen föreläsning</li>
				<li class="fragment">Bara handledning</li>
				<li class="fragment">Tid att göra klart uppgift 2 så alla är i fas inför Flutter.</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Uppdatering: Persistent Datalagring i Uppgift 2"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Ni är fria att implementera repositories med valfri persistent datalagringsstrategi
				</li>
				<li class="fragment">Anledning till ändringen:</li>
				<ul>
					<li class="fragment">Undvika krav på nedladdning av osignerade exekverbara filer</li>
					<li class="fragment">ObjectBox har begränsningar kring datatyper och konstruktorer</li>
				</ul>
				<li class="fragment">Tillgängliga strategier:</li>

				<ul>
					<li class="fragment">
						<code>ObjectBox</code> - För dig som är ny till databaser och vill ha en tillgänglig dokumentation
					</li>
					<li class="fragment"><code>SQLite</code> - För dig med tidigare SQL/SQLite-erfarenhet</li>
					<ul>
						<li class="fragment">Kan innebära visst dubbelarbete då Firebase är NoSQL</li>
					</ul>
					<li class="fragment">
						<code>Hive</code> - Enklare alternativ med tillräckliga exempel (trots begränsad dokumentation)
					</li>
					<li class="fragment"><code>Fil</code> - Egen lösning med JSON/CSV-format</li>
					<li class="fragment">Eller din egen preferens</li>
				</ul>

				<li class="fragment">Referenskod finns nu tillgänglig för samtliga strategier</li>
				<li class="fragment">
					Vi examinerar funktionaliteten (persistent datalagring), inte valet av strategi
				</li>
				<li class="fragment">
					Ursäkter till er som redan börjat med en lösning ni nu vill byta ut
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code2.update``
		}}
	>
		<Title title="Extensions i Dart"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Extension Types: Skapar typsäkra wrappers</li>
					<li class="fragment">Extension Methods: Utökar befintliga klasser</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Extension Type - Typsäker ålder
extension type Age(int value) {
  // Begränsar vad som kan göras med åldern
  bool isAdult() => value >= 18;
}

// Extension Method - Utökar String
extension StringHelper on String {
  bool isValidEmail() => 
    contains('@') && contains('.');
}

void main() {
  // Extension Type användning
  var age = Age(20);
  print(age.isAdult());  // true
  // age + 1;  // Kompileringsfel!

  // Extension Method användning
  var email = "test@example.com";
  print(email.isValidEmail());  // true
}`
						}}
					>
						Grundläggande exempel
					</li>
					<li class="fragment">Varför använda extensions?</li>
					<ul>
						<li class="fragment">Typsäkerhet utan runtime overhead</li>
						<li class="fragment">Utöka funktionalitet utan arv</li>
					</ul>
				</ul>
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
		<Title title="Mixins - Återanvändbar Funktionalitet"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Återanvänd kod utan arv</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`mixin Loggable {
  void log(String message) {
    print(DateTime.now().toString() + ': $message');
  }
}

class UserService with Loggable {
  void createUser(String name) {
    log('Creating user: $name');
    // ... användarlogik här
  }
}

class PaymentService with Loggable {
  void processPayment(double amount) {
    log('Processing payment: \$$amount');
    // ... betalningslogik här
  }
}`
						}}
					>
						Grundkoncept
					</li>
					<li class="fragment">Fördelar med mixins:</li>
					<ul>
						<li class="fragment">Dela funktionalitet mellan klasser</li>
						<li class="fragment">Undvik duplicerad kod</li>
					</ul>
				</ul>
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
		<Title title="Patterns - Modern Datahantering"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Kraftfulla sätt att arbeta med data</li>
					<li class="fragment">Matchning och destrukturering</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Object destructuring
var user = {'name': 'Anna', 'age': 30};
var {'name': name, 'age': age} = user;

// List patterns med rest
var numbers = [1, 2, 3, 4, 5];
var [first, second, ...rest] = numbers;

// Switch pattern matching
String getDeviceType(Map<String, dynamic> device) =>
  switch (device) {
    {'type': 'mobile', 'os': 'iOS'} => 'iPhone',
    {'type': 'mobile', 'os': 'Android'} => 'Android',
    _ => 'Unknown'
  };`
						}}
					>
						Grundläggande patterns
					</li>
					<li class="fragment">Fördelar med patterns:</li>
					<ul>
						<li class="fragment">Tydligare dataextraktion</li>
						<li class="fragment">Säkrare kontrollflöde</li>
					</ul>
				</ul>
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

	<Slide
		in={async () => {
			showcode = false
			await code5.update``
		}}
	>
		<Title title="Isolates - Parallell Exekvering"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Darts sätt att hantera concurrency</li>
					<li class="fragment">Separat minne</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`import 'dart:isolate';

// Tung beräkning i separat isolate
Future<int> heavyComputation() async {
  return await Isolate.run(() {
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  });
}

void main() async {
  print('Startar beräkning...');
  
  // Kör beräkningen på en separat isolate som inte blockerar huvudtråden(main isolate)
  final result = await heavyComputation();
  
  print('Resultat: $result');
}`
						}}
					>
						Grundläggande exempel
					</li>
					<li class="fragment">Användningsområden:</li>
					<ul>
						<li class="fragment">Tunga beräkningar</li>
						<li class="fragment">Parallell databehandling</li>
					</ul>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code5}
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
