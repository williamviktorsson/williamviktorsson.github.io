import{i as T,f as a,t as n,j as o,k as e,g as l}from"../chunks/disclose-version.BmIQt7z6.js";import{s as R,B as D,z as H,f as Se}from"../chunks/runtime.Bix74eL6.js";import{e as E}from"../chunks/render.DlfULs-I.js";import{b as F}from"../chunks/this.wyHJEu0o.js";import{C as q}from"../chunks/code.seIn7Zd2.js";import{P as je,S as $,T as h,C as y}from"../chunks/content.DTFQcm-x.js";import{F as be}from"../chunks/front.DnDuSa6w.js";import{S as C}from"../chunks/split.B0OcPuxR.js";var Re=n(`<ol><li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li> <li class="fragment">Lite översiktligt om routing, json & http-requests</li> <li class="fragment"><strong>Repository-klasserna ska utföra sina operationer mot den server ni programmerar i
						veckan</strong></li> <li class="fragment">Använda paketet <code class="svelte-1322xwn">shelf</code> & <code class="svelte-1322xwn">shelf_router</code></li> <li class="fragment">Exempelprojekt på GitHub</li> <li class="fragment">Förslag projektstruktur</li></ol>`),xe=n("<!> <!>",5),Ie=n('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li></ol>'),Te=n("<!> <!>",5),Ee=n('<div class="mt-60 text-center">Dra fram en whiteboard visa förändringarna i arkitekturen.</div>'),De=n("<!> <!>",5),He=n('<ul><li class="fragment">HTTP står för Hypertext Transfer Protocol</li> <li class="fragment">Klient-server modell: Request-Response cykeln</li> <li class="fragment">Exempel på HTTP GET</li> <li class="fragment">Vanliga HTTP-metoder: GET, POST, PUT, DELETE</li> <li class="fragment">Status-koder: 200 OK, 404 Not Found, 500 Internal Server Error, etc.</li></ul> <div><div class="enter"><!></div></div>',1),Fe=n("<!> <!>",5),qe=n('<ul><li class="fragment">JSON står för JavaScript Object Notation</li> <li class="fragment">Lättviktigt, läsbart format för dataöverföring</li> <li class="fragment">Exempel på JSON-hantering i Dart</li> <li class="fragment">Grundläggande datatyper: objekt, array, string, number, boolean, null</li></ul> <div><div class="enter"><!></div></div>',1),Ce=n("<!> <!>",5),Le=n('<ul><li class="fragment">Routing: Dirigera HTTP-förfrågningar till rätt hanterare</li> <li class="fragment">Exempel på routing</li> <li class="fragment">Hantera olika HTTP-metoder och URL-mönster</li></ul> <div><div class="enter"><!></div></div>',1),Ne=n("<!> <!>",5),Ue=n('<ul><li class="fragment">Använd <code class="svelte-1322xwn">async</code> och <code class="svelte-1322xwn">await</code> för asynkrona operationer</li> <li class="fragment"><code class="svelte-1322xwn">Future</code>-objekt representerar framtida värden</li> <li class="fragment">Exempel på asynkrona hanterare</li></ul> <div><div class="enter"><!></div></div>',1),Ge=n("<!> <!>",5),Je=n('<ul><li class="fragment">Repository-mönstret abstraherar datakällor</li> <li class="fragment">Implementera mot er Shelf-server</li> <li class="fragment">Exempel på DataRepository</li></ul> <div><div class="enter"><!></div></div>',1),Ae=n("<!> <!>",5),Oe=n('<ul><li class="fragment">Använd `fromJson` och `toJson` för att konvertera mellan JSON och Dart-objekt</li> <li class="fragment">Gör datahanteringen mer typsäker och enklare att använda</li> <li class="fragment">Exempel på Item-klass och uppdaterad DataRepository</li> <li class="fragment">Fördelar: Typsäkerhet, enklare att hantera data, bättre kodstruktur</li></ul> <div><div class="enter"><!></div></div>',1),Ke=n("<!> <!>",5),Ve=n('<div class="mt-60 text-center">Orientera lite i dagens kodexempel som finns på <a href="https://github.com/williamviktorsson/HFL25-1/tree/main/assignment_code" class="svelte-1322xwn">GitHub</a>.</div>'),Me=n("<!> <!>",5),Be=n(`<ol><li class="fragment">Servern består uteslutande av två saker:</li> <ul><li class="fragment">Handlers för HTTP request för olika routes</li> <li class="fragment">Implementationen av de repositories som servern använder för lokal datalagring.</li></ul> <li class="fragment">Klienten (CLI) består av fyra saker:</li> <ul><li class="fragment">Kod för att visa och navigera mellan menyer</li> <li class="fragment">Kod för att utföra de operationer som presenteras som val i menyerna.</li> <ul><li class="fragment">Läser och hanterar input från användaren.</li></ul> <li class="fragment">Lite utils för att validera input</li> <li class="fragment">Implementationen av de repositories som klienten använder för kommunikation med servern.</li></ul> <li class="fragment">Ett ytterligare projekt som jag kallar shared där jag samlar koden som både CLI och server
					nyttjar.</li></ol>`),We=n("<!> <!>",5),ze=n('<ol><li class="fragment">Gör en dart server med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart pub get</code></li></ul> <li class="fragment">Testa köra servern med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Testa att köra testerna för serverkoden med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart test</code></li></ul> <li class="fragment">Gör ett nytt projekt (shared) där ni samlar koden som både CLI och server nyttjar.</li> <ul><li class="fragment">Skapat med detta kommando:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul></ul></ol>'),Qe=n("<!> <!>",5),Xe=n(`<ol><li class="fragment">På klienten:</li> <ul><li class="fragment">Gör alla anrop i dina repositories till asynkrona</li> <li class="fragment">Gör din main funktion till async</li> <li class="fragment">Gör await på alla funktionsanrop i ditt CLI som utför asynkrona anrop</li> <li class="fragment">Byt ut koden i dina repositories som hämtar data från lokala datastrukturer till att
						hämta information från din server över http</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul> <li class="fragment">På servern:</li> <ul><li class="fragment">Lägg till en unik route och handler för varje operation som finns i alla dina
						repositories</li> <ul><li class="fragment">T.ex. en GET/PUT/POST/DELETE för alla [VEHICLES/PERSONS/PARKINGS/PARKINGSPOTS]</li></ul> <li class="fragment">Hantera innehållet i varje request</li> <li class="fragment">Använd dina omodifierade repositories från uppgift 1 för att lagra i lokal datalagring
						på servern.</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul></ol>`),Ye=n("<!> <!>",5),Ze=n(`<div class="mt-60 text-center">Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!</div>`),et=n("<!> <!>",5),tt=n('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function vt(ne){const oe={year:"numeric",month:"long",day:"numeric"},ie=new Date().toLocaleDateString("sv-SE",oe);let N,U,G,J,A,L,c=Se(!1);var O=T(!0),de=o(O);je(de,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ue,at)=>{var K=tt(),V=o(K);be(V,{});var M=e(e(V,!0));$(M,{children:(i,k)=>{var t=xe(),r=o(t);h(r,{title:"Föreläsning 3 - Introduktion serverprogrammering"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Re();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var B=e(e(M,!0));$(B,{children:(i,k)=>{var t=Te(),r=o(t);h(r,{title:"Nästa vecka"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Ie();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var W=e(e(B,!0));$(W,{children:(i,k)=>{var t=De(),r=o(t);h(r,{title:"Visualisering"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Ee();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var z=e(e(W,!0));$(z,{in:async()=>{R(c,!1),await N.update``},children:(i,k)=>{var t=Fe(),r=o(t);h(r,{title:"HTTP - Grunden för webbkommunikation"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=He(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(S,!0)),_=e(e(p,!0)),m=l(_),b=l(m);F(q(b,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>N=x,()=>N),D(()=>m.hidden=!H(c)),E("current",j,async()=>{R(c,!0),await N.update`// Serversidan (Dart med Shelf)
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
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var Q=e(e(z,!0));$(Q,{in:async()=>{R(c,!1),await U.update``},children:(i,k)=>{var t=Ce(),r=o(t);h(r,{title:"JSON - Data-utbytesformat"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=qe(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(S,!0)),_=e(e(p,!0)),m=l(_),b=l(m);F(q(b,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>U=x,()=>U),D(()=>m.hidden=!H(c)),E("current",j,async()=>{R(c,!0),await U.update`final items = [];

Future<Response> _postItemHandler(Request request) async {
  final data = await request.readAsString();
  final json = jsonDecode(data);
  items.add(json);
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var X=e(e(Q,!0));$(X,{in:async()=>{R(c,!1),await G.update``},children:(i,k)=>{var t=Ne(),r=o(t);h(r,{title:"Routing - Dirigera förfrågningar"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=Le(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(p,!0)),_=l(j),m=l(_);F(q(m,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),b=>G=b,()=>G),D(()=>_.hidden=!H(c)),E("current",S,async()=>{R(c,!0),await G.update`final Router app = Router();

app.get('/', _rootHandler);
app.get('/echo/<message>', _echoHandler);


Future<Response> _rootHandler(Request request) async {
  return Response.ok('Hello, World!');
}

Future<Response> _echoHandler(Request request) async {
  final message = request.params['message'];
  return Response.ok('$message');
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var Y=e(e(X,!0));$(Y,{in:async()=>{R(c,!1),await J.update``},children:(i,k)=>{var t=Ge(),r=o(t);h(r,{title:"Asynkrona anrop"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=Ue(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(S,!0)),_=e(e(p,!0)),m=l(_),b=l(m);F(q(b,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>J=x,()=>J),D(()=>m.hidden=!H(c)),E("current",j,async()=>{R(c,!0),await J.update`Future<Response> _postItemsHandler(Request request) async {
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
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var Z=e(e(Y,!0));$(Z,{in:async()=>{R(c,!1),await A.update``},children:(i,k)=>{var t=Ae(),r=o(t);h(r,{title:"Implementering av Repository-mönstret"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=Je(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(S,!0)),_=e(e(p,!0)),m=l(_),b=l(m);F(q(b,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>A=x,()=>A),D(()=>m.hidden=!H(c)),E("current",j,async()=>{R(c,!0),await A.update`class DataRepository {
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
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var ee=e(e(Z,!0));$(ee,{in:async()=>{R(c,!1),await L.update``},children:(i,k)=>{var t=Ke(),r=o(t);h(r,{title:"Datahantering med fromJson och toJson"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=T(!0),w=o(s);C(w,{children:(f,I)=>{var v=Oe(),p=o(v),g=l(p),S=e(e(g,!0)),j=e(e(S,!0)),_=e(e(p,!0)),m=l(_),b=l(m);F(q(b,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>L=x,()=>L),D(()=>m.hidden=!H(c)),E("current",g,async()=>{R(c,!0),await L.update`class Item {
	final String description;
	Item(this.description);

	factory Item.fromJson(Map<String, dynamic> json) {
		return Item(json['description'] as String);
	}

	Map<String, dynamic> toJson() => {
		'description': description,
	};
}`},!1),E("current",j,async()=>{R(c,!0),await L.update`class Item {
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
}`},!1),a(f,v)},$$slots:{default:!0}}),a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var te=e(e(ee,!0));$(te,{children:(i,k)=>{var t=Me(),r=o(t);h(r,{title:"Referenskod"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Ve();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var re=e(e(te,!0));$(re,{children:(i,k)=>{var t=We(),r=o(t);h(r,{title:"Projektstrukturer exempel-repo"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Be();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var ae=e(e(re,!0));$(ae,{children:(i,k)=>{var t=Qe(),r=o(t);h(r,{title:"Steg för att refaktorisera till klient+server-lösning"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=ze(),w=l(s),f=e(e(w,!0)),I=l(f),v=l(I),p=l(v);p.nodeValue="dart create -t server-shelf <projektnamn>";var g=e(e(I,!0)),S=l(g),j=l(S);j.nodeValue="cd <projektnamn>";var _=e(e(f,!0)),m=e(e(_,!0)),b=l(m),x=l(b),me=l(x);me.nodeValue="dart run <projektnamn>:server";var fe=e(e(m,!0)),ge=e(e(fe,!0)),_e=e(e(ge,!0)),$e=e(e(_e,!0)),he=l($e),ye=e(e(he,!0)),ke=l(ye),Pe=l(ke),we=l(Pe);we.nodeValue="dart create -t package cli_shared",a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var se=e(e(ae,!0));$(se,{children:(i,k)=>{var t=Ye(),r=o(t);h(r,{title:"Steg för att refaktorisera till klient+server-lösning | fortsättning"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Xe();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var le=e(e(se,!0));$(le,{children:(i,k)=>{var t=et(),r=o(t);h(r,{title:"Tack för idag!"});var d=e(e(r,!0));y(d,{children:(u,P)=>{var s=Ze();a(u,s)},$$slots:{default:!0}}),a(i,t)},$$slots:{default:!0}});var ce=e(e(le,!0)),ve=l(ce),pe=l(ve);pe.nodeValue=ie,a(ue,K)},$$slots:{default:!0}}),a(ne,O)}export{vt as component};
