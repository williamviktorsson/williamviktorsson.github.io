import{f as T,g as s,t as o,i as n,j as e,k as t}from"../chunks/disclose-version.BAOoFInd.js";import{s as P,B as D,z as F,f as Re}from"../chunks/runtime.Bix74eL6.js";import{e as E}from"../chunks/render.DvSWKrhB.js";import{b as H}from"../chunks/this.wyHJEu0o.js";import{S as N,C as q}from"../chunks/split.DmvM2kU1.js";import{P as xe,S,T as w,C as b}from"../chunks/content.Cka6NWLM.js";import{F as Ie}from"../chunks/front.DzTqcsJY.js";var Te=o(`<ol><li class="fragment">Fokus på asynkrona anrop & hämta data över nätverk</li> <li class="fragment">Lite översiktligt om routing, json & http-requests</li> <li class="fragment"><strong>Repository-klasserna ska utföra sina operationer mot den server ni programmerar i
						veckan</strong></li></ol>`),Ee=o("<!> <!>",5),De=o('<ol><li class="fragment">Utöka server till att erbjuda persistent datalagring</li> <li class="fragment">Nyttja ultrasimpel lokal NoSQL databas</li> <li class="fragment">Förberedelse för att lära sig använda Firebase Firestore</li></ol>'),Fe=o("<!> <!>",5),He=o('<div class="mt-60 text-center">Dra fram en whiteboard och rita lite arkitektur! Vad ska introduceras egentligen?</div>'),Ne=o("<!> <!>",5),qe=o('<ul><li class="fragment">HTTP står för Hypertext Transfer Protocol</li> <li class="fragment">Klient-server modell: Request-Response cykeln</li> <li class="fragment">Exempel på HTTP GET och POST</li> <li class="fragment">Vanliga HTTP-metoder: GET, POST, PUT, DELETE</li> <li class="fragment">Status-koder: 200 OK, 404 Not Found, 500 Internal Server Error, etc.</li></ul> <div><div class="enter"><!></div></div>',1),Ce=o("<!> <!>",5),Ue=o('<ul><li class="fragment">JSON står för JavaScript Object Notation</li> <li class="fragment">Lättviktigt, läsbart format för dataöverföring</li> <li class="fragment">Exempel på JSON-hantering i Dart</li> <li class="fragment">Grundläggande datatyper: objekt, array, string, number, boolean, null</li></ul> <div><div class="enter"><!></div></div>',1),Le=o("<!> <!>",5),Je=o('<ul><li class="fragment">Routing: Dirigera HTTP-förfrågningar till rätt hanterare</li> <li class="fragment">Exempel på routing</li> <li class="fragment">Hantera olika HTTP-metoder och URL-mönster</li></ul> <div><div class="enter"><!></div></div>',1),Ge=o("<!> <!>",5),Oe=o('<ul><li class="fragment">Använd <code class="svelte-1322xwn">async</code> och <code class="svelte-1322xwn">await</code> för asynkrona operationer</li> <li class="fragment"><code class="svelte-1322xwn">Future</code>-objekt representerar framtida värden</li> <li class="fragment">Exempel på asynkrona hanterare</li></ul> <div><div class="enter"><!></div></div>',1),Ve=o("<!> <!>",5),Ae=o('<ul><li class="fragment">Repository-mönstret abstraherar datakällor</li> <li class="fragment">Implementera mot er Shelf-server</li> <li class="fragment">Exempel på DataRepository</li></ul> <div><div class="enter"><!></div></div>',1),Ke=o("<!> <!>",5),Me=o('<ul><li class="fragment">Använd `fromJson` och `toJson` för att konvertera mellan JSON och Dart-objekt</li> <li class="fragment">Gör datahanteringen mer typsäker och enklare att använda</li> <li class="fragment">Exempel på Item-klass och uppdaterad DataRepository</li> <li class="fragment">Fördelar: Typsäkerhet, enklare att hantera data, bättre kodstruktur</li></ul> <div><div class="enter"><!></div></div>',1),Be=o("<!> <!>",5),We=o('<ol><li class="fragment">Gör en dart server med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li style="list-style: none;" class="fragment"><code class="svelte-1322xwn">dart pub get</code></li> <li class="fragment">Kopiera över koden för dina klasser och repositories från uppgift 1 och placera i <code class="svelte-1322xwn">/lib</code></li></ul> <li class="fragment">Testa köra servern med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Testa testa servern med:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li></ul> <li class="fragment">Skapa ett nytt dart-projekt för att utöka ditt CLI:</li> <ul><li style="list-style: none;" class="fragment"><code class="svelte-1322xwn"> </code></li> <li class="fragment">Detta behövs för att ni ska kunna lägga till nätverksfunktionalitet med kommandot <code class="svelte-1322xwn">dart pub add http</code></li></ul> <li class="fragment">Kopiera över koden från uppgift 1 och placera i <code class="svelte-1322xwn">/lib</code></li> <li class="fragment">Fixa så att main-funktionen i <code class="svelte-1322xwn"> </code> kör ditt CLI</li></ol>'),ze=o("<!> <!>",5),Qe=o(`<ol><li class="fragment">På klienten:</li> <ul><li class="fragment">Gör alla anrop i dina repositories till asynkrona</li> <li class="fragment">Gör din main funktion till async</li> <li class="fragment">Gör await på alla funktionsanrop i ditt CLI som utför asynkrona anrop</li> <li class="fragment">Byt ut koden i dina repositories som hämtar data från lokala datastrukturer till att
						hämta information från din server över http</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul> <li class="fragment">På servern:</li> <ul><li class="fragment">Lägg till en unik route och handler för varje operation som finns i alla dina
						repositories</li> <ul><li class="fragment">T.ex. en GET/PUT/POST/DELETE för alla [VEHICLES/PERSONS/PARKINGS/PARKINGSPOTS]</li></ul> <li class="fragment">Hantera innehållet i varje request</li> <li class="fragment">Använd dina omodifierade repositories från uppgift 1 för att lagra i lokal datalagring
						på servern.</li> <ul><li class="fragment">Detta kan du göra parallellt med att du utvecklar din server.</li></ul></ul></ol>`),Xe=o("<!> <!>",5),Ye=o(`<div class="mt-60 text-center">Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!</div>`),Ze=o("<!> <!>",5),et=o('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function ut(ne){const oe={year:"numeric",month:"long",day:"numeric"},ie=new Date().toLocaleDateString("sv-SE",oe);let U,L,J,G,O,C,c=Re(!1);var V=T(!0),de=n(V);xe(de,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ue,rt)=>{var A=et(),K=n(A);Ie(K,{});var M=e(e(K,!0));S(M,{children:(i,j)=>{var r=Ee(),a=n(r);w(a,{title:"Föreläsning 3 - Introduktion serverprogrammering"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=Te();s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var B=e(e(M,!0));S(B,{children:(i,j)=>{var r=Fe(),a=n(r);w(a,{title:"Nästa vecka"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=De();s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var W=e(e(B,!0));S(W,{children:(i,j)=>{var r=Ne(),a=n(r);w(a,{title:"Visualisering"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=He();s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var z=e(e(W,!0));S(z,{in:async()=>{P(c,!1),await U.update``},children:(i,j)=>{var r=Ce(),a=n(r);w(a,{title:"HTTP - Grunden för webbkommunikation"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=qe(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=t(_),k=t(f);H(q(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>U=x,()=>U),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await U.update`// Serversidan (Dart med Shelf)
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var Q=e(e(z,!0));S(Q,{in:async()=>{P(c,!1),await L.update``},children:(i,j)=>{var r=Le(),a=n(r);w(a,{title:"JSON - Data-utbytesformat"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=Ue(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=t(_),k=t(f);H(q(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>L=x,()=>L),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await L.update`final items = [];

Future<Response> _postItemHandler(Request request) async {
  final data = await request.readAsString();
  final json = jsonDecode(data);
  items.add(json);
  return Response.ok(
    jsonEncode(items),
    headers: {'Content-type': 'application/json'},
  );
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var X=e(e(Q,!0));S(X,{in:async()=>{P(c,!1),await J.update``},children:(i,j)=>{var r=Ge(),a=n(r);w(a,{title:"Routing - Dirigera förfrågningar"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=Je(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(p,!0)),_=t(y),f=t(_);H(q(f,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),k=>J=k,()=>J),D(()=>_.hidden=!F(c)),E("current",h,async()=>{P(c,!0),await J.update`final Router app = Router();

app.get('/', _rootHandler);
app.get('/echo/<message>', _echoHandler);


Future<Response> _rootHandler(Request request) async {
  return Response.ok('Hello, World!');
}

Future<Response> _echoHandler(Request request) async {
  final message = request.params['message'];
  return Response.ok('$message');
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var Y=e(e(X,!0));S(Y,{in:async()=>{P(c,!1),await G.update``},children:(i,j)=>{var r=Ve(),a=n(r);w(a,{title:"Asynkrona anrop"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=Oe(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=t(_),k=t(f);H(q(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>G=x,()=>G),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await G.update`Future<Response> _postItemsHandler(Request request) async {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var Z=e(e(Y,!0));S(Z,{in:async()=>{P(c,!1),await O.update``},children:(i,j)=>{var r=Ke(),a=n(r);w(a,{title:"Implementering av Repository-mönstret"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=Ae(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=t(_),k=t(f);H(q(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>O=x,()=>O),D(()=>f.hidden=!F(c)),E("current",y,async()=>{P(c,!0),await O.update`class DataRepository {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var ee=e(e(Z,!0));S(ee,{in:async()=>{P(c,!1),await C.update``},children:(i,j)=>{var r=Be(),a=n(r);w(a,{title:"Typsäker datahantering med fromJson och toJson"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=T(!0),$=n(l);N($,{children:(m,I)=>{var v=Me(),p=n(v),g=t(p),h=e(e(g,!0)),y=e(e(h,!0)),_=e(e(p,!0)),f=t(_),k=t(f);H(q(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),x=>C=x,()=>C),D(()=>f.hidden=!F(c)),E("current",g,async()=>{P(c,!0),await C.update`class Item {
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
}`},!1),s(m,v)},$$slots:{default:!0}}),s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var te=e(e(ee,!0));S(te,{children:(i,j)=>{var r=ze(),a=n(r);w(a,{title:"Steg för att refaktorisera till klient+server-lösning"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=We(),$=t(l),m=e(e($,!0)),I=t(m),v=t(I),p=t(v);p.nodeValue="dart create -t server-shelf <projektnamn>";var g=e(e(I,!0)),h=t(g),y=t(h);y.nodeValue="cd <projektnamn>";var _=e(e(m,!0)),f=e(e(_,!0)),k=t(f),x=t(k),fe=t(x);fe.nodeValue="dart run <projektnamn>:server";var me=e(e(f,!0)),se=e(e(me,!0)),ge=t(se),_e=t(ge),$e=t(_e);$e.nodeValue="dart run <projektnamn>:server";var he=e(e(se,!0)),le=e(e(he,!0)),ye=t(le),ke=t(ye),Pe=t(ke);Pe.nodeValue="dart create <projektnamn>_cli";var Se=e(e(le,!0)),we=e(e(Se,!0)),be=e(t(we)),je=t(be);je.nodeValue="/bin/<projektnamn>_cli.dart",s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var re=e(e(te,!0));S(re,{children:(i,j)=>{var r=Xe(),a=n(r);w(a,{title:"Steg för att refaktorisera till klient+server-lösning | fortsättning"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=Qe();s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var ae=e(e(re,!0));S(ae,{children:(i,j)=>{var r=Ze(),a=n(r);w(a,{title:"Tack för idag!"});var d=e(e(a,!0));b(d,{children:(u,R)=>{var l=Ye();s(u,l)},$$slots:{default:!0}}),s(i,r)},$$slots:{default:!0}});var ce=e(e(ae,!0)),ve=t(ce),pe=t(ve);pe.nodeValue=ie,s(ue,A)},$$slots:{default:!0}}),s(ne,V)}export{ut as component};
