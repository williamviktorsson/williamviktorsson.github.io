import{i as H,f as r,t as s,j as d,k as e,g as u}from"../chunks/disclose-version.BmIQt7z6.js";import{s as m,B as Y,z as q,f as fe}from"../chunks/runtime.Bix74eL6.js";import{e as h}from"../chunks/render.DlfULs-I.js";import{b as X}from"../chunks/this.wyHJEu0o.js";import{C as W}from"../chunks/code.seIn7Zd2.js";import{P as ge,S as f,T as g,C as v}from"../chunks/content.DTFQcm-x.js";import{F as ve}from"../chunks/front.DnDuSa6w.js";import{S as ee}from"../chunks/split.B0OcPuxR.js";var pe=s('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li> <li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li> <ul><li class="fragment">Inte den som var planerad, men den nya jag valt är väldigt lik!</li></ul> <li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li></ol>'),_e=s("<!> <!>",5),he=s('<ol><li class="fragment">Avancerade Dart-koncept (mixins, extension methods, extension types, patterns, ...)</li> <li class="fragment">Inget som examineras under Dart-kursen som slutar vecka 45.</li> <li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li></ol>'),$e=s("<!> <!>",5),be=s('<div class="mt-60 text-center">Dra fram en whiteboard igen! Vad ändras denna vecka?</div>'),ye=s("<!> <!>",5),ke=s('<ul><li class="fragment">Du har uppdaterat dina repositories till att vara async</li> <li class="fragment">Du gör await på alla async-funktioner och funktioner som kör async-funktioner.</li> <li class="fragment">För att möta denna gränsyta har du också lagt till int id i alla modellklasser</li> <li class="fragment">Du har handlers på din server som motsvarar alla operationer som systemet ska stödja</li> <li class="fragment">Ditt CLI fungerar som förväntat.</li></ul> <div><div class="enter"><!></div></div>',1),je=s("<!> <!>",5),we=s('<div class="mt-60 text-center">Orientera lite i dagens kodexempel som finns på GitHub.</div>'),xe=s("<!> <!>",5),Pe=s(`<ol><li class="fragment">Tre dart-projekt.</li> <ul><li class="fragment">Ett nytt som jag kallar shared där jag samlar koden som både CLI och server nyttjar.</li> <li class="fragment">Skapat med detta kommando:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Har kod för models och mitt repository interface som både CLI och server
						nyttjar/implementerar</li> <li class="fragment">Inget ni behöver fixa men jag blev less efter ett tag på att ha duplicerad kod :-)</li></ul> <li class="fragment">Jag har struntat i abstrakta generiska klasser och bytt till interface</li> <ul><li class="fragment">För att undvika förvirring.</li> <li class="fragment">Det blir mer läsbar kod om alla Repositories implementerar sin egen logik.</li> <li class="fragment">Däremot mer repetition...</li></ul></ol>`),Fe=s("<!> <!>",5),Se=s('<ol><li class="fragment">Servern består uteslutande av två saker:</li> <ul><li class="fragment">Handlers för HTTP request för olika routes</li> <li class="fragment">Implementationen av de repositories som servern använder för lokal datalagring.</li></ul> <li class="fragment">Klienten (CLI) består av fyra saker:</li> <ul><li class="fragment">Kod för att visa och navigera mellan menyer</li> <li class="fragment">Kod för att utföra de operationer som presenteras som val i menyerna.</li> <ul><li class="fragment">Läser och hanterar input från användaren.</li></ul> <li class="fragment">Lite utils för att validera input</li> <li class="fragment">Implementationen av de repositories som klienten använder för kommunikation med servern.</li></ul></ol>'),Le=s("<!> <!>",5),Te=s('<ul><li class="fragment">Vad är ett Repository?</li> <ul><li class="fragment">En abstraktion för datalagring som döljer implementationsdetaljer</li> <li class="fragment">Ger ett enhetligt gränssnitt för att hantera data oavsett lagringssätt</li></ul> <li class="fragment">Lokal Fillagring</li> <ul><li class="fragment">Basstruktur för filbaserat repository</li> <li class="fragment">Läsning från fil med felhantering</li> <li class="fragment">Skrivning till fil och operationer</li></ul> <li class="fragment">Praktiskt Exempel</li></ul> <div><div class="enter"><!></div></div>',1),Ie=s("<!> <!>",5),De=s('<ol><li class="fragment">Lägg till objectbox till din server och modelkod:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart pub add objectbox</code></li></ul> <li class="fragment">Lägg till paket för kodgenerering:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart pub add --dev build_runner objectbox_generator:any</code></li></ul> <li class="fragment">Lägg till <code class="svelte-1322xwn">@Entity</code> och <code class="svelte-1322xwn">@Id</code> annotationer till dina modell klasser.</li> <li class="fragment">Generera objectbox kod(som du aldrig kommer behöva röra sedan)</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart run build_runner build</code></li></ul> <li class="fragment">Ladda ned c-biblioteket för objectbox. Detta är kanske det mest tekniska steget :-)</li> <ul><li class="fragment">Navigera till <a href="https://github.com/objectbox/objectbox-c/releases" class="svelte-1322xwn">https://github.com/objectbox/objectbox-c/releases</a> och välj senaste release för din plattform.</li> <ul><li class="fragment">Välj filen som heter objectbox-operativsystem. Alltså inte dem som innehåller sync eller jni</li></ul> <li class="fragment">Unzip och placera innehållet i <code class="svelte-1322xwn">/lib</code> direkt under <code class="svelte-1322xwn">/lib</code> i serverprojektet.</li></ul> <li class="fragment">Byt ut din lokala datalagring mot att kommunicera med en ObjectBox.</li> <ul><li class="fragment">Getting started guiden här med Dart Native som val är bra:</li> <ul><li class="fragment"><a href="https://docs.objectbox.io/getting-started" class="svelte-1322xwn">https://docs.objectbox.io/getting-started</a></li></ul></ul></ol>'),Re=s("<!> <!>",5),He=s(`<ol><li class="fragment">För klasser som har nästlade klasser behöver du göra lite magi eftersom ObjectBox endast
					stödjer lagring av primitiva datatyper</li> <ul><li class="fragment">Du kan använda en getter+setter för att lagra en serializerad version av ditt nästlade
						data.</li></ul> <li class="fragment">Det finns stöd för relationer i ObjectBox som du kan nyttja</li> <ul><li class="fragment">Däremot finns inte det i Firebase Firestore så därför bör vi undvika det</li></ul> <li class="fragment">Det är okej att lagra duplicerat data i denna uppgift</li> <ul><li class="fragment">När samma data förekommer på samma ställe i en databas kallas datat <code class="svelte-1322xwn">denormaliserat</code></li></ul> <li class="fragment">En vanlig lösning på relationer i NoSQL-databaser är att en till kollektion introduceras
					endast för att representera relationerna.</li> <li class="fragment">En annan lösning är att endast id:n till objekt i relation lagras, och därefter får dessa
					objekt hämtas.</li> <li class="fragment">Här är två lämpliga videor för utvecklare med SQL-bakgrund som vill lära sig mer:</li> <ul><li class="fragment"><a href="https://www.youtube.com/watch?v=ran_Ylug7AE&amp;list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&amp;index=2" class="svelte-1322xwn">Converting SQL structures to Firebase structures #2</a></li> <li class="fragment"><a href="https://www.youtube.com/watch?v=haMOUb3KVSo&amp;list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&amp;index=5" class="svelte-1322xwn">How to Structure Your Data #5</a></li></ul></ol>`),Ae=s("<!> <!>",5),Be=s('<div class="mt-60 text-center">Det var allt för idag!</div>'),Je=s("<!> <!>",5),Ce=s('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Ue(te){const ae={year:"numeric",month:"long",day:"numeric"},re=new Date().toLocaleDateString("sv-SE",ae);let j,$,c=fe(!1);var A=H(!0),le=d(A);ge(le,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(se,Ne)=>{var B=Ce(),J=d(B);ve(J,{});var C=e(e(J,!0));f(C,{children:(i,p)=>{var t=_e(),a=d(t);g(a,{title:"Föreläsning 4 - Fortsättning serverprogrammering"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=pe();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var E=e(e(C,!0));f(E,{children:(i,p)=>{var t=$e(),a=d(t);g(a,{title:"Nästa vecka"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=he();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var N=e(e(E,!0));f(N,{children:(i,p)=>{var t=ye(),a=d(t);g(a,{title:"Visualisering"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=be();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var M=e(e(N,!0));f(M,{in:async()=>{m(c,!1),await j.update``},children:(i,p)=>{var t=je(),a=d(t);g(a,{title:"Nödvändiga förutsättningar"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=H(!0),P=d(l);ee(P,{children:(F,D)=>{var b=ke(),y=d(b),k=u(y),w=e(e(k,!0)),x=e(e(w,!0)),L=e(e(x,!0)),T=e(e(y,!0)),S=u(T),I=u(S);X(W(I,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),R=>j=R,()=>j),Y(()=>S.hidden=!q(c)),h("current",k,async()=>{m(c,!0),await j.update`abstract interface class RepositoryInterface<T> {
  Future<T> create(T item);
  Future<List<T>> getAll();
  Future<T?> getById(int id);
  Future<T> update(int id, T item);
  Future<T> delete(int id);
}`},!1),h("current",x,async()=>{m(c,!0),await j.update`abstract interface class RepositoryInterface<T> {
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

}`},!1),h("current",L,async()=>{m(c,!0),await j.update`// Configure example routes.
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
router.delete('/bags/<id>', deleteBagHandler); // update specific bag`},!1),r(F,b)},$$slots:{default:!0}}),r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var K=e(e(M,!0));f(K,{children:(i,p)=>{var t=xe(),a=d(t);g(a,{title:"Referenskod"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=we();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var V=e(e(K,!0));f(V,{children:(i,p)=>{var t=Fe(),a=d(t);g(a,{title:"Vad har jag gjort?!"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=Pe(),P=u(l),F=e(e(P,!0)),D=u(F),b=e(e(D,!0)),y=e(e(b,!0)),k=u(y),w=u(k),x=u(w);x.nodeValue="dart create -t package cli_shared",r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var O=e(e(V,!0));f(O,{children:(i,p)=>{var t=Le(),a=d(t);g(a,{title:"Projektstrukturer?!"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=Se();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var z=e(e(O,!0));f(z,{children:(i,p)=>{var t=Ie(),a=d(t);g(a,{title:"Repository med Lokal Datalagring"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=H(!0),P=d(l);ee(P,{children:(F,D)=>{var b=Te(),y=d(b),k=u(y),w=e(e(k,!0)),x=u(w),L=e(e(w,!0)),T=e(e(L,!0)),S=u(T),I=e(e(S,!0)),R=e(e(I,!0)),de=e(e(T,!0)),ue=e(e(y,!0)),U=u(ue),ce=u(U);X(W(ce,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),me=>$=me,()=>$),Y(()=>U.hidden=!q(c)),h("current",k,async()=>{m(c,!1),await $.update``},!1),h("current",x,async()=>{m(c,!0),await $.update`// In-memory Repository
	abstract class Repository<T> {
		List<T> _items = [];
		
		void add(T item) => _items.add(item);
		List<T> getAll() => _items;
	}`},!1),h("current",L,async()=>{m(c,!1),await $.update``},!1),h("current",S,async()=>{m(c,!0),await $.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		// Konvertering till/från JSON
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	}`},!1),h("current",I,async()=>{m(c,!0),await $.update`abstract class FileRepository<T> {
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
	}`},!1),h("current",R,async()=>{m(c,!0),await $.update`abstract class FileRepository<T> {
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
	}`},!1),h("current",de,async()=>{m(c,!0),await $.update`// Användning
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
	}`},!1),r(F,b)},$$slots:{default:!0}}),r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var G=e(e(z,!0));f(G,{children:(i,p)=>{var t=Re(),a=d(t);g(a,{title:"Kom igång med ObjectBox!"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=De();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var Q=e(e(G,!0));f(Q,{children:(i,p)=>{var t=Ae(),a=d(t);g(a,{title:"Relationer? Begränsningar?"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=He();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var Z=e(e(Q,!0));f(Z,{children:(i,p)=>{var t=Je(),a=d(t);g(a,{title:"Tack för idag!"});var n=e(e(a,!0));v(n,{children:(o,_)=>{var l=Be();r(o,l)},$$slots:{default:!0}}),r(i,t)},$$slots:{default:!0}});var ie=e(e(Z,!0)),ne=u(ie),oe=u(ne);oe.nodeValue=re,r(se,B)},$$slots:{default:!0}}),r(te,A)}export{Ue as component};
