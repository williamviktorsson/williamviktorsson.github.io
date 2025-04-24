import{i as D,f as r,t as s,j as d,k as t,g as c}from"../chunks/disclose-version.BmIQt7z6.js";import{s as m,B as U,z as Y,f as ut}from"../chunks/runtime.Bix74eL6.js";import{e as f}from"../chunks/render.DlfULs-I.js";import{b as G}from"../chunks/this.wyHJEu0o.js";import{C as O}from"../chunks/code.seIn7Zd2.js";import{P as mt,S as p,T as v,C as _}from"../chunks/content.DTFQcm-x.js";import{F as ct}from"../chunks/front.DnDuSa6w.js";import{S as Q}from"../chunks/split.B0OcPuxR.js";var ft=s('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li></ol>'),gt=s("<!> <!>",5),pt=s('<ol><li class="fragment">Avancerade Dart-koncept (mixins, extension methods, extension types, patterns, ...)</li> <li class="fragment">Inget som examineras under Dart-kursen som slutar vecka 45.</li> <li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li></ol>'),vt=s("<!> <!>",5),_t=s('<div class="mt-60 text-center">Dra fram en whiteboard igen! Vad ändras denna vecka?</div>'),$t=s("<!> <!>",5),ht=s('<ul><li class="fragment">Du har uppdaterat dina repositories till att vara async</li> <li class="fragment">Du gör await på alla async-funktioner och funktioner som kör async-funktioner.</li> <li class="fragment">För att möta denna gränsyta har du också lagt till int id i alla modellklasser</li> <li class="fragment">Du har handlers på din server som motsvarar alla operationer som systemet ska stödja</li> <li class="fragment">Ditt CLI fungerar som förväntat.</li></ul> <div><div class="enter"><!></div></div>',1),yt=s("<!> <!>",5),kt=s('<ul><li class="fragment">Vad är ett Repository?</li> <ul><li class="fragment">En abstraktion för datalagring som döljer implementationsdetaljer</li> <li class="fragment">Ger ett enhetligt gränssnitt för att hantera data oavsett lagringssätt</li></ul> <li class="fragment">Lokal Fillagring</li> <ul><li class="fragment">Basstruktur för filbaserat repository</li> <li class="fragment">Läsning från fil med felhantering</li> <li class="fragment">Skrivning till fil och operationer</li></ul> <li class="fragment">Praktiskt Exempel</li></ul> <div><div class="enter"><!></div></div>',1),St=s("<!> <!>",5),wt=s(`<ol><li class="fragment">Det är okej att lagra duplicerat data i denna uppgift</li> <li class="fragment">En annan lösning är att endast id:n till objekt i relation lagras, och därefter får dessa
					objekt hämtas.</li> <li class="fragment">Här är två lämpliga videor för utvecklare med SQL-bakgrund som vill lära sig mer:</li> <ul><li class="fragment"><a href="https://www.youtube.com/watch?v=ran_Ylug7AE&amp;list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&amp;index=2" class="svelte-1322xwn">Converting SQL structures to Firebase structures #2</a></li> <li class="fragment"><a href="https://www.youtube.com/watch?v=haMOUb3KVSo&amp;list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&amp;index=5" class="svelte-1322xwn">How to Structure Your Data #5</a></li></ul></ol>`),Pt=s("<!> <!>",5),bt=s('<ol><li class="fragment">Två huvudmetoder för att hantera relationer:</li> <ul><li class="fragment">Metod 1: Duplicera all data (enkelt men kan leda till inkonsistens)</li> <li class="fragment">Metod 2: Lagra referenser/ID:n (mer komplext men håller data konsistent)</li></ul> <li class="fragment">Referensbaserad metod:</li> <ul><li class="fragment">Skapa en Entity-modell som skiljer sig från domänmodellen</li> <li class="fragment">Entity lagrar bara ID-referenser till relaterade objekt</li> <li class="fragment">Konvertera mellan Entity (för lagring) och domänmodell (för användning)</li> <li class="fragment">Kräver asynkrona operationer för att hämta relaterade objekt</li></ul> <li class="fragment">Överväganden:</li> <ul><li class="fragment">Fler filläsningar men data förblir konsistent</li> <li class="fragment">Mer komplex kod men bättre datamodell</li> <li class="fragment">Särskilt fördelaktigt när:</li> <ul><li class="fragment">Data uppdateras ofta</li> <li class="fragment">Samma objekt används i flera kontexter</li> <li class="fragment">Applikationen kan växa i komplexitet</li></ul></ul></ol>'),Ft=s("<!> <!>",5),Tt=s('<div class="mt-60 text-center">Det var allt för idag!</div>'),jt=s("<!> <!>",5),Lt=s('<!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Ct(q){const X={year:"numeric",month:"long",day:"numeric"},W=new Date().toLocaleDateString("sv-SE",X);let y,g,u=ut(!1);var A=D(!0),tt=d(A);mt(tt,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(et,It)=>{var J=Lt(),M=d(J);ct(M,{});var E=t(t(M,!0));p(E,{children:(l,$)=>{var e=gt(),a=d(e);v(a,{title:"Föreläsning 4 - Fortsättning serverprogrammering"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=ft();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var H=t(t(E,!0));p(H,{children:(l,$)=>{var e=vt(),a=d(e);v(a,{title:"Nästa vecka"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=pt();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var B=t(t(H,!0));p(B,{children:(l,$)=>{var e=$t(),a=d(e);v(a,{title:"Visualisering"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=_t();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var C=t(t(B,!0));p(C,{in:async()=>{m(u,!1),await y.update``},children:(l,$)=>{var e=yt(),a=d(e);v(a,{title:"Nödvändiga förutsättningar"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=D(!0),x=d(i);Q(x,{children:(I,st)=>{var k=ht(),S=d(k),w=c(S),b=t(t(w,!0)),F=t(t(b,!0)),T=t(t(F,!0)),j=t(t(S,!0)),P=c(j),L=c(P);G(O(L,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),R=>y=R,()=>y),U(()=>P.hidden=!Y(u)),f("current",w,async()=>{m(u,!0),await y.update`abstract interface class RepositoryInterface<T> {
  Future<T> create(T item);
  Future<List<T>> getAll();
  Future<T?> getById(String id);
  Future<T> update(String id, T item);
  Future<T> delete(String id);
}`},!1),f("current",F,async()=>{m(u,!0),await y.update`abstract interface class RepositoryInterface<T> {
Future<T> create(T item);
Future<List<T>> getAll();
Future<T?> getById(String id);
Future<T> update(String id, T item);
Future<T> delete(String id);

// Exempel model

class Item {
  final String description;
  final String id;

  Item(this.description, [String? id]) : id = id ?? Uuid().v4(); // id genereras om det inte tilldelas

  factory Item.fromJson(Map<String, dynamic> json) {
    return Item(json['description'], json['id']);
  }

  Map<String, dynamic> toJson() {
    return {"description": description, "id": id};
  }
}

}`},!1),f("current",T,async()=>{m(u,!0),await y.update`// Configure example routes.
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
router.delete('/bags/<id>', deleteBagHandler); // update specific bag`},!1),r(I,k)},$$slots:{default:!0}}),r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var K=t(t(C,!0));p(K,{children:(l,$)=>{var e=St(),a=d(e);v(a,{title:"Repository med Lokal Datalagring"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=D(!0),x=d(i);Q(x,{children:(I,st)=>{var k=kt(),S=d(k),w=c(S),b=t(t(w,!0)),F=c(b),T=t(t(b,!0)),j=t(t(T,!0)),P=c(j),L=t(t(P,!0)),R=t(t(L,!0)),lt=t(t(j,!0)),nt=t(t(S,!0)),z=c(nt),ot=c(z);G(O(ot,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),dt=>g=dt,()=>g),U(()=>z.hidden=!Y(u)),f("current",w,async()=>{m(u,!1),await g.update``},!1),f("current",F,async()=>{m(u,!0),await g.update`// In-memory Repository
	abstract class Repository<T> {
		List<T> _items = [];
		
		void add(T item) => _items.add(item);
		List<T> getAll() => _items;
	}`},!1),f("current",T,async()=>{m(u,!1),await g.update``},!1),f("current",P,async()=>{m(u,!0),await g.update`abstract class FileRepository<T> {
		final String filePath;
		FileRepository(this.filePath);
	
		// Konvertering till/från JSON
		T fromJson(Map<String, dynamic> json);
		Map<String, dynamic> toJson(T item);
	}`},!1),f("current",L,async()=>{m(u,!0),await g.update`abstract class FileRepository<T> {
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
	}`},!1),f("current",R,async()=>{m(u,!0),await g.update`abstract class FileRepository<T> {
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
	}`},!1),f("current",lt,async()=>{m(u,!0),await g.update`// Användning
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
	}`},!1),r(I,k)},$$slots:{default:!0}}),r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var N=t(t(K,!0));p(N,{children:(l,$)=>{var e=Pt(),a=d(e);v(a,{title:"Relationer? Begränsningar?"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=wt();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var V=t(t(N,!0));p(V,{children:(l,$)=>{var e=Ft(),a=d(e);v(a,{title:"Relationsdata i dokumentbaserad datalagring (nosql,json,fil,osv)"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=bt();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var Z=t(t(V,!0));p(Z,{children:(l,$)=>{var e=jt(),a=d(e);v(a,{title:"Tack för idag!"});var n=t(t(a,!0));_(n,{children:(o,h)=>{var i=Tt();r(o,i)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var at=t(t(Z,!0)),rt=c(at),it=c(rt);it.nodeValue=W,r(et,J)},$$slots:{default:!0}}),r(q,A)}export{Ct as component};
