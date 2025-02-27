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
	let codeAdvancedPatterns: Code
	let codeEventLoop: Code
	let codeIsolates: Code

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
				<li class="fragment">Ingen föreläsning eller handledning</li>
				<li class="fragment">Tid att göra klart uppgift 2 så alla är i fas inför Flutter.</li>
				<li class="fragment">Skriv på Teams om ni behöver hjälp 😊</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Persistent Datalagring i Uppgift 2"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Ni är fria att implementera repositories med valfri persistent datalagringsstrategi
				</li>

				<li class="fragment">Tillgängliga strategier:</li>

				<ul>
					<li class="fragment"><code>SQLite</code> - För dig med tidigare SQL/SQLite-erfarenhet</li>
					<ul>
						<li class="fragment">Kan innebära visst dubbelarbete då Firebase är NoSQL</li>
					</ul>
					<li class="fragment">
						<code>Hive</code> - Enklare alternativ med tillräckliga exempel (trots begränsad dokumentation)
					</li>
					<li class="fragment"><code>Fil</code> - Egen lösning med JSON/CSV-format</li>
					<li class="fragment">
						<code>Supabase</code> - liknar firebase, för dig med tidigare erfarenhet.
					</li>
					<li class="fragment">Eller din egen preferens</li>
				</ul>

				<li class="fragment">Referenskod finns på GitHub</li>
				<li class="fragment">
					Vi examinerar funktionaliteten (persistent datalagring), inte valet av strategi
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
							await code2.update`// Extension Type - t.ex. ålder
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
					<li class="fragment">Varför använda extension types?</li>
					<ul>
						<li class="fragment">Typsäkerhet utan runtime overhead (skapas inga objekt)</li>
					</ul>
					<li class="fragment">Varför använda extension methods?</li>
					<ul>
						<li class="fragment">Utöka funktionalitet utan att nyttja arv</li>
						<li class="fragment">
							Du slipper skapa t.ex. MyList för att lägga till dina uppdateringar till en vanlig
							List.
						</li>
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
						Exempelkod
					</li>
					<li class="fragment">Fördelar med mixins:</li>
					<ul>
						<li class="fragment">Dela funktionalitet mellan klasser</li>
						<li class="fragment">Undvik duplicerad kod</li>
						<li class="fragment">För att dela funktionalitet, ej state, instansvariabler osv.</li>
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
print(name);  // Anna
print(age);  // 30
// List patterns med rest
var numbers = [1, 2, 3, 4, 5];
var [first, second, ...rest] = numbers;
print(second);  // 2
// Switch pattern matching (matchar på objekt)
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

	<!-- Slide 2: Patterns - Avancerade -->
	<Slide
		in={async () => {
			showcode = false
			await codeAdvancedPatterns.update``
		}}
	>
		<Title title="Patterns - Avancerade Matchningar"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await codeAdvancedPatterns.update`// Pattern matching med sealed klasser
sealed class Shape {}

class Square implements Shape {
  final double length;
  Square(this.length);
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
}

// Komplett matchning garanterad av kompilatorn
double calculateArea(Shape shape) => switch (shape) {
      Square(length: var l) => l * l,
      Circle(radius: var r) => math.pi * r * r,
    };

main() {
  Shape shape = Square(10);

// Logical-OR pattern med delad guard
  switch (shape) {
    case Square(length: var x) || Circle(radius: var x) when x > 0:
      print('Non-empty symmetric shape');
    case _:
      print('Unknown shape');
  }
}`
						}}
					>
						Exempel på avancerade patterns
					</li>
					<li class="fragment">Pattern matching med sealed klasser</li>
					<li class="fragment">Logiska OR-mönster med shared guards</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={codeAdvancedPatterns}
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

	<!-- Slide 3: Event Loop -->
	<Slide
		in={async () => {
			showcode = false
			await codeEventLoop.update``
		}}
	>
		<Title title="Event Loop - Hjärtat av Asynkron Dart"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Single-threaded men asynkron modell</li>
					<li class="fragment">Hur async funktioner kan köras "parallellt"</li>
					<li class="fragment">Prioriteringssystem med flera köer:</li>
					<ul>
						<li class="fragment">Microtask Queue (högst prioritet)</li>
						<li class="fragment">Event Queue (standard prioritet)</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await codeEventLoop.update`import 'dart:async';

void main() {
  print('1. Synkron kod körs först');
  
  // Event queue (lägre prioritet)
  Future(() {
    print('4. Event queue task');
  });
  
  Future.delayed(Duration(milliseconds: 50), () {
    print('5. Delayed event körs sist');
  });
  
  // Microtask queue (högre prioritet)
  scheduleMicrotask(() {
    print('3. Microtask körs före alla event queue tasks');
  });
  
  print('2. Mer synkron kod');
  
  // Utskrift:
  // 1. Synkron kod körs först
  // 2. Mer synkron kod
  // 3. Microtask körs före alla event queue tasks
  // 4. Event queue task
  // 5. Delayed event körs sist
}`
						}}
					>
						Event Loop exekveringsordning
					</li>
					<li class="fragment">Användarinput prioriteras i event queue</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={codeEventLoop}
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

	<!-- Slide 4: Isolates - Grundläggande -->
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
					<li class="fragment">När event loop inte räcker till</li>
					<li class="fragment">Darts sätt att hantera äkta parallellism</li>
					<li class="fragment">Separat minne för varje isolate</li>
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
						Grundläggande exempel med Isolate.run()
					</li>
					<li class="fragment">Fördelar jämfört med async/await:</li>
					<ul>
						<li class="fragment">Äkta parallell exekvering</li>
						<li class="fragment">CPU-intensiva uppgifter blockerar inte UI</li>
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

	<!-- Slide 5: Isolates - Dataöverföring -->
	<Slide
		in={async () => {
			showcode = false
			await codeIsolates.update``
		}}
	>
		<Title title="Isolates - Kontinuerlig Kommunikation"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Kommunikation via message passing</li>
					<li class="fragment">Kontinuerlig dataström med streams</li>
					<li class="fragment">SendPort och ReceivePort</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await codeIsolates.update`import 'dart:isolate';

// Funktion som körs i en separat isolate
void generateDataStream(SendPort sendPort) async {
  for (int i = 1; i <= 10; i++) {
    await Future.delayed(Duration(milliseconds: 200));

    // Skicka data kontinuerligt tillbaka till main isolate
    sendPort.send(i);
  }
}

void main() async {
  final receivePort = ReceivePort();

  print('Startar dataström från separat isolate...');

  final isolate = await Isolate.spawn(generateDataStream, receivePort.sendPort);

  // Lyssna på kontinuerlig dataström
  await for (final data in receivePort) {
    if (data == 10) {
      print('Dataström komplett');
      break;
    }
    print('Mottog data: ' + data.toString());
  }

  // Städa upp
  receivePort.close();
  isolate.kill();
}`
						}}
					>
						Kontinuerlig dataström mellan isolates
					</li>
					<li class="fragment">Mer avancerat än Isolate.run()</li>
					<li class="fragment">Perfekt för realtidsdata och långvariga processer</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={codeIsolates}
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
		}}
	>
		<Title title="Sammanfattning - Avancerad Dart"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Moderna Dart-koncept vi har utforskat:</li>
					<ul>
						<li class="fragment">Extensions - utöka befintliga klasser utan arv</li>
						<li class="fragment">Extension Types - typsäkra wrappers utan runtime overhead</li>
						<li class="fragment">Mixins - återanvändbar funktionalitet mellan klasser</li>
						<li class="fragment">Patterns - kraftfull datahantering och matchning</li>
						<li class="fragment">Event Loop - asynkron exekvering på en tråd</li>
						<li class="fragment">Isolates - äkta parallellism för krävande uppgifter</li>
					</ul>
				</ul>
				<ul>
					<li class="fragment">Uppmaningar:</li>
					<ul>
						<li class="fragment">Använd patterns för tydligare dataextraktion</li>
						<li class="fragment">Tänk på din event loop för bättre responsive UI</li>
						<li class="fragment">Använd mixins för att dela funktionalitet, inte state</li>
						<li class="fragment">Nyttja extension methods istället för utility-klasser</li>
						<li class="fragment">Använd isolates för CPU-intensiva operationer</li>
						<li class="fragment">Minimera datamängden som skickas mellan isolates</li>
						<li class="fragment">I Flutter: compute() förenklar isolate-användning</li>
					</ul>
				</ul>
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
