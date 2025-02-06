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
		<Title title="Föreläsning 4 - Fortsättning serverprogrammering"></Title>
		<Content>
			<ol>
				<li class="fragment">Utöka server till att erbjuda persistent datalagring</li>
				<li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li>
				<ul>
					<li class="fragment">Inte den som var planerad, men den nya jag valt är väldigt lik!</li>
				</ul>
				<li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Nästa vecka"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Avancerade Dart-koncept (mixins, extension methods, extension types, patterns, ...)
				</li>
				<li class="fragment">Inget som examineras under Dart-kursen som slutar vecka 45.</li>
				<li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Visualisering"></Title>
		<Content>
			<div class="mt-60 text-center">Dra fram en whiteboard igen! Vad ändras denna vecka?</div>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Nödvändiga förutsättningar"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`abstract interface class RepositoryInterface<T> {
  Future<T> create(T item);
  Future<List<T>> getAll();
  Future<T?> getById(int id);
  Future<T> update(int id, T item);
  Future<T> delete(int id);
}`
						}}
					>
						Du har uppdaterat dina repositories till att vara async
					</li>
					<li class="fragment">
						Du gör await på alla async-funktioner och funktioner som kör async-funktioner.
					</li>

					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`abstract interface class RepositoryInterface<T> {
Future<T> create(T item);
Future<List<T>> getAll();
Future<T?> getById(int id);
Future<T> update(int id, T item);
Future<T> delete(int id);

// Exempel model

class Item {
  final String description;
  final int id;

  Item(this.description, [this.id = -1]);

  factory Item.fromJson(Map<String, dynamic> json) {
    return Item(json['description'], json['id']);
  }

  Map<String, dynamic> toJson() {
    return {"description": description, "id": id};
  }
}

}`
						}}
					>
						För att möta denna gränsyta har du också lagt till int id i alla modellklasser
					</li>
					<li
						oncurrent={async () => {
							showcode = true
							await code1.update`// Configure example routes.
final router = Router();

router.post('/items', postItemHandler); // create an item
router.get('/items', getItemsHandler); // get all items
router.get('/items/<id>', getItemHandler); // get specific item
router.put('/items/<id>', updateItemHandler); // update specific item
router.delete('/items/<id>', deleteItemHandler); // update specific item

router.post('/bags', postBagHandler); // create a bag
router.get('/bags', getBagsHandler); // get all bags
router.get('/bags/<id>', getBagHandler); // get specific bag
router.put('/bags/<id>', updateBagHandler); // update specific bag
router.delete('/bags/<id>', deleteBagHandler); // update specific bag`
						}}
						class="fragment"
					>
						Du har handlers på din server som motsvarar alla operationer som systemet ska stödja
					</li>
					<li class="fragment">Ditt CLI fungerar som förväntat.</li>
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

	<Slide>
		<Title title="Referenskod"></Title>
		<Content>
			<div class="mt-60 text-center">Orientera lite i dagens kodexempel som finns på GitHub.</div>
		</Content>
	</Slide>

	<Slide>
		<Title title="Vad har jag gjort?!"></Title>
		<Content>
			<ol>
				<li class="fragment">Tre dart-projekt.</li>
				<ul>
					<li class="fragment">
						Ett nytt som jag kallar shared där jag samlar koden som både CLI och server nyttjar.
					</li>
					<li class="fragment">Skapat med detta kommando:</li>
					<ul>
						<li style="list-style: none;" class="fragment">
							<code>dart create -t package {'cli_shared'}</code>
						</li>
					</ul>

					<li class="fragment">
						Har kod för models och mitt repository interface som både CLI och server
						nyttjar/implementerar
					</li>
					<li class="fragment">
						Inget ni behöver fixa men jag blev less efter ett tag på att ha duplicerad kod :-)
					</li>
				</ul>
				<li class="fragment">
					Jag har struntat i abstrakta generiska klasser och bytt till interface
				</li>
				<ul>
					<li class="fragment">För att undvika förvirring.</li>
					<li class="fragment">
						Det blir mer läsbar kod om alla Repositories implementerar sin egen logik.
					</li>
					<li class="fragment">Däremot mer repetition...</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Projektstrukturer?!"></Title>
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
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Repository med Lokal Datalagring"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code4.update``
						}}
					>
						Vad är ett Repository?
					</li>
					<ul>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code4.update`// In-memory Repository
	abstract class Repository<T> {
		List<T> _items = [];
		
		void add(T item) => _items.add(item);
		List<T> getAll() => _items;
	}`
							}}
						>
							En abstraktion för datalagring som döljer implementationsdetaljer
						</li>
						<li class="fragment">
							Ger ett enhetligt gränssnitt för att hantera data oavsett lagringssätt
						</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code4.update``
						}}
					>
						Lokal Fillagring
					</li>
					<ul>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code4.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		// Konvertering till/från JSON
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	}`
							}}
						>
							Basstruktur för filbaserat repository
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code4.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		// Konvertering till/från JSON
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	
		// Läser från fil
		Future<List<T>> readFile() async {
			final file = File(filePath);
			if (!await file.exists()) {
				await file.writeAsString('[]');
				return [];
			}
			final content = await file.readAsString();
			final List<dynamic> jsonList = jsonDecode(content);
			return jsonList.map((json) => fromJson(json)).toList();
		}
	}`
							}}
						>
							Läsning från fil med felhantering
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code4.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	
		Future<List<T>> readFile() async {
			final file = File(filePath);
			if (!await file.exists()) {
				await file.writeAsString('[]');
				return [];
			}
			final content = await file.readAsString();
			final List<dynamic> jsonList = jsonDecode(content);
			return jsonList.map((json) => fromJson(json)).toList();
		}
	
		// Skriver till fil
		Future<void> writeFile(List<T> items) async {
			final file = File(filePath);
			final jsonList = items.map((item) => toJson(item)).toList();
			await file.writeAsString(jsonEncode(jsonList));
		}
	
		// Lägger till item
		Future<void> add(T item) async {
			final items = await readFile();
			items.add(item);
			await writeFile(items);
		}
	}`
							}}
						>
							Skrivning till fil och operationer
						</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Användning
	class Person {
		final String id;
		final String name;
		Person(this.id, this.name);
	}
	
	class PersonRepository extends FileRepository<Person> {
		PersonRepository() : super('persons.json');
		
		@override
		Person fromJson(Map<String, dynamic> json) {
			return Person(json['id'], json['name']);
		}
		
		@override
		Map<String, dynamic> toJson(Person person) {
			return {'id': person.id, 'name': person.name};
		}
	}`
						}}
					>
						Praktiskt Exempel
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

	<Slide>
		<Title title="Kom igång med ObjectBox!"></Title>
		<Content>
			<ol>
				<li class="fragment">Lägg till objectbox till din server och modelkod:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart pub add objectbox</code>
					</li>
				</ul>
				<li class="fragment">Lägg till paket för kodgenerering:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart pub add --dev build_runner objectbox_generator:any</code>
					</li>
				</ul>
				<li class="fragment">
					Lägg till <code>@Entity</code> och <code>@Id</code> annotationer till dina modell klasser.
				</li>
				<li class="fragment">Generera objectbox kod(som du aldrig kommer behöva röra sedan)</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>dart run build_runner build</code>
					</li>
				</ul>
				<li class="fragment">
					Ladda ned c-biblioteket för objectbox. Detta är kanske det mest tekniska steget :-)
				</li>
				<ul>
					<li class="fragment">
						Navigera till <a href="https://github.com/objectbox/objectbox-c/releases"
							>https://github.com/objectbox/objectbox-c/releases</a
						> och välj senaste release för din plattform.
					</li>
					<ul>
						<li class="fragment">Välj filen som heter objectbox-operativsystem. Alltså inte dem som innehåller sync eller jni</li>
					</ul>
					<li class="fragment">
						Unzip och placera innehållet i <code>/lib</code> direkt under
						<code>/lib</code> i serverprojektet.
					</li>
				</ul>
				<li class="fragment">
					Byt ut din lokala datalagring mot att kommunicera med en ObjectBox.
				</li>
				<ul>
					<li class="fragment">Getting started guiden här med Dart Native som val är bra:</li>
					<ul>
						<li class="fragment">
							<a href="https://docs.objectbox.io/getting-started"
								>https://docs.objectbox.io/getting-started</a
							>
						</li>
					</ul>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Relationer? Begränsningar?"></Title>
		<Content>
			<ol>
				<li class="fragment">
					För klasser som har nästlade klasser behöver du göra lite magi eftersom ObjectBox endast
					stödjer lagring av primitiva datatyper
				</li>
				<ul>
					<li class="fragment">
						Du kan använda en getter+setter för att lagra en serializerad version av ditt nästlade
						data.
					</li>
				</ul>
				<li class="fragment">Det finns stöd för relationer i ObjectBox som du kan nyttja</li>
				<ul>
					<li class="fragment">
						Däremot finns inte det i Firebase Firestore så därför bör vi undvika det
					</li>
				</ul>
				<li class="fragment">Det är okej att lagra duplicerat data i denna uppgift</li>
				<ul>
					<li class="fragment">
						När samma data förekommer på samma ställe i en databas kallas datat <code
							>denormaliserat</code
						>
					</li>
				</ul>
				<li class="fragment">
					En vanlig lösning på relationer i NoSQL-databaser är att en till kollektion introduceras
					endast för att representera relationerna.
				</li>

				<li class="fragment">
					En annan lösning är att endast id:n till objekt i relation lagras, och därefter får dessa
					objekt hämtas.
				</li>

				<li class="fragment">
					Här är två lämpliga videor för utvecklare med SQL-bakgrund som vill lära sig mer:
				</li>

				<ul>
					<li class="fragment">
						<a
							href="https://www.youtube.com/watch?v=ran_Ylug7AE&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&index=2"
							>Converting SQL structures to Firebase structures #2</a
						>
					</li>
					<li class="fragment">
						<a
							href="https://www.youtube.com/watch?v=haMOUb3KVSo&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=5"
							>How to Structure Your Data #5</a
						>
					</li>
				</ul>
			</ol>
		</Content>
	</Slide>



	<Slide>
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">
				Det var allt för idag!
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
