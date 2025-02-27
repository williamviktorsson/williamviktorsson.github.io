import{i as I,f as r,t as i,j as n,k as e,g as u}from"../chunks/disclose-version.BmIQt7z6.js";import{s as _,B as F,z as L,f as fe}from"../chunks/runtime.Bix74eL6.js";import{e as T}from"../chunks/render.DlfULs-I.js";import{b as U}from"../chunks/this.wyHJEu0o.js";import{C}from"../chunks/code.seIn7Zd2.js";import{P as pe,S,T as b,C as x}from"../chunks/content.DTFQcm-x.js";import{F as _e}from"../chunks/front.DnDuSa6w.js";import{S as A}from"../chunks/split.B0OcPuxR.js";var $e=i('<ol><li class="fragment">Avancerade Dart-koncept</li> <ul><li class="fragment">extension types</li> <li class="fragment">mixins</li> <li class="fragment">extension methods</li> <li class="fragment">patterns</li> <ul><li class="fragment">object desctructuring</li> <li class="fragment">rest element</li> <li class="fragment">if-case</li></ul> <li class="fragment">isolates</li></ul> <li class="fragment">Inget som examineras under Dart-kursen som slutar bästa vecka (v.45)</li> <li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li></ol>'),ke=i("<!> <!>",5),he=i('<ol><li class="fragment">Ingen föreläsning eller handledning</li> <li class="fragment">Tid att göra klart uppgift 2 så alla är i fas inför Flutter.</li> <li class="fragment">Skriv på Teams om ni behöver hjälp 😊</li></ol>'),ye=i("<!> <!>",5),Pe=i('<ol><li class="fragment">Ni är fria att implementera repositories med valfri persistent datalagringsstrategi</li> <li class="fragment">Tillgängliga strategier:</li> <ul><li class="fragment"><code class="svelte-1322xwn">SQLite</code> - För dig med tidigare SQL/SQLite-erfarenhet</li> <ul><li class="fragment">Kan innebära visst dubbelarbete då Firebase är NoSQL</li></ul> <li class="fragment"><code class="svelte-1322xwn">Hive</code> - Enklare alternativ med tillräckliga exempel (trots begränsad dokumentation)</li> <li class="fragment"><code class="svelte-1322xwn">Fil</code> - Egen lösning med JSON/CSV-format</li> <li class="fragment"><code class="svelte-1322xwn">Supabase</code> - liknar firebase, för dig med tidigare erfarenhet.</li> <li class="fragment">Eller din egen preferens</li></ul> <li class="fragment">Referenskod finns på GitHub</li> <li class="fragment">Vi examinerar funktionaliteten (persistent datalagring), inte valet av strategi</li></ol>'),Se=i("<!> <!>",5),be=i(`<ul><li class="fragment">Extension Types: Skapar typsäkra wrappers</li> <li class="fragment">Extension Methods: Utökar befintliga klasser</li> <li class="fragment">Grundläggande exempel</li> <li class="fragment">Varför använda extension types?</li> <ul><li class="fragment">Typsäkerhet utan runtime overhead (skapas inga objekt)</li></ul> <li class="fragment">Varför använda extension methods?</li> <ul><li class="fragment">Utöka funktionalitet utan att nyttja arv</li> <li class="fragment">Du slipper skapa t.ex. MyList för att lägga till dina uppdateringar till en vanlig
							List.</li></ul></ul> <div><div class="enter"><!></div></div>`,1),xe=i("<!> <!>",5),we=i('<ul><li class="fragment">Återanvänd kod utan arv</li> <li class="fragment">Exempelkod</li> <li class="fragment">Fördelar med mixins:</li> <ul><li class="fragment">Dela funktionalitet mellan klasser</li> <li class="fragment">Undvik duplicerad kod</li> <li class="fragment">För att dela funktionalitet, ej state, instansvariabler osv.</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ee=i("<!> <!>",5),De=i('<ul><li class="fragment">Kraftfulla sätt att arbeta med data</li> <li class="fragment">Matchning och destrukturering</li> <li class="fragment">Grundläggande patterns</li> <li class="fragment">Fördelar med patterns:</li> <ul><li class="fragment">Tydligare dataextraktion</li> <li class="fragment">Säkrare kontrollflöde</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ie=i("<!> <!>",5),Ae=i('<ul><li class="fragment">Exempel på avancerade patterns</li> <li class="fragment">Pattern matching med sealed klasser</li> <li class="fragment">Logiska OR-mönster med shared guards</li></ul> <div><div class="enter"><!></div></div>',1),Me=i("<!> <!>",5),Fe=i('<ul><li class="fragment">Single-threaded men asynkron modell</li> <li class="fragment">Hur async funktioner kan köras "parallellt"</li> <li class="fragment">Prioriteringssystem med flera köer:</li> <ul><li class="fragment">Microtask Queue (högst prioritet)</li> <li class="fragment">Event Queue (standard prioritet)</li></ul> <li class="fragment">Event Loop exekveringsordning</li> <li class="fragment">Användarinput prioriteras i event queue</li></ul> <div><div class="enter"><!></div></div>',1),Le=i("<!> <!>",5),Te=i('<ul><li class="fragment">När event loop inte räcker till</li> <li class="fragment">Darts sätt att hantera äkta parallellism</li> <li class="fragment">Separat minne för varje isolate</li> <li class="fragment">Grundläggande exempel med Isolate.run()</li> <li class="fragment">Fördelar jämfört med async/await:</li> <ul><li class="fragment">Äkta parallell exekvering</li> <li class="fragment">CPU-intensiva uppgifter blockerar inte UI</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ue=i("<!> <!>",5),Ce=i('<ul><li class="fragment">Kommunikation via message passing</li> <li class="fragment">Kontinuerlig dataström med streams</li> <li class="fragment">SendPort och ReceivePort</li> <li class="fragment">Kontinuerlig dataström mellan isolates</li> <li class="fragment">Mer avancerat än Isolate.run()</li> <li class="fragment">Perfekt för realtidsdata och långvariga processer</li></ul> <div><div class="enter"><!></div></div>',1),Ne=i("<!> <!>",5),je=i('<ul><li class="fragment">Moderna Dart-koncept vi har utforskat:</li> <ul><li class="fragment">Extensions - utöka befintliga klasser utan arv</li> <li class="fragment">Extension Types - typsäkra wrappers utan runtime overhead</li> <li class="fragment">Mixins - återanvändbar funktionalitet mellan klasser</li> <li class="fragment">Patterns - kraftfull datahantering och matchning</li> <li class="fragment">Event Loop - asynkron exekvering på en tråd</li> <li class="fragment">Isolates - äkta parallellism för krävande uppgifter</li></ul></ul> <ul><li class="fragment">Uppmaningar:</li> <ul><li class="fragment">Använd patterns för tydligare dataextraktion</li> <li class="fragment">Tänk på din event loop för bättre responsive UI</li> <li class="fragment">Använd mixins för att dela funktionalitet, inte state</li> <li class="fragment">Nyttja extension methods istället för utility-klasser</li> <li class="fragment">Använd isolates för CPU-intensiva operationer</li> <li class="fragment">Minimera datamängden som skickas mellan isolates</li> <li class="fragment">I Flutter: compute() förenklar isolate-användning</li></ul></ul>',1),qe=i("<!> <!>",5),Ke=i('<div class="mt-60 text-center">Det var allt för idag!</div>'),Ve=i("<!> <!>",5),Qe=i('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Ze(ie){const se={year:"numeric",month:"long",day:"numeric"},oe=new Date().toLocaleDateString("sv-SE",se);let j,q,K,V,Q,R,G,c=fe(!1);var H=I(!0),de=n(H);pe(de,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ue,Ge)=>{var O=Qe(),B=n(O);_e(B,{});var z=e(e(B,!0));S(z,{children:(s,w)=>{var a=ke(),t=n(a);b(t,{title:"Föreläsning 5 - Avslutning Dart-kursen"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=$e();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var J=e(e(z,!0));S(J,{children:(s,w)=>{var a=ye(),t=n(a);b(t,{title:"Nästa vecka"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=he();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var W=e(e(J,!0));S(W,{children:(s,w)=>{var a=Se(),t=n(a);b(t,{title:"Persistent Datalagring i Uppgift 2"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=Pe();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var X=e(e(W,!0));S(X,{in:async()=>{_(c,!1),await j.update``},children:(s,w)=>{var a=xe(),t=n(a);b(t,{title:"Extensions i Dart"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=be(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(y,!0)),k=e(e(m,!0)),p=u(k),P=u(p);U(C(P,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),D=>j=D,()=>j),F(()=>p.hidden=!L(c)),T("current",$,async()=>{_(c,!0),await j.update`// Extension Type - t.ex. ålder
extension type Age(int value) {
  // Begränsar vad som kan göras med åldern
  bool isAdult() => value >= 18;
}

// Extension Method - Utökar String
extension StringHelper on String {
  bool isValidEmail() => 
    contains('@') && contains('.');
}

void main() {
  // Extension Type användning
  var age = Age(20);
  print(age.isAdult());  // true
  // age + 1;  // Kompileringsfel!

  // Extension Method användning
  var email = "test@example.com";
  print(email.isValidEmail());  // true
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var Y=e(e(X,!0));S(Y,{in:async()=>{_(c,!1),await q.update``},children:(s,w)=>{var a=Ee(),t=n(a);b(t,{title:"Mixins - Återanvändbar Funktionalitet"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=we(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(m,!0)),k=u($),p=u(k);U(C(p,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),P=>q=P,()=>q),F(()=>k.hidden=!L(c)),T("current",y,async()=>{_(c,!0),await q.update`mixin Loggable {
  void log(String message) {
    print(DateTime.now().toString() + ': $message');
  }
}

class UserService with Loggable {
  void createUser(String name) {
    log('Creating user: $name');
    // ... användarlogik här
  }
}

class PaymentService with Loggable {
  void processPayment(double amount) {
    log('Processing payment: \$$amount');
    // ... betalningslogik här
  }
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var Z=e(e(Y,!0));S(Z,{in:async()=>{_(c,!1),await K.update``},children:(s,w)=>{var a=Ie(),t=n(a);b(t,{title:"Patterns - Modern Datahantering"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=De(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(y,!0)),k=e(e(m,!0)),p=u(k),P=u(p);U(C(P,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),D=>K=D,()=>K),F(()=>p.hidden=!L(c)),T("current",$,async()=>{_(c,!0),await K.update`// Object destructuring
var user = {'name': 'Anna', 'age': 30};
var {'name': name, 'age': age} = user;
print(name);  // Anna
print(age);  // 30
// List patterns med rest
var numbers = [1, 2, 3, 4, 5];
var [first, second, ...rest] = numbers;
print(second);  // 2
// Switch pattern matching (matchar på objekt)
String getDeviceType(Map<String, dynamic> device) =>
  switch (device) {
    {'type': 'mobile', 'os': 'iOS'} => 'iPhone',
    {'type': 'mobile', 'os': 'Android'} => 'Android',
    _ => 'Unknown'
  };`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var ee=e(e(Z,!0));S(ee,{in:async()=>{_(c,!1),await Q.update``},children:(s,w)=>{var a=Me(),t=n(a);b(t,{title:"Patterns - Avancerade Matchningar"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=Ae(),m=n(v),h=u(m),y=e(e(m,!0)),$=u(y),k=u($);U(C(k,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),p=>Q=p,()=>Q),F(()=>$.hidden=!L(c)),T("current",h,async()=>{_(c,!0),await Q.update`// Pattern matching med sealed klasser
sealed class Shape {}

class Square implements Shape {
  final double length;
  Square(this.length);
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
}

// Komplett matchning garanterad av kompilatorn
double calculateArea(Shape shape) => switch (shape) {
      Square(length: var l) => l * l,
      Circle(radius: var r) => math.pi * r * r,
    };

main() {
  Shape shape = Square(10);

// Logical-OR pattern med delad guard
  switch (shape) {
    case Square(length: var x) || Circle(radius: var x) when x > 0:
      print('Non-empty symmetric shape');
    case _:
      print('Unknown shape');
  }
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var ae=e(e(ee,!0));S(ae,{in:async()=>{_(c,!1),await R.update``},children:(s,w)=>{var a=Le(),t=n(a);b(t,{title:"Event Loop - Hjärtat av Asynkron Dart"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=Fe(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(y,!0)),k=e(e($,!0)),p=e(e(k,!0)),P=e(e(m,!0)),D=u(P),N=u(D);U(C(N,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),ge=>R=ge,()=>R),F(()=>D.hidden=!L(c)),T("current",p,async()=>{_(c,!0),await R.update`import 'dart:async';

void main() {
  print('1. Synkron kod körs först');
  
  // Event queue (lägre prioritet)
  Future(() {
    print('4. Event queue task');
  });
  
  Future.delayed(Duration(milliseconds: 50), () {
    print('5. Delayed event körs sist');
  });
  
  // Microtask queue (högre prioritet)
  scheduleMicrotask(() {
    print('3. Microtask körs före alla event queue tasks');
  });
  
  print('2. Mer synkron kod');
  
  // Utskrift:
  // 1. Synkron kod körs först
  // 2. Mer synkron kod
  // 3. Microtask körs före alla event queue tasks
  // 4. Event queue task
  // 5. Delayed event körs sist
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var te=e(e(ae,!0));S(te,{in:async()=>{_(c,!1),await V.update``},children:(s,w)=>{var a=Ue(),t=n(a);b(t,{title:"Isolates - Parallell Exekvering"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=Te(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(y,!0)),k=e(e($,!0)),p=e(e(m,!0)),P=u(p),D=u(P);U(C(D,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),N=>V=N,()=>V),F(()=>P.hidden=!L(c)),T("current",k,async()=>{_(c,!0),await V.update`import 'dart:isolate';
// Tung beräkning i separat isolate
Future<int> heavyComputation() async {
  return await Isolate.run(() {
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  });
}
void main() async {
  print('Startar beräkning...');
 
  // Kör beräkningen på en separat isolate som inte blockerar huvudtråden(main isolate)
  final result = await heavyComputation();
 
  print('Resultat: $result');
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var re=e(e(te,!0));S(re,{in:async()=>{_(c,!1),await G.update``},children:(s,w)=>{var a=Ne(),t=n(a);b(t,{title:"Isolates - Kontinuerlig Kommunikation"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=Ce(),m=n(v),h=u(m),y=e(e(h,!0)),$=e(e(y,!0)),k=e(e($,!0)),p=e(e(m,!0)),P=u(p),D=u(P);U(C(D,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),N=>G=N,()=>G),F(()=>P.hidden=!L(c)),T("current",k,async()=>{_(c,!0),await G.update`import 'dart:isolate';

// Funktion som körs i en separat isolate
void generateDataStream(SendPort sendPort) async {
  for (int i = 1; i <= 10; i++) {
    await Future.delayed(Duration(milliseconds: 200));

    // Skicka data kontinuerligt tillbaka till main isolate
    sendPort.send(i);
  }
}

void main() async {
  final receivePort = ReceivePort();

  print('Startar dataström från separat isolate...');

  final isolate = await Isolate.spawn(generateDataStream, receivePort.sendPort);

  // Lyssna på kontinuerlig dataström
  await for (final data in receivePort) {
    if (data == 10) {
      print('Dataström komplett');
      break;
    }
    print('Mottog data: ' + data.toString());
  }

  // Städa upp
  receivePort.close();
  isolate.kill();
}`},!1),r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var le=e(e(re,!0));S(le,{in:async()=>{_(c,!1)},children:(s,w)=>{var a=qe(),t=n(a);b(t,{title:"Sammanfattning - Avancerad Dart"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=I(!0),g=n(l);A(g,{children:(f,M)=>{var v=je();r(f,v)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var ne=e(e(le,!0));S(ne,{children:(s,w)=>{var a=Ve(),t=n(a);b(t,{title:"Tack för idag!"});var o=e(e(t,!0));x(o,{children:(d,E)=>{var l=Ke();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var ce=e(e(ne,!0)),ve=u(ce),me=u(ve);me.nodeValue=oe,r(ue,O)},$$slots:{default:!0}}),r(ie,H)}export{Ze as component};
