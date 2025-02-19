import{i as A,f as r,t as i,j as d,k as e,g as u}from"../chunks/disclose-version.BmIQt7z6.js";import{s as c,B as Y,z as U,f as ce}from"../chunks/runtime.Bix74eL6.js";import{e as f}from"../chunks/render.DlfULs-I.js";import{b as q}from"../chunks/this.wyHJEu0o.js";import{C as X}from"../chunks/code.seIn7Zd2.js";import{P as fe,S as v,T as g,C as p}from"../chunks/content.DTFQcm-x.js";import{F as ve}from"../chunks/front.DnDuSa6w.js";import{S as W}from"../chunks/split.B0OcPuxR.js";var ge=i('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li> <li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li> <ul><li class="fragment">Inte den som var planerad, men den nya jag valt är väldigt lik!</li></ul> <li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li></ol>'),pe=i("<!> <!>",5),_e=i('<ol><li class="fragment">Avancerade Dart-koncept (mixins, extension methods, extension types, patterns, ...)</li> <li class="fragment">Inget som examineras under Dart-kursen som slutar vecka 45.</li> <li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li></ol>'),$e=i("<!> <!>",5),he=i('<div class="mt-60 text-center">Dra fram en whiteboard igen! Vad ändras denna vecka?</div>'),ye=i("<!> <!>",5),ke=i('<ul><li class="fragment">Du har uppdaterat dina repositories till att vara async</li> <li class="fragment">Du gör await på alla async-funktioner och funktioner som kör async-funktioner.</li> <li class="fragment">För att möta denna gränsyta har du också lagt till int id i alla modellklasser</li> <li class="fragment">Du har handlers på din server som motsvarar alla operationer som systemet ska stödja</li> <li class="fragment">Ditt CLI fungerar som förväntat.</li></ul> <div><div class="enter"><!></div></div>',1),Pe=i("<!> <!>",5),we=i('<div class="mt-60 text-center">Orientera lite i dagens kodexempel som finns på GitHub.</div>'),be=i("<!> <!>",5),Se=i(`<ol><li class="fragment">Tre dart-projekt.</li> <ul><li class="fragment">Ett nytt som jag kallar shared där jag samlar koden som både CLI och server nyttjar.</li> <li class="fragment">Skapat med detta kommando:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Har kod för models och mitt repository interface som både CLI och server
						nyttjar/implementerar</li> <li class="fragment">Inget ni behöver fixa men jag blev less efter ett tag på att ha duplicerad kod :-)</li></ul></ol>`),je=i("<!> <!>",5),Fe=i('<ol><li class="fragment">Servern består uteslutande av två saker:</li> <ul><li class="fragment">Handlers för HTTP request för olika routes</li> <li class="fragment">Implementationen av de repositories som servern använder för lokal datalagring.</li></ul> <li class="fragment">Klienten (CLI) består av fyra saker:</li> <ul><li class="fragment">Kod för att visa och navigera mellan menyer</li> <li class="fragment">Kod för att utföra de operationer som presenteras som val i menyerna.</li> <ul><li class="fragment">Läser och hanterar input från användaren.</li></ul> <li class="fragment">Lite utils för att validera input</li> <li class="fragment">Implementationen av de repositories som klienten använder för kommunikation med servern.</li></ul></ol>'),Te=i("<!> <!>",5),Le=i('<ul><li class="fragment">Vad är ett Repository?</li> <ul><li class="fragment">En abstraktion för datalagring som döljer implementationsdetaljer</li> <li class="fragment">Ger ett enhetligt gränssnitt för att hantera data oavsett lagringssätt</li></ul> <li class="fragment">Lokal Fillagring</li> <ul><li class="fragment">Basstruktur för filbaserat repository</li> <li class="fragment">Läsning från fil med felhantering</li> <li class="fragment">Skrivning till fil och operationer</li></ul> <li class="fragment">Praktiskt Exempel</li></ul> <div><div class="enter"><!></div></div>',1),xe=i("<!> <!>",5),Ie=i(`<ol><li class="fragment">Det är okej att lagra duplicerat data i denna uppgift</li> <ul><li class="fragment">När samma data förekommer på samma ställe i en databas kallas datat <code class="svelte-1322xwn">denormaliserat</code></li></ul> <li class="fragment">En vanlig lösning på relationer i NoSQL-databaser är att en till kollektion introduceras
					endast för att representera relationerna.</li> <li class="fragment">En annan lösning är att endast id:n till objekt i relation lagras, och därefter får dessa
					objekt hämtas.</li> <li class="fragment">Här är två lämpliga videor för utvecklare med SQL-bakgrund som vill lära sig mer:</li> <ul><li class="fragment"><a href="https://www.youtube.com/watch?v=ran_Ylug7AE&amp;list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&amp;index=2" class="svelte-1322xwn">Converting SQL structures to Firebase structures #2</a></li> <li class="fragment"><a href="https://www.youtube.com/watch?v=haMOUb3KVSo&amp;list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&amp;index=5" class="svelte-1322xwn">How to Structure Your Data #5</a></li></ul></ol>`),Re=i("<!> <!>",5),He=i('<div class="mt-60 text-center">Det var allt för idag!</div>'),Ae=i("<!> <!>",5),De=i('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function ze(ee){const te={year:"numeric",month:"long",day:"numeric"},ae=new Date().toLocaleDateString("sv-SE",te);let w,_,m=ce(!1);var D=A(!0),re=d(D);fe(re,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(se,Ce)=>{var J=De(),C=d(J);ve(C,{});var E=e(e(C,!0));v(E,{children:(l,$)=>{var t=pe(),a=d(t);g(a,{title:"Föreläsning 4 - Fortsättning serverprogrammering"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=ge();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var M=e(e(E,!0));v(M,{children:(l,$)=>{var t=$e(),a=d(t);g(a,{title:"Nästa vecka"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=_e();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var B=e(e(M,!0));v(B,{children:(l,$)=>{var t=ye(),a=d(t);g(a,{title:"Visualisering"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=he();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var N=e(e(B,!0));v(N,{in:async()=>{c(m,!1),await w.update``},children:(l,$)=>{var t=Pe(),a=d(t);g(a,{title:"Nödvändiga förutsättningar"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=A(!0),j=d(s);W(j,{children:(F,R)=>{var y=ke(),k=d(y),P=u(k),b=e(e(P,!0)),S=e(e(b,!0)),L=e(e(S,!0)),x=e(e(k,!0)),T=u(x),I=u(T);q(X(I,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),H=>w=H,()=>w),Y(()=>T.hidden=!U(m)),f("current",P,async()=>{c(m,!0),await w.update`abstract interface class RepositoryInterface<T> {
  Future<T> create(T item);
  Future<List<T>> getAll();
  Future<T?> getById(int id);
  Future<T> update(int id, T item);
  Future<T> delete(int id);
}`},!1),f("current",S,async()=>{c(m,!0),await w.update`abstract interface class RepositoryInterface<T> {
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

}`},!1),f("current",L,async()=>{c(m,!0),await w.update`// Configure example routes.
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
router.delete('/bags/<id>', deleteBagHandler); // update specific bag`},!1),r(F,y)},$$slots:{default:!0}}),r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var K=e(e(N,!0));v(K,{children:(l,$)=>{var t=be(),a=d(t);g(a,{title:"Referenskod"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=we();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var V=e(e(K,!0));v(V,{children:(l,$)=>{var t=je(),a=d(t);g(a,{title:"Vad har jag gjort?!"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=Se(),j=u(s),F=e(e(j,!0)),R=u(F),y=e(e(R,!0)),k=e(e(y,!0)),P=u(k),b=u(P),S=u(b);S.nodeValue="dart create -t package cli_shared",r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var Q=e(e(V,!0));v(Q,{children:(l,$)=>{var t=Te(),a=d(t);g(a,{title:"Projektstrukturer?!"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=Fe();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var Z=e(e(Q,!0));v(Z,{children:(l,$)=>{var t=xe(),a=d(t);g(a,{title:"Repository med Lokal Datalagring"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=A(!0),j=d(s);W(j,{children:(F,R)=>{var y=Le(),k=d(y),P=u(k),b=e(e(P,!0)),S=u(b),L=e(e(b,!0)),x=e(e(L,!0)),T=u(x),I=e(e(T,!0)),H=e(e(I,!0)),oe=e(e(x,!0)),de=e(e(k,!0)),O=u(de),ue=u(O);q(X(ue,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),me=>_=me,()=>_),Y(()=>O.hidden=!U(m)),f("current",P,async()=>{c(m,!1),await _.update``},!1),f("current",S,async()=>{c(m,!0),await _.update`// In-memory Repository
	abstract class Repository<T> {
		List<T> _items = [];
		
		void add(T item) => _items.add(item);
		List<T> getAll() => _items;
	}`},!1),f("current",L,async()=>{c(m,!1),await _.update``},!1),f("current",T,async()=>{c(m,!0),await _.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		// Konvertering till/från JSON
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	}`},!1),f("current",I,async()=>{c(m,!0),await _.update`abstract class FileRepository<T> {
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
	}`},!1),f("current",H,async()=>{c(m,!0),await _.update`abstract class FileRepository<T> {
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
	}`},!1),f("current",oe,async()=>{c(m,!0),await _.update`// Användning
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
	}`},!1),r(F,y)},$$slots:{default:!0}}),r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var z=e(e(Z,!0));v(z,{children:(l,$)=>{var t=Re(),a=d(t);g(a,{title:"Relationer? Begränsningar?"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=Ie();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var G=e(e(z,!0));v(G,{children:(l,$)=>{var t=Ae(),a=d(t);g(a,{title:"Tack för idag!"});var n=e(e(a,!0));p(n,{children:(o,h)=>{var s=He();r(o,s)},$$slots:{default:!0}}),r(l,t)},$$slots:{default:!0}});var ie=e(e(G,!0)),le=u(ie),ne=u(le);ne.nodeValue=ae,r(se,J)},$$slots:{default:!0}}),r(ee,D)}export{ze as component};
