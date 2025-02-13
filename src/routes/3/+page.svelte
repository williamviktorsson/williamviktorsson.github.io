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
		<Title title="Föreläsning 3 - Introduktion serverprogrammering"></Title>
		<Content>
			<ol>
				<li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li>
				<li class="fragment">Lite översiktligt om routing, json & http-requests</li>
				<li class="fragment">
					<strong
						>Repository-klasserna ska utföra sina operationer mot den server ni programmerar i
						veckan</strong
					>
				</li>
				<li class="fragment">Använda paketet <code>shelf</code> & <code>shelf_router</code></li>
				<li class="fragment">Exempelprojekt på GitHub</li>
				<li class="fragment">Förslag projektstruktur</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Nästa vecka"></Title>
		<Content>
			<ol>
				<li class="fragment">Utöka server till att erbjuda persistent datalagring</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Visualisering"></Title>
		<Content>
			<div class="mt-60 text-center">
				Dra fram en whiteboard visa förändringarna i arkitekturen.
			</div>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="HTTP - Grunden för webbkommunikation"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">HTTP står för Hypertext Transfer Protocol</li>
					<li class="fragment">Klient-server modell: Request-Response cykeln</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Serversidan (Dart med Shelf)
final Router app = Router();
app.get('/', _rootHandler);
Future<Response> _rootHandler(Request request) async {
  return Response.ok('Hello, World!');
}

// Klientsidan (Dart med http-paketet)
Future<String> getData() async {
  final response = await http.get(Uri.parse('http://localhost:8080/'));
  if (response.statusCode == 200) {
    return response.body;
  } else {
    throw Exception('Failed to load data');
  }
}`
						}}
					>
						Exempel på HTTP GET
					</li>
					<li class="fragment">Vanliga HTTP-metoder: GET, POST, PUT, DELETE</li>
					<li class="fragment">
						Status-koder: 200 OK, 404 Not Found, 500 Internal Server Error, etc.
					</li>
				</ul>
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
		<Title title="JSON - Data-utbytesformat"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">JSON står för JavaScript Object Notation</li>
					<li class="fragment">Lättviktigt, läsbart format för dataöverföring</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`final items = [];

Future<Response> _postItemHandler(Request request) async {
  final data = await request.readAsString();
  final json = jsonDecode(data);
  items.add(json);
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}`
						}}
					>
						Exempel på JSON-hantering i Dart
					</li>
					<li class="fragment">
						Grundläggande datatyper: objekt, array, string, number, boolean, null
					</li>
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
		<Title title="Routing - Dirigera förfrågningar"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Routing: Dirigera HTTP-förfrågningar till rätt hanterare</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`final Router app = Router();

app.get('/', _rootHandler);
app.get('/echo/<message>', _echoHandler);


Future<Response> _rootHandler(Request request) async {
  return Response.ok('Hello, World!');
}

Future<Response> _echoHandler(Request request) async {
  final message = request.params['message'];
  return Response.ok('$message');
}`
						}}
					>
						Exempel på routing
					</li>
					<li class="fragment">Hantera olika HTTP-metoder och URL-mönster</li>
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
		<Title title="Asynkrona anrop"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">
						Använd <code>async</code> och <code>await</code> för asynkrona operationer
					</li>
					<li class="fragment"><code>Future</code>-objekt representerar framtida värden</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`Future<Response> _postItemsHandler(Request request) async {
  final data = await request.readAsString();
  final json = jsonDecode(data);
  items.add(json);
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}

Future<Response> _getItemsHandler(Request request) async {
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}`
						}}
					>
						Exempel på asynkrona hanterare
					</li>
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
		<Title title="Implementering av Repository-mönstret"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment">Repository-mönstret abstraherar datakällor</li>
					<li class="fragment">Implementera mot er Shelf-server</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`class DataRepository {
  final String baseUrl;
  final http.Client client;
  
  DataRepository(this.baseUrl, this.client);

  Future<List<dynamic>> getItems() async {
    final response = await client.get(Uri.parse('$baseUrl/items'));
    if (response.statusCode == 200) {
      final jsonResponse = jsonDecode(response.body);
      return jsonResponse;
    } else {
      throw Exception('Failed to load data');
    }
  }

  Future<void> addItem(Map<String, dynamic> data) async {
    final response = await client.post(
      Uri.parse('$baseUrl/items'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(data),
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to add data');
    }
  }
}`
						}}
					>
						Exempel på DataRepository
					</li>
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

	<Slide
		in={async () => {
			showcode = false
			await code6.update``
		}}
	>
		<Title title="Datahantering med fromJson och toJson"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`class Item {
	final String description;
	Item(this.description);

	factory Item.fromJson(Map<String, dynamic> json) {
		return Item(json['description'] as String);
	}

	Map<String, dynamic> toJson() => {
		'description': description,
	};
}`
						}}
					>
						Använd `fromJson` och `toJson` för att konvertera mellan JSON och Dart-objekt
					</li>
					<li class="fragment">Gör datahanteringen mer typsäker och enklare att använda</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`class Item {
  final String description;
  Item(this.description);

  factory Item.fromJson(Map<String, dynamic> json) {
    return Item(json['description'] as String);
  }

  Map<String, dynamic> toJson() => {
    'description': description,
  };
}

// Uppdaterad DataRepository
class DataRepository {
  final String baseUrl;
  final http.Client client;
  DataRepository(this.baseUrl, this.client);

  Future<List<Item>> getItems() async {
    final response = await client.get(Uri.parse('$baseUrl/items'));
    if (response.statusCode == 200) {
      final List<dynamic> jsonResponse = jsonDecode(response.body);
      return jsonResponse.map((json) => Item.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load items');
    }
  }
}`
						}}
					>
						Exempel på Item-klass och uppdaterad DataRepository
					</li>
					<li class="fragment">
						Fördelar: Typsäkerhet, enklare att hantera data, bättre kodstruktur
					</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code6}
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
		<Title title="Referenskod"></Title>
		<Content>
			<div class="mt-60 text-center">
				Orientera lite i dagens kodexempel som finns på <a
					href="https://github.com/williamviktorsson/HFL25-1/tree/main/assignment_code">GitHub</a
				>.
			</div>
		</Content>
	</Slide>

	<Slide>
		<Title title="Projektstrukturer exempel-repo"></Title>
		<Content>
			<ol>
				<li class="fragment">Servern består uteslutande av två saker:</li>
				<ul>
					<li class="fragment">Handlers för HTTP request för olika routes</li>
					<li class="fragment">
						Implementationen av de repositories som servern använder för lokal datalagring.
					</li>
				</ul>
				<li class="fragment">Klienten (CLI) består av fyra saker:</li>
				<ul>
					<li class="fragment">Kod för att visa och navigera mellan menyer</li>
					<li class="fragment">
						Kod för att utföra de operationer som presenteras som val i menyerna.
					</li>
					<ul>
						<li class="fragment">Läser och hanterar input från användaren.</li>
					</ul>
					<li class="fragment">Lite utils för att validera input</li>
					<li class="fragment">
						Implementationen av de repositories som klienten använder för kommunikation med servern.
					</li>
				</ul>
				<li class="fragment">
					Ett ytterligare projekt som jag kallar shared där jag samlar koden som både CLI och server
					nyttjar.
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Steg för att refaktorisera till klient+server-lösning"></Title>
		<Content>
			<ol>
				<li class="fragment">Gör en dart server med:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart create -t server-shelf {'<projektnamn>'}</code>
					</li>
					<li style="list-style: none;" class="fragment">
						<code>cd {'<projektnamn>'}</code>
					</li>
					<li style="list-style: none;" class="fragment">
						<code>dart pub get</code>
					</li>
				</ul>
				<li class="fragment">Testa köra servern med:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart run {'<projektnamn>:server'}</code>
					</li>
				</ul>
				<li class="fragment">Testa att köra testerna för serverkoden med:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart test</code>
					</li>
				</ul>
				<li class="fragment">
					Gör ett nytt projekt (shared) där ni samlar koden som både CLI och server nyttjar.
				</li>
				<ul>
					<li class="fragment">Skapat med detta kommando:</li>
					<ul>
						<li style="list-style: none;" class="fragment">
							<code>dart create -t package {'cli_shared'}</code>
						</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Steg för att refaktorisera till klient+server-lösning | fortsättning"></Title>
		<Content>
			<ol>
				<li class="fragment">På klienten:</li>
				<ul>
					<li class="fragment">Gör alla anrop i dina repositories till asynkrona</li>
					<li class="fragment">Gör din main funktion till async</li>
					<li class="fragment">
						Gör await på alla funktionsanrop i ditt CLI som utför asynkrona anrop
					</li>
					<li class="fragment">
						Byt ut koden i dina repositories som hämtar data från lokala datastrukturer till att
						hämta information från din server över http
					</li>
					<ul>
						<li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li>
					</ul>
				</ul>
				<li class="fragment">På servern:</li>
				<ul>
					<li class="fragment">
						Lägg till en unik route och handler för varje operation som finns i alla dina
						repositories
					</li>
					<ul>
						<li class="fragment">
							T.ex. en GET/PUT/POST/DELETE för alla [VEHICLES/PERSONS/PARKINGS/PARKINGSPOTS]
						</li>
					</ul>
					<li class="fragment">Hantera innehållet i varje request</li>

					<li class="fragment">
						Använd dina omodifierade repositories från uppgift 1 för att lagra i lokal datalagring
						på servern.
					</li>
					<ul>
						<li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">
				Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!
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
