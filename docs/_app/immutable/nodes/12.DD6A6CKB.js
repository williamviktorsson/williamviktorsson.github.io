import{i as T,f as s,t as o,j as n,k as e,g as a}from"../chunks/disclose-version.BmIQt7z6.js";import{s as P,B as D,z as F,f as we}from"../chunks/runtime.Bix74eL6.js";import{e as E}from"../chunks/render.DlfULs-I.js";import{b as H}from"../chunks/this.wyHJEu0o.js";import{C as N}from"../chunks/code.seIn7Zd2.js";import{P as be,S,T as w,C as b}from"../chunks/content.DTFQcm-x.js";import{F as Re}from"../chunks/front.DnDuSa6w.js";import{S as q}from"../chunks/split.B0OcPuxR.js";var je=o(`<ol><li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li> <li class="fragment">Lite översiktligt om routing, json & http-requests</li> <li class="fragment"><strong>Repository-klasserna ska utföra sina operationer mot den server ni programmerar i
						veckan</strong></li></ol>`),xe=o("<!> <!>",5),Ie=o('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li> <li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li> <li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li></ol>'),Te=o("<!> <!>",5),Ee=o('<div class="mt-60 text-center">Dra fram en whiteboard och rita lite arkitektur! Vad ska introduceras egentligen?</div>'),De=o("<!> <!>",5),Fe=o('<ul><li class="fragment">HTTP står för Hypertext Transfer Protocol</li> <li class="fragment">Klient-server modell: Request-Response cykeln</li> <li class="fragment">Exempel på HTTP GET och POST</li> <li class="fragment">Vanliga HTTP-metoder: GET, POST, PUT, DELETE</li> <li class="fragment">Status-koder: 200 OK, 404 Not Found, 500 Internal Server Error, etc.</li></ul> <div><div class="enter"><!></div></div>',1),He=o("<!> <!>",5),Ne=o('<ul><li class="fragment">JSON står för JavaScript Object Notation</li> <li class="fragment">Lättviktigt, läsbart format för dataöverföring</li> <li class="fragment">Exempel på JSON-hantering i Dart</li> <li class="fragment">Grundläggande datatyper: objekt, array, string, number, boolean, null</li></ul> <div><div class="enter"><!></div></div>',1),qe=o("<!> <!>",5),Ce=o('<ul><li class="fragment">Routing: Dirigera HTTP-förfrågningar till rätt hanterare</li> <li class="fragment">Exempel på routing</li> <li class="fragment">Hantera olika HTTP-metoder och URL-mönster</li></ul> <div><div class="enter"><!></div></div>',1),Ue=o("<!> <!>",5),Le=o('<ul><li class="fragment">Använd <code class="svelte-1322xwn">async</code> och <code class="svelte-1322xwn">await</code> för asynkrona operationer</li> <li class="fragment"><code class="svelte-1322xwn">Future</code>-objekt representerar framtida värden</li> <li class="fragment">Exempel på asynkrona hanterare</li></ul> <div><div class="enter"><!></div></div>',1),Je=o("<!> <!>",5),Ge=o('<ul><li class="fragment">Repository-mönstret abstraherar datakällor</li> <li class="fragment">Implementera mot er Shelf-server</li> <li class="fragment">Exempel på DataRepository</li></ul> <div><div class="enter"><!></div></div>',1),Oe=o("<!> <!>",5),Ae=o('<ul><li class="fragment">Använd `fromJson` och `toJson` för att konvertera mellan JSON och Dart-objekt</li> <li class="fragment">Gör datahanteringen mer typsäker och enklare att använda</li> <li class="fragment">Exempel på Item-klass och uppdaterad DataRepository</li> <li class="fragment">Fördelar: Typsäkerhet, enklare att hantera data, bättre kodstruktur</li></ul> <div><div class="enter"><!></div></div>',1),Ve=o("<!> <!>",5),Ke=o('<ol><li class="fragment">Gör en dart server med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart pub get</code></li> <li class="fragment">Kopiera över koden för dina klasser och repositories från uppgift 1 och placera i <code class="svelte-1322xwn">/lib</code></li></ul> <li class="fragment">Testa köra servern med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Testa testa servern med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart test</code></li></ul> <li class="fragment">Skapa ett nytt dart-projekt för att utöka ditt CLI:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li class="fragment">Detta behövs för att ni ska kunna lägga till nätverksfunktionalitet med kommandot <code class="svelte-1322xwn">dart pub add http</code></li></ul> <li class="fragment">Kopiera över koden från uppgift 1 och placera i <code class="svelte-1322xwn">/lib</code></li> <li class="fragment">Fixa så att main-funktionen i <code class="svelte-1322xwn"> </code> kör ditt CLI</li></ol>'),Me=o("<!> <!>",5),Be=o(`<ol><li class="fragment">På klienten:</li> <ul><li class="fragment">Gör alla anrop i dina repositories till asynkrona</li> <li class="fragment">Gör din main funktion till async</li> <li class="fragment">Gör await på alla funktionsanrop i ditt CLI som utför asynkrona anrop</li> <li class="fragment">Byt ut koden i dina repositories som hämtar data från lokala datastrukturer till att
						hämta information från din server över http</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul> <li class="fragment">På servern:</li> <ul><li class="fragment">Lägg till en unik route och handler för varje operation som finns i alla dina
						repositories</li> <ul><li class="fragment">T.ex. en GET/PUT/POST/DELETE för alla [VEHICLES/PERSONS/PARKINGS/PARKINGSPOTS]</li></ul> <li class="fragment">Hantera innehållet i varje request</li> <li class="fragment">Använd dina omodifierade repositories från uppgift 1 för att lagra i lokal datalagring
						på servern.</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul></ol>`),We=o("<!> <!>",5),ze=o(`<div class="mt-60 text-center">Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!</div>`),Qe=o("<!> <!>",5),Xe=o('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function it(le){const ne={year:"numeric",month:"long",day:"numeric"},oe=new Date().toLocaleDateString("sv-SE",ne);let U,L,J,G,O,C,c=we(!1);var A=T(!0),ie=n(A);be(ie,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(de,Ze)=>{var V=Xe(),K=n(V);Re(K,{});var M=e(e(K,!0));S(M,{children:(i,R)=>{var t=xe(),r=n(t);w(r,{title:"Föreläsning 3 - Introduktion serverprogrammering"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=je();s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var B=e(e(M,!0));S(B,{children:(i,R)=>{var t=Te(),r=n(t);w(r,{title:"Nästa vecka"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=Ie();s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var W=e(e(B,!0));S(W,{children:(i,R)=>{var t=De(),r=n(t);w(r,{title:"Visualisering"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=Ee();s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var z=e(e(W,!0));S(z,{in:async()=>{P(c,!1),await U.update``},children:(i,R)=>{var t=He(),r=n(t);w(r,{title:"HTTP - Grunden för webbkommunikation"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Fe(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=a(_),k=a(f);H(N(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>U=x,()=>U),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await U.update`// Serversidan (Dart med Shelf)
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var Q=e(e(z,!0));S(Q,{in:async()=>{P(c,!1),await L.update``},children:(i,R)=>{var t=qe(),r=n(t);w(r,{title:"JSON - Data-utbytesformat"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Ne(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=a(_),k=a(f);H(N(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>L=x,()=>L),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await L.update`final items = [];

Future<Response> _postItemHandler(Request request) async {
  final data = await request.readAsString();
  final json = jsonDecode(data);
  items.add(json);
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var X=e(e(Q,!0));S(X,{in:async()=>{P(c,!1),await J.update``},children:(i,R)=>{var t=Ue(),r=n(t);w(r,{title:"Routing - Dirigera förfrågningar"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Ce(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(p,!0)),_=a(y),f=a(_);H(N(f,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),k=>J=k,()=>J),D(()=>_.hidden=!F(c)),E("current",h,async()=>{P(c,!0),await J.update`final Router app = Router();

app.get('/', _rootHandler);
app.get('/echo/<message>', _echoHandler);


Future<Response> _rootHandler(Request request) async {
  return Response.ok('Hello, World!');
}

Future<Response> _echoHandler(Request request) async {
  final message = request.params['message'];
  return Response.ok('$message');
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var Y=e(e(X,!0));S(Y,{in:async()=>{P(c,!1),await G.update``},children:(i,R)=>{var t=Je(),r=n(t);w(r,{title:"Asynkrona anrop"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Le(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=a(_),k=a(f);H(N(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>G=x,()=>G),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await G.update`Future<Response> _postItemsHandler(Request request) async {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var Z=e(e(Y,!0));S(Z,{in:async()=>{P(c,!1),await O.update``},children:(i,R)=>{var t=Oe(),r=n(t);w(r,{title:"Implementering av Repository-mönstret"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Ge(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=a(_),k=a(f);H(N(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>O=x,()=>O),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await O.update`class DataRepository {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var ee=e(e(Z,!0));S(ee,{in:async()=>{P(c,!1),await C.update``},children:(i,R)=>{var t=Ve(),r=n(t);w(r,{title:"Typsäker datahantering med fromJson och toJson"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=T(!0),$=n(l);q($,{children:(m,I)=>{var v=Ae(),p=n(v),g=a(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=a(_),k=a(f);H(N(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>C=x,()=>C),D(()=>f.hidden=!F(c)),E("current",g,async()=>{P(c,!0),await C.update`class Item {
	final String description;
	Item(this.description);

	factory Item.fromJson(Map<String, dynamic> json) {
		return Item(json['description'] as String);
	}

	Map<String, dynamic> toJson() => {
		'description': description,
	};
}`},!1),E("current",y,async()=>{P(c,!0),await C.update`class Item {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var te=e(e(ee,!0));S(te,{children:(i,R)=>{var t=Me(),r=n(t);w(r,{title:"Steg för att refaktorisera till klient+server-lösning"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=Ke(),$=a(l),m=e(e($,!0)),I=a(m),v=a(I),p=a(v);p.nodeValue="dart create -t server-shelf <projektnamn>";var g=e(e(I,!0)),h=a(g),y=a(h);y.nodeValue="cd <projektnamn>";var _=e(e(m,!0)),f=e(e(_,!0)),k=a(f),x=a(k),pe=a(x);pe.nodeValue="dart run <projektnamn>:server";var fe=e(e(f,!0)),me=e(e(fe,!0)),ge=e(e(me,!0)),se=e(e(ge,!0)),_e=a(se),$e=a(_e),he=a($e);he.nodeValue="dart create <projektnamn>_cli";var ye=e(e(se,!0)),ke=e(e(ye,!0)),Pe=e(a(ke)),Se=a(Pe);Se.nodeValue="/bin/<projektnamn>_cli.dart",s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var re=e(e(te,!0));S(re,{children:(i,R)=>{var t=We(),r=n(t);w(r,{title:"Steg för att refaktorisera till klient+server-lösning | fortsättning"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=Be();s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var ae=e(e(re,!0));S(ae,{children:(i,R)=>{var t=Qe(),r=n(t);w(r,{title:"Tack för idag!"});var d=e(e(r,!0));b(d,{children:(u,j)=>{var l=ze();s(u,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var ue=e(e(ae,!0)),ce=a(ue),ve=a(ce);ve.nodeValue=oe,s(de,V)},$$slots:{default:!0}}),s(le,A)}export{it as component};
