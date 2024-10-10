import{f as E,g as s,t as d,i as p,j as e,k as o}from"../chunks/disclose-version.BAOoFInd.js";import{s as l,B as H,z as O,f as Se}from"../chunks/runtime.Bix74eL6.js";import{e as n}from"../chunks/render.DvSWKrhB.js";import{b as U}from"../chunks/this.wyHJEu0o.js";import{S as M,C as J}from"../chunks/split.DmvM2kU1.js";import{P as xe,S as f,T as v,C as k}from"../chunks/content.Cka6NWLM.js";import{F as Ae}from"../chunks/front.DzTqcsJY.js";var je=d('<ol><li class="fragment">Kort repetition</li> <li class="fragment">Kursen närmsta veckorna</li> <li class="fragment">Git</li> <li class="fragment">OOP</li> <li class="fragment">Asynkron programmering</li> <li class="fragment">Inspelning - inlämning - OBS</li> <li class="fragment">Serverprogrammering?</li></ol>'),Fe=d("<!> <!>",5),De=d('<ol><li class="fragment">Personal på kursen - vem är er lärare?</li> <li class="fragment">Formaliteter: examinationer, kursupplägg, FSR</li> <li class="fragment">Dart & Flutter</li> <ul><li class="fragment">Hur skiljer de sig från varandra?</li> <li class="fragment">Varför finns de?</li> <li class="fragment">Vad är speciellt med språket/ramverket?</li></ul> <li class="fragment">Kursplanering - konkret innehåll</li> <li class="fragment">Examinerande uppgifter</li> <ul><li class="fragment">Vad ni förväntas producera för att nå ett betyg</li></ul> <li class="fragment">Kodexempel</li> <ul><li class="fragment">Översikt för att komma igång: klasser, funktioner, variabler & lite blandat</li></ul> <li class="fragment">Återbesök denna på <a style="color: white;" href="https://williamviktorsson.github.io/" class="svelte-1322xwn">https://williamviktorsson.github.io/</a> om ni vill repetera!</li></ol>'),Re=d("<!> <!>",5),Ie=d('<ol><li class="fragment">Denna vecka</li> <ul><li class="fragment">Bli klar med första examinerande uppgiften</li> <li class="fragment">Fokus på klasser, funktioner, iterering - grundläggande syntax i Dart</li></ul> <li class="fragment">Nästa vecka</li> <ul><li class="fragment">Påbörja simpel serverprogrammering</li> <li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li> <li class="fragment">Lite översiktligt om routing, json & http-requests</li> <li class="fragment"><strong>Repository-klasserna ska utföra sina operationer mot denna nya server</strong></li></ul> <li class="fragment">Veckan efter</li> <ul><li class="fragment">Utöka server till att erbjuda persistent datalagring</li> <li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li> <li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li></ul></ol>'),Ne=d("<!> <!>",5),Le=d('<ol><li class="fragment">Ladda ned Git från <a href="https://git-scm.com/" class="svelte-1322xwn">https://git-scm.com/</a></li> <li class="fragment">Skapa ett GitHub konto på <a href="https://github.com/" class="svelte-1322xwn">GitHub</a></li> <ul><li class="fragment">Existerande konto eller t.ex. GitLab konto går också bra</li></ul> <li class="fragment">Öppna en terminal.</li> <ul><li class="fragment">För Windows-uppskattare: WSL eller Git Bash.</li></ul> <li class="fragment">Generera en SSH-nyckel på din dator (<a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" class="svelte-1322xwn">guide</a>)</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">ssh-keygen -t ed25519 -C "your_email@example.com"</code></li> <ul><li class="fragment">ENTER, ENTER, ENTER (acceptera defaults)</li></ul></ul> <li class="fragment">Skriv ut din publika nyckel så du kan lägga till på GitHub</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">cat ~/.ssh/id_ed25519.pub</code></li> <ul><li class="fragment">kopiera (ctrl+c)</li></ul></ul> <li class="fragment">Lägg till nyckeln på GitHub under <a href="https://github.com/settings/keys" class="svelte-1322xwn">https://github.com/settings/keys</a></li></ol>'),Te=d("<!> <!>",5),Ve=d('<ol><li class="fragment">Skapa ett <a href="https://github.com/williamviktorsson/example" class="svelte-1322xwn">Nytt projekt på GitHub</a></li> <li class="fragment">Under Quick setup: Välj <code class="svelte-1322xwn">SSH</code></li> <li class="fragment">Kopiera koden från <code class="svelte-1322xwn">...or push an existing repository from the command line</code></li> <li class="fragment">Öppna en terminal i ditt projekt.</li> <ul><li class="fragment">Förslag 1: Navigera till projektet med <code class="svelte-1322xwn">cd</code></li> <li class="fragment">Förslag 2: Öppna i VSCode</li></ul> <li class="fragment">Initiera ditt git-projekt och lägg till alla filer</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git init</code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git add .</code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git commit -m "first commit"</code></li></ul> <li class="fragment">Klistra in koden du kopierat:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git remote add origin git@github.com:williamviktorsson/example.git</code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git branch -M main</code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">git push -u origin main</code></li></ul> <li class="fragment">Nu är du redo att börja koda och versionshantera dina ändringar!</li></ol>'),qe=d("<!> <!>",5),Ge=d('<ol><li class="fragment">Gör ändringar i dina filer</li> <li class="fragment">Förbered din nästa "commit" med att lägga till ändringarna:</li> <ul><li class="fragment"><code class="svelte-1322xwn">git add &lt;filnamn&gt;</code> för att lägga till en specifik fil, eller:</li> <li class="fragment"><code class="svelte-1322xwn">git add .</code> (för alla ändringar)</li></ul> <li class="fragment">Commita ändringar: <code class="svelte-1322xwn">git commit -m "Ditt commit-meddelande"</code></li> <li class="fragment">Pusha ändringar till remote (GitHub/GitLab): <code class="svelte-1322xwn">git push</code></li> <li class="fragment">Innan du börjar nytt arbete, hämta senaste ändringarna från remote: <code class="svelte-1322xwn">git pull</code></li> <li class="fragment">Kontrollera status när som helst: <code class="svelte-1322xwn">git status</code></li> <li class="fragment">Grundläggande branching:</li> <ol style="list-style: lower-latin;"><li class="fragment">Skapa ny branch: <code class="svelte-1322xwn">git branch &lt;namn&gt;</code></li> <li class="fragment">Byt till ny branch: <code class="svelte-1322xwn">git checkout &lt;namn&gt;</code></li> <li class="fragment">Sammanfoga (merge) branch till main:</li> <ul style="list-style"><li class="fragment"><code class="svelte-1322xwn">git checkout main</code></li> <li class="fragment"><code class="svelte-1322xwn">git merge &lt;namn&gt;</code></li></ul></ol></ol>'),Ke=d("<!> <!>",5),Be=d('<ul><li class="fragment">Klasser och Objekt</li> <ol><li class="fragment">Klasser definerar datastruktur och beteende</li> <li class="fragment">Arv möjliggör kodåteranvändning</li></ol> <li class="fragment">Inkapsling och Access Modifiers</li> <ol><li class="fragment">Privata variabler och publika metoder</li></ol> <li class="fragment">Generics & Abstrakta klasser</li> <ol><li class="fragment">Generics för flexibel och typesäker kod</li> <li class="fragment">Abstrakt klass för att definiera gemensamma beteenden eller påtvinga implementationer</li> <ul><li class="fragment">utan att tillåta instansiering</li></ul></ol></ul> <div><div class="enter"><!></div></div>',1),Ee=d("<!> <!>",5),Ce=d('<ul><li class="fragment">Polymorfism</li> <ol><li class="fragment">Subklasser kan användas som om de vore av föräldraklassens typ</li> <li class="fragment">Samma kod kan leda till olika beteenden beroende på subklassers implementation</li></ol> <li class="fragment">Singleton Pattern</li> <ol><li class="fragment">Säkerställer en enda instans av en klass</li> <li class="fragment">Går också att lösa med factory konstruktor</li> <ul><li class="fragment">En konstruktor som inte måste returnera en ny instans av sin klass.</li> <li class="fragment">Kan returnera en singleton eller t.ex. en subklass.</li></ul></ol></ul> <div><div class="enter"><!></div></div>',1),He=d("<!> <!>",5),Oe=d(`<ul><li class="fragment">Varför behövs asynkron programmering?</li> <ol><li class="fragment">Förhindrar blockering av användaregränssnitt</li> <ul><li class="fragment">Tillåter processorn att fortsätta med andra uppdrag medans asynkrona uppdrag
								bearbetas i bakgrunden</li></ul> <li class="fragment">Hantera nätverksförfrågningar (HTTP)</li> <li class="fragment">Utföra databasoperationer</li></ol> <li class="fragment">Grundläggande koncept</li> <ol><li class="fragment">Future, async och await</li> <li class="fragment">Streams för kontinuerliga uppdateringar</li></ol> <li class="fragment">Felhantering</li> <ol><li class="fragment">Try-catch med async-await</li></ol></ul> <div><div class="enter"><!></div></div>`,1),Ue=d("<!> <!>",5),Me=d(`<ol><li class="fragment">Förberedelser</li> <ul><li class="fragment">Ladda ner och installera OBS Studio från <a href="https://obsproject.com/" class="svelte-1322xwn">officiella hemsidan</a></li> <li class="fragment">Starta OBS Studio och kör eventuell automatisk konfiguration</li></ul> <li class="fragment">Konfigurera scenen</li> <ul><li class="fragment">Klicka på '+' under 'Sources' och välj lämpliga källor (t.ex. 'Display Capture' eller
						'Window Capture')</li> <li class="fragment">Justera källornas storlek och position i förhandsgranskningsfönstret (högerklicka +
						'Resize output')</li></ul> <li class="fragment">Ljudinställningar</li> <ul><li class="fragment">Kontrollera att rätt mikrofon är vald under 'Settings/Audio/Monitoring Device'</li> <li class="fragment">Justera ljudnivåer för mikrofon och datorljud i 'Audio Mixer'</li></ul> <li class="fragment">Inspelningsinställningar</li> <ul><li class="fragment">Gå till Settings/Output och välj 'Recording Path' och 'Recording Format'</li> <li class="fragment">Mappen väljer du själv, för format föreslår jag Fragmented MP4</li></ul> <li class="fragment">Starta inspelningen</li> <ul><li class="fragment">Klicka på 'Start Recording' i huvudmenyn</li> <li class="fragment">Utför din presentation eller demonstration</li> <li class="fragment">Klicka på 'Stop Recording' när du är klar</li></ul> <li class="fragment">Efter inspelningen</li> <ul><li class="fragment">Hitta den inspelade filen i den konfigurerade inspelningsmappen</li></ul></ol>`),Je=d("<!> <!>",5),We=d('<ul><li class="fragment">Vad är klient-server-modellen?</li> <ul><li class="fragment">Klient: Enheten som begär data eller tjänster (t.ex. webbläsare, mobilapp)</li> <li class="fragment">Server: Dator som tillhandahåller data eller tjänster till klienter</li> <ul><li class="fragment">Svarar på requests från klienter</li> <li class="fragment">Lagrar och hanterar data</li></ul></ul> <li class="fragment">Serveruppgifter i parkeringsappen</li> <ul><li class="fragment">Hantera databasoperationer (spara/hämta parkeringar)</li> <li class="fragment">Bearbeta klientförfrågningar (t.ex. hitta ledig plats)</li> <li class="fragment">Upprätthålla applikationslogik (t.ex. beräkna parkeringsavgift)</li></ul> <li class="fragment">Grundläggande serverstruktur</li> <ol><li class="fragment">Exempel på serverstruktur (pseudo-kod)</li></ol> <li class="fragment">Nyckelkoncept</li> <ul><li class="fragment">Routing: Dirigera förfrågningar till rätt handler (funktion?)</li> <li class="fragment">Request/Response: Struktur för klient-server-kommunikation</li> <li class="fragment">JSON: Vanligt format för datautbyte</li> <li class="fragment">Asynkron programmering</li></ul></ul> <div><div class="enter"><!></div></div>',1),ze=d("<!> <!>",5),Qe=d(`<div class="mt-60 text-center">Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!</div>`),Xe=d("<!> <!>",5),Ye=d('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function oa(pe){const me={year:"numeric",month:"long",day:"numeric"},fe=new Date().toLocaleDateString("sv-SE",me);let m,S,I,h,a=Se(!1);var X=E(!0),ve=p(X);xe(ve,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ke,ea)=>{var Y=Ye(),Z=p(Y);Ae(Z,{});var ee=e(e(Z,!0));f(ee,{children:(c,y)=>{var t=Fe(),r=p(t);v(r,{title:"Föreläsning 2 - blandat nyttigt för lyckat kursgenomförande"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=je();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var ae=e(e(ee,!0));f(ae,{children:(c,y)=>{var t=Re(),r=p(t);v(r,{title:"Förra veckans innehåll"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=De();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var te=e(e(ae,!0));f(te,{children:(c,y)=>{var t=Ne(),r=p(t);v(r,{title:"Kursen närmsta veckorna"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Ie();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var re=e(e(te,!0));f(re,{children:(c,y)=>{var t=Te(),r=p(t);v(r,{title:"Git - Förberedelser"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Le();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var le=e(e(re,!0));f(le,{children:(c,y)=>{var t=qe(),r=p(t);v(r,{title:"Git - Nytt projekt"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Ve();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var se=e(e(le,!0));f(se,{children:(c,y)=>{var t=Ke(),r=p(t);v(r,{title:"Git - Grundläggande Arbetsflöde"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Ge();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var ne=e(e(se,!0));f(ne,{in:async()=>{l(a,!1),await S.update``},children:(c,y)=>{var t=Ee(),r=p(t);v(r,{title:"Objektorienterad Programmering i Dart"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=E(!0),V=p(i);M(V,{children:(q,W)=>{var b=Be(),P=p(b),$=o(P),w=e(e($,!0)),x=o(w),N=e(e(x,!0)),F=e(e(w,!0)),A=e(e(F,!0)),L=o(A),j=e(e(A,!0)),D=e(e(j,!0)),T=o(D),R=e(e(P,!0)),G=o(R),K=o(G);U(J(K,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),B=>S=B,()=>S),H(()=>G.hidden=!O(a)),n("current",$,async()=>{l(a,!1),await S.update``},!1),n("current",x,async()=>{l(a,!0),await S.update`class Person {
	String name;
	Person({required this.name});
}

// Skapa ett objekt
Person alice = Person(name: "Alice");`},!1),n("current",N,async()=>{l(a,!0),await S.update`class Person {
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
}`},!1),n("current",F,async()=>{l(a,!1),await S.update``},!1),n("current",L,async()=>{l(a,!0),await S.update`class BankAccount {
	String _accountNumber; // Privat variabel
	double _balance = 0;

	BankAccount(this._accountNumber);

	void deposit(double amount) {
		_balance += amount;
	}

	double get balance => _balance; // Publik getter
}`},!1),n("current",j,async()=>{l(a,!1),await S.update``},!1),n("current",T,async()=>{l(a,!0),await S.update`// Abstrakt klass kan ha metodimplementationer men kan inte instansieras.
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
`},!1),s(q,b)},$$slots:{default:!0}}),s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var ie=e(e(ne,!0));f(ie,{in:async()=>{l(a,!1),await I.update``},children:(c,y)=>{var t=He(),r=p(t);v(r,{title:"OOP i Dart - fortsättning"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=E(!0),V=p(i);M(V,{children:(q,W)=>{var b=Ce(),P=p(b),$=o(P),w=e(e($,!0)),x=o(w),N=e(e(w,!0)),F=e(e(N,!0)),A=o(F),L=e(e(A,!0)),j=e(e(P,!0)),D=o(j),T=o(D);U(J(T,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),R=>I=R,()=>I),H(()=>D.hidden=!O(a)),n("current",$,async()=>{l(a,!1),await I.update``},!1),n("current",x,async()=>{l(a,!0),await I.update`void printArea(Shape shape) {
	print("Area: " + shape.getArea());
}

// Användning
printArea(Circle(5));
printArea(Square(4));`},!1),n("current",N,async()=>{l(a,!1),await I.update``},!1),n("current",A,async()=>{l(a,!0),await I.update`class PersonRepository extends Repository<Person> {
	static final PersonRepository _instance = PersonRepository._internal();

	// privat konstruktor förhindrar att fler objekt av klassen skapas
	PersonRepository._internal();

	static PersonRepository get instance => _instance;
}

// Användning
PersonRepository.instance.add(Person(name: "Bob"));`},!1),n("current",L,async()=>{l(a,!0),await I.update`class PersonRepository extends Repository<Person> {
	static final PersonRepository _instance = PersonRepository._internal();

	// privat konstruktor förhindrar att fler objekt av klassen skapas
	PersonRepository._internal();

	factory PersonRepository() => _instance;
}

// Användning
PersonRepository().add(Person(name: "Bob"));`},!1),s(q,b)},$$slots:{default:!0}}),s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var oe=e(e(ie,!0));f(oe,{children:(c,y)=>{var t=Ue(),r=p(t);v(r,{title:"Asynkron Programmering i Dart"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=E(!0),V=p(i);M(V,{children:(q,W)=>{var b=Oe(),P=p(b),$=o(P),w=e(e($,!0)),x=o(w),N=e(e(x,!0)),F=e(e(N,!0)),A=e(e(F,!0)),L=e(e(w,!0)),j=e(e(L,!0)),D=o(j),T=e(e(D,!0)),R=e(e(j,!0)),G=e(e(R,!0)),K=o(G),B=e(e(P,!0)),C=o(B),z=o(C);U(J(z,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),Q=>h=Q,()=>h),H(()=>C.hidden=!O(a)),n("current",$,async()=>{l(a,!1),await h.update``},!1),n("current",x,async()=>{l(a,!0),await h.update`// Synkron kod (kan blockera UI)
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
}`},!1),n("current",F,async()=>{l(a,!0),await h.update`// HTTP-förfrågan för att hämta parkeringsplatser
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
}`},!1),n("current",A,async()=>{l(a,!0),await h.update`// Databasoperation för att spara en parkering
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
}`},!1),n("current",L,async()=>{l(a,!1),await h.update``},!1),n("current",D,async()=>{l(a,!0),await h.update`Future<ParkingSpot> findAvailableSpot() async {
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
}`},!1),n("current",T,async()=>{l(a,!0),await h.update`Future<List<Vehicle>> fetchParkedVehicles() async {
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
}`},!1),n("current",R,async()=>{l(a,!1),await h.update``},!1),n("current",K,async()=>{l(a,!0),await h.update`Future<void> endParking(String registrationNumber) async {
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
}`},!1),s(q,b)},$$slots:{default:!0}}),s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var de=e(e(oe,!0));f(de,{children:(c,y)=>{var t=Je(),r=p(t);v(r,{title:"Grundläggande inspelning i OBS Studio"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Me();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var ce=e(e(de,!0));f(ce,{in:async()=>{l(a,!1),await m.update``},children:(c,y)=>{var t=ze(),r=p(t);v(r,{title:"Introduktion till Serverprogrammering"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=E(!0),V=p(i);M(V,{children:(q,W)=>{var b=We(),P=p(b),$=o(P),w=e(e($,!0)),x=o(w),N=e(e(x,!0)),F=e(e(N,!0)),A=o(F),L=e(e(A,!0)),j=e(e(w,!0)),D=e(e(j,!0)),T=e(e(D,!0)),R=e(e(T,!0)),G=o(R),K=e(e(R,!0)),B=e(e(K,!0)),C=o(B),z=e(e(C,!0)),Q=e(e(z,!0)),be=e(e(Q,!0)),Pe=e(e(P,!0)),ge=o(Pe),$e=o(ge);U(J($e,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),we=>m=we,()=>m),H(()=>ge.hidden=!O(a)),n("current",$,async()=>{l(a,!1),await m.update``},!1),n("current",x,async()=>{l(a,!0),await m.update`// Klient (mobilapp)
Future<void> getAndDisplayAvailableSpots() async {

	final response = await http.get('https://parkering-api.se/spots/available');
	final List<dynamic> data = json.decode(response.body);
	final spots = data.map((json) => ParkingSpot.fromJson(json)).toList();
	displaySpots(spots);

}

`},!1),n("current",A,async()=>{l(a,!0),await m.update`// Klient (mobilapp)
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
});`},!1),n("current",L,async()=>{l(a,!0),await m.update`// Klient (mobilapp)
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
}`},!1),n("current",j,async()=>{l(a,!1),await m.update``},!1),n("current",T,async()=>{l(a,!1),await m.update``},!1),n("current",G,async()=>{l(a,!0),await m.update`void main() {
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
}`},!1),n("current",K,async()=>{l(a,!1),await m.update``},!1),n("current",be,async()=>{l(a,!0),await m.update`// Asynkron hantering av förfrågan
Future<void> handleParkingRequest(Request request) async {
	var spotId = request.data['spotId'];
	var vehicleId = request.data['vehicleId'];

	// Asynkron databasoperation
	await database.startParking(spotId, vehicleId);

	// Servern kan hantera andra förfrågningar medan den väntar
	return Response.ok('Parkering påbörjad');
}`},!1),s(q,b)},$$slots:{default:!0}}),s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var ue=e(e(ce,!0));f(ue,{children:(c,y)=>{var t=Xe(),r=p(t);v(r,{title:"Tack för idag!"});var u=e(e(r,!0));k(u,{children:(g,_)=>{var i=Qe();s(g,i)},$$slots:{default:!0}}),s(c,t)},$$slots:{default:!0}});var he=e(e(ue,!0)),ye=o(he),_e=o(ye);_e.nodeValue=fe,s(ke,Y)},$$slots:{default:!0}}),s(pe,X)}export{oa as component};
