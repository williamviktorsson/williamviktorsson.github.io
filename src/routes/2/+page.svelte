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
		<Title title="Föreläsning 2 - blandat nyttigt för lyckat kursgenomförande"></Title>
		<Content>
			<ol>
				<li class="fragment">Kort repetition</li>
				<li class="fragment">Kursen närmsta veckorna</li>
				<li class="fragment">Git</li>
				<li class="fragment">OOP</li>
				<li class="fragment">Asynkron programmering</li>
				<li class="fragment">Inspelning - inlämning - OBS</li>
				<li class="fragment">Serverprogrammering?</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Förra veckans innehåll"></Title>
		<Content>
			<ol>
				<li class="fragment">Personal på kursen - vem är er lärare?</li>
				<li class="fragment">Formaliteter: examinationer, kursupplägg, FSR</li>
				<li class="fragment">Dart & Flutter</li>
				<ul>
					<li class="fragment">Hur skiljer de sig från varandra?</li>
					<li class="fragment">Varför finns de?</li>
					<li class="fragment">Vad är speciellt med språket/ramverket?</li>
				</ul>
				<li class="fragment">Kursplanering - konkret innehåll</li>
				<li class="fragment">Examinerande uppgifter</li>
				<ul>
					<li class="fragment">Vad ni förväntas producera för att nå ett betyg</li>
				</ul>
				<li class="fragment">Kodexempel</li>
				<ul>
					<li class="fragment">
						Översikt för att komma igång: klasser, funktioner, variabler & lite blandat
					</li>
				</ul>
				<li class="fragment">
					Återbesök denna på <a style="color: white;" href="https://williamviktorsson.github.io/"
						>https://williamviktorsson.github.io/</a
					> om ni vill repetera!
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kursen närmsta veckorna"></Title>
		<Content>
			<ol>
				<li class="fragment">Denna vecka</li>
				<ul>
					<li class="fragment">Bli klar med första examinerande uppgiften</li>
					<li class="fragment">
						Fokus på klasser, funktioner, iterering - grundläggande syntax i Dart
					</li>
				</ul>
				<li class="fragment">Nästa vecka</li>
				<ul>
					<li class="fragment">Påbörja simpel serverprogrammering</li>
					<li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li>
					<li class="fragment">Lite översiktligt om routing, json & http-requests</li>
					<li class="fragment">
						<strong>Repository-klasserna ska utföra sina operationer mot denna nya server</strong>
					</li>
				</ul>
				<li class="fragment">Veckan efter</li>
				<ul>
					<li class="fragment">Utöka server till att erbjuda persistent datalagring</li>
					<li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li>
					<li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Git - Förberedelser"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Ladda ned Git från <a href="https://git-scm.com/">https://git-scm.com/</a>
				</li>
				<li class="fragment">Skapa ett GitHub konto på <a href="https://github.com/">GitHub</a></li>
				<ul>
					<li class="fragment">Existerande konto eller t.ex. GitLab konto går också bra</li>
				</ul>
				<li class="fragment">Öppna en terminal.</li>
				<ul>
					<li class="fragment">För Windows-uppskattare: WSL eller Git Bash.</li>
				</ul>
				<li class="fragment">
					Generera en SSH-nyckel på din dator (<a
						href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
						>guide</a
					>)
				</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>ssh-keygen -t ed25519 -C "your_email@example.com"</code>
					</li>
					<ul>
						<li class="fragment">ENTER, ENTER, ENTER (acceptera defaults)</li>
					</ul>
				</ul>
				<li class="fragment">Skriv ut din publika nyckel så du kan lägga till på GitHub</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>cat ~/.ssh/id_ed25519.pub</code>
					</li>
					<ul>
						<li class="fragment">kopiera (ctrl+c)</li>
					</ul>
				</ul>
				<li class="fragment">
					Lägg till nyckeln på GitHub under <a href="https://github.com/settings/keys"
						>https://github.com/settings/keys</a
					>
				</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Git - Nytt projekt"></Title>
		<Content>
			<ol>
				<li class="fragment">
					Skapa ett <a href="https://github.com/williamviktorsson/example">Nytt projekt på GitHub</a
					>
				</li>

				<li class="fragment">Under Quick setup: Välj <code>SSH</code></li>

				<li class="fragment">
					Kopiera koden från <code>...or push an existing repository from the command line</code>
				</li>

				<li class="fragment">Öppna en terminal i ditt projekt.</li>
				<ul>
					<li class="fragment">Förslag 1: Navigera till projektet med <code>cd</code></li>
					<li class="fragment">Förslag 2: Öppna i VSCode</li>
				</ul>
				<li class="fragment">Klistra in koden du kopierat:</li>
				<ul>
					<li style="list-style: none;" class="fragment">
						<code>git remote add origin git@github.com:williamviktorsson/example.git</code>
					</li>
					<li style="list-style: none;" class="fragment">
						<code>git branch -M main</code>
					</li>
					<li style="list-style: none;" class="fragment">
						<code>git push -u origin main</code>
					</li>
				</ul>
				<li class="fragment">Nu är du redo att börja koda och versionshantera dina ändringar!</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Git - Grundläggande Arbetsflöde"></Title>
		<Content>
			<ol>
				<li class="fragment">Gör ändringar i dina filer</li>
				<li class="fragment">Förbered din nästa "commit" med att lägga till ändringarna:</li>
				<ul>
					<li class="fragment">
						<code>git add &lt;filnamn&gt;</code> för att lägga till en specifik fil, eller:
					</li>
					<li class="fragment"><code>git add .</code> (för alla ändringar)</li>
				</ul>
				<li class="fragment">
					Commita ändringar:
					<code>git commit -m "Ditt commit-meddelande"</code>
				</li>
				<li class="fragment">
					Pusha ändringar till remote (GitHub/GitLab):
					<code>git push</code>
				</li>
				<li class="fragment">
					Innan du börjar nytt arbete, hämta senaste ändringarna från remote:
					<code>git pull</code>
				</li>
				<li class="fragment">Kontrollera status när som helst: <code>git status</code></li>
				<li class="fragment">Grundläggande branching:</li>
				<ol style="list-style: lower-latin;">
					<li class="fragment">Skapa ny branch: <code>git branch &lt;namn&gt;</code></li>
					<li class="fragment">Byt till ny branch: <code>git checkout &lt;namn&gt;</code></li>
					<li class="fragment">Sammanfoga (merge) branch till main:</li>

					<ul style="list-style">
						<li class="fragment"><code>git checkout main</code></li>
						<li class="fragment"><code>git merge &lt;namn&gt;</code></li>
					</ul>
				</ol>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Objektorienterad Programmering i Dart"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code1.update``
						}}
					>
						Klasser och Objekt
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`class Person {
	  String name;
	  Person({required this.name});
	}
	
	// Skapa ett objekt
	Person alice = Person(name: "Alice");`
							}}
						>
							Klasser definerar datastruktur och beteende
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`class Person {
	  String name;
	  Person({required this.name});
	}
	
	// Skapa ett objekt
	Person alice = Person(name: "Alice");
	
	// Arv
	class Vehicle {
	  String regnr;
	  Vehicle(required this.regnr);
	}
	
	// Komposition
	class Car extends Vehicle {
	  Person owner;
	  Car({required String regnr, required this.owner}) : super(regnr: regnr);
	}`
							}}
						>
							Arv möjliggör kodåteranvändning
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code1.update``
						}}
					>
						Inkapsling och Access Modifiers
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`class BankAccount {
	  String _accountNumber; // Privat variabel
	  double _balance = 0;
	
	  BankAccount(this._accountNumber);
	
	  void deposit(double amount) {
		_balance += amount;
	  }
	
	  double get balance => _balance; // Publik getter
	}`
							}}
						>
							Privata variabler och publika metoder
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code1.update``
						}}
					>
						Generics & Abstrakta klasser
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`// Abstrakt klass kan ha metodimplementationer men kan inte instansieras.
// Endast konkreta klasser som ärver från Repository kan skapas.
abstract class Repository<T> {
  List<T> _items = [];

  void add(T item) => _items.add(item);

  List<T> getAll() => _items;

  void update(T item, T newItem) {
    var index = _items.indexWhere((element) => element == item);
    _items[index] = newItem;
  }

  void delete(T item) => _items.remove(item);
}
	
// lagrar och tar endast emot Person-objekt
class PersonRepository extends Repository<Person> {}

// lagrar och tar endast emot Vehicle-objekt
class VehicleRepository extends Repository<Vehicle> {}

// Notera implementationen återanvänds. Ingen repeterad kod :-)
	`
							}}
						>
							Generics för flexibel och typesäker kod
						</li>
						<li class="fragment">
							Abstrakt klass för att definiera gemensamma beteenden eller påtvinga implementationer
						</li>
						<ul>
							<li class="fragment">utan att tillåta instansiering</li>
						</ul>
					</ol>
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
		<Title title="OOP i Dart - fortsättning"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code2.update``
						}}
					>
						Polymorfism
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code2.update`void printArea(Shape shape) {
	  print("Area: " + shape.getArea());
	}
	
	// Användning
	printArea(Circle(5));
	printArea(Square(4));`
							}}
						>
							Subklasser kan användas som om de vore av föräldraklassens typ
						</li>
						<li class="fragment">
							Samma kod kan leda till olika beteenden beroende på subklassers implementation
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code2.update``
						}}
					>
						Singleton Pattern
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code2.update`class PersonRepository extends Repository<Person> {
	static final PersonRepository _instance = PersonRepository._internal();
	
	// privat konstruktor förhindrar att fler objekt av klassen skapas
	PersonRepository._internal();
	
	static PersonRepository get instance => _instance;
}

// Användning
PersonRepository.instance.add(Person(name: "Bob"));`
							}}
						>
							Säkerställer en enda instans av en klass
						</li>

						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code2.update`class PersonRepository extends Repository<Person> {
  static final PersonRepository _instance = PersonRepository._internal();

  // privat konstruktor förhindrar att fler objekt av klassen skapas
  PersonRepository._internal();

  factory PersonRepository() => _instance;
}
  
// Användning
PersonRepository().add(Person(name: "Bob"));`
							}}
						>
							Går också att lösa med factory konstruktor
						</li>
						<ul>
							<li class="fragment">
								En konstruktor som inte måste returnera en ny instans av sin klass.
							</li>
							<li class="fragment">Kan returnera en singleton eller t.ex. en subklass.</li>
						</ul>
					</ol>
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

	<Slide>
		<Title title="Asynkron Programmering i Dart"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code3.update``
						}}
					>
						Varför behövs asynkron programmering?
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`// Synkron kod (kan blockera UI)
	void fetchParkingData() {
	  var data = readLargeDataFile(); // Tar lång tid
	  processData(data);
	  updateUI();
	}
	
	// Asynkron kod (non-blocking)
	Future<void> fetchParkingDataAsync() async {
	  var data = await readLargeDataFileAsync();
	  processData(data);
	  updateUI();
	}`
							}}
						>
							Förhindrar blockering av användaregränssnitt
						</li>
						<ul>
							<li class="fragment">
								Tillåter processorn att fortsätta med andra uppdrag medans asynkrona uppdrag
								bearbetas i bakgrunden
							</li>
						</ul>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`// HTTP-förfrågan för att hämta parkeringsplatser
	Future<List<ParkingSpot>> fetchParkingSpots() async {
	  final response = await http.get('https://api.parkering.se/spots');
	  if (response.statusCode == 200) {
		// Parsera JSON och returnera lista av parkeringsplatser
		return parseSpots(response.body);
	  } else {
		throw Exception('Kunde inte hämta parkeringsplatser');
	  }
	}
	
	// Användning
	void updateParkingSpots() async {
	  try {
		List<ParkingSpot> spots = await fetchParkingSpots();
		updateUI(spots);
	  } catch (e) {
		showError('Fel vid hämtning av parkeringsplatser');
	  }
	}`
							}}
						>
							Hantera nätverksförfrågningar (HTTP)
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`// Databasoperation för att spara en parkering
	Future<void> saveParkingToDB(Parking parking) async {
	  final db = await openDatabase('parking.db');
	  await db.insert('parkings', parking.toMap());
	  await db.close();
	}
	
	// Användning
	void startParking(Vehicle vehicle, ParkingSpot spot) async {
	  final parking = Parking(
		vehicle: vehicle,
		spot: spot,
		startTime: DateTime.now()
	  );
	  try {
		await saveParkingToDB(parking);
		showMessage('Parkering påbörjad');
	  } catch (e) {
		showError('Kunde inte spara parkeringen');
	  }
	}`
							}}
						>
							Utföra databasoperationer
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code3.update``
						}}
					>
						Grundläggande koncept
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`Future<ParkingSpot> findAvailableSpot() async {
	  // Simulerar en tidskrävande operation
	  await Future.delayed(Duration(seconds: 2));
	  return ParkingSpot(id: '1', isAvailable: true);
	}
	
	// Användning med await
	void parkCar() async {
	  print('Letar efter ledig plats...');
	  ParkingSpot spot = await findAvailableSpot();
	  print('Plats hittad: ' + spot.id);
	}
	
	// Användning med .then()
	void parkCarThen() {
	  print('Letar efter ledig plats...');
	  findAvailableSpot().then((spot) {
		print('Plats hittad: ' + spot.id);
	  });
	}`
							}}
						>
							Future, async och await
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`Future<List<Vehicle>> fetchParkedVehicles() async {
	  // Simulerar hämtning från databas
	  await Future.delayed(Duration(seconds: 1));
	  return [
		Vehicle(registrationNumber: 'ABC123', type: 'Car'),
		Vehicle(registrationNumber: 'XYZ789', type: 'Motorcycle')
	  ];
	}
	
	Stream<Vehicle> streamParkedVehicles() async* {
	  List<Vehicle> vehicles = await fetchParkedVehicles();
	  for (var vehicle in vehicles) {
		await Future.delayed(Duration(seconds: 1)); // Simulerar realtidsuppdateringar
		yield vehicle;
	  }
	}
	
	// Användning
	void monitorParking() {
	  streamParkedVehicles().listen((vehicle) {
		print('Parkerat fordon: ' + vehicle.registrationNumber);
	  });
	}`
							}}
						>
							Streams för kontinuerliga uppdateringar
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code3.update``
						}}
					>
						Felhantering
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`Future<void> endParking(String registrationNumber) async {
	  try {
		final parking = await findActiveParking(registrationNumber);
		parking.endTime = DateTime.now();
		await updateParkingInDB(parking);
		print('Parkering avslutad för ' + registrationNumber);
	  } catch (e) {
		print('Fel vid avslutning av parkering: $e');
	  }
	}
	
	Future<Parking> findActiveParking(String registrationNumber) async {
	  // Simulerar databassökning
	  await Future.delayed(Duration(seconds: 1));
	  throw Exception('Ingen aktiv parkering hittad');
	}
	
	Future<void> updateParkingInDB(Parking parking) async {
	  // Simulerar databasuppdatering
	  await Future.delayed(Duration(seconds: 1));
	  print('Parkering uppdaterad i databasen');
	}`
							}}
						>
							Try-catch med async-await
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

	<Slide>
		<Title title="Grundläggande inspelning i OBS Studio"></Title>
		<Content>
			<ol>
				<li class="fragment">Förberedelser</li>
				<ul>
					<li class="fragment">
						Ladda ner och installera OBS Studio från <a href="https://obsproject.com/"
							>officiella hemsidan</a
						>
					</li>
					<li class="fragment">Starta OBS Studio och kör eventuell automatisk konfiguration</li>
				</ul>
				<li class="fragment">Konfigurera scenen</li>
				<ul>
					<li class="fragment">
						Klicka på '+' under 'Sources' och välj lämpliga källor (t.ex. 'Display Capture' eller
						'Window Capture')
					</li>
					<li class="fragment">
						Justera källornas storlek och position i förhandsgranskningsfönstret (högerklicka +
						'Resize output')
					</li>
				</ul>
				<li class="fragment">Ljudinställningar</li>
				<ul>
					<li class="fragment">
						Kontrollera att rätt mikrofon är vald under 'Settings/Audio/Monitoring Device'
					</li>
					<li class="fragment">Justera ljudnivåer för mikrofon och datorljud i 'Audio Mixer'</li>
				</ul>

				<li class="fragment">Inspelningsinställningar</li>
				<ul>
					<li class="fragment">
						Gå till Settings/Output och välj 'Recording Path' och 'Recording Format'
					</li>
					<li class="fragment">Mappen väljer du själv, för format föreslår jag Fragmented MP4</li>
				</ul>

				<li class="fragment">Starta inspelningen</li>
				<ul>
					<li class="fragment">Klicka på 'Start Recording' i huvudmenyn</li>
					<li class="fragment">Utför din presentation eller demonstration</li>
					<li class="fragment">Klicka på 'Stop Recording' när du är klar</li>
				</ul>
				<li class="fragment">Efter inspelningen</li>
				<ul>
					<li class="fragment">Hitta den inspelade filen i den konfigurerade inspelningsmappen</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code.update``
		}}
	>
		<Title title="Introduktion till Serverprogrammering"></Title>
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
						Vad är klient-server-modellen?
					</li>
					<ul>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Klient (mobilapp)
						Future<void> getAndDisplayAvailableSpots() async {
				
							final response = await http.get('https://parkering-api.se/spots/available');
							final List<dynamic> data = json.decode(response.body);
							final spots = data.map((json) => ParkingSpot.fromJson(json)).toList();
							displaySpots(spots);

						}
						
					`
							}}
						>
							Klient: Enheten som begär data eller tjänster (t.ex. webbläsare, mobilapp)
						</li>
						<li class="fragment">
							Server: Dator som tillhandahåller data eller tjänster till klienter
						</li>
						<ul>
							<li
								class="fragment"
								oncurrent={async () => {
									showcode = true
									await code.update`// Klient (mobilapp)
							Future<void> getAndDisplayAvailableSpots() async {
					
								final response = await http.get('https://parkering-api.se/spots/available');
								final List<dynamic> data = json.decode(response.body);
								final spots = data.map((json) => ParkingSpot.fromJson(json)).toList();
								displaySpots(spots);

							}
							
							// Server
							app.get('/spots/available', (req, res) async {
							  try {
								final spots = await database.queryAvailableSpots();
								res.json(spots);
							  } catch (e) {
								res.status(500).json({'error': 'Databasfel: $e'});
							  }
							});`
								}}
							>
								Svarar på requests från klienter
							</li>
							<li
								class="fragment"
								oncurrent={async () => {
									showcode = true
									await code.update`// Klient (mobilapp)
						Future<void> getAndDisplayAvailableSpots() async {
				
							final response = await http.get('https://parkering-api.se/spots/available');
							final List<dynamic> data = json.decode(response.body);
							final spots = data.map((json) => ParkingSpot.fromJson(json)).toList();
							displaySpots(spots);

						}
						
						// Server
						app.get('/spots/available', (req, res) async {
						  try {
							final spots = await database.queryAvailableSpots();
							res.json(spots);
						  } catch (e) {
							res.status(500).json({'error': 'Databasfel: $e'});
						  }
						});
						
						// Databasoperation (förenklas här)
						Future<List<ParkingSpot>> queryAvailableSpots() async {
						  // Simulerar databasanrop
						  await Future.delayed(Duration(milliseconds: 100));
						  return [
							ParkingSpot('A1', 'Norra Parkeringen', 25.0, true),
							ParkingSpot('B2', 'Södra Parkeringen', 20.0, false),
						  ];
						}`
								}}
							>
								Lagrar och hanterar data
							</li>
						</ul>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code.update``
						}}
					>
						Serveruppgifter i parkeringsappen
					</li>
					<ul>
						<li class="fragment">Hantera databasoperationer (spara/hämta parkeringar)</li>
						<li class="fragment">Bearbeta klientförfrågningar (t.ex. hitta ledig plats)</li>
						<li class="fragment">
							Upprätthålla applikationslogik (t.ex. beräkna parkeringsavgift)
						</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code.update``
						}}
					>
						Grundläggande serverstruktur
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`void main() {
  startServer(port: 8080);
  
  handleRequest('/parking/available', (request) {
    var availableSpots = database.getAvailableSpots();
    return Response.json(availableSpots);
  });
  
  handleRequest('/parking/start', (request) {
    var spotId = request.data['spotId'];
    var vehicleId = request.data['vehicleId'];
    database.startParking(spotId, vehicleId);
    return Response.ok('Parkering påbörjad');
  });
}`
							}}
						>
							Exempel på serverstruktur (pseudo-kod)
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code.update``
						}}
					>
						Nyckelkoncept
					</li>
					<ul>
						<li class="fragment">Routing: Dirigera förfrågningar till rätt handler (funktion?)</li>
						<li class="fragment">Request/Response: Struktur för klient-server-kommunikation</li>
						<li class="fragment">JSON: Vanligt format för datautbyte</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code.update`// Asynkron hantering av förfrågan
Future<void> handleParkingRequest(Request request) async {
  var spotId = request.data['spotId'];
  var vehicleId = request.data['vehicleId'];
  
  // Asynkron databasoperation
  await database.startParking(spotId, vehicleId);
  
  // Servern kan hantera andra förfrågningar medan den väntar
  return Response.ok('Parkering påbörjad');
}`
							}}
						>
							Asynkron programmering
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

	<Slide>
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">
				Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa koncept!
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
