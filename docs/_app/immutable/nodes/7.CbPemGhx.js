import{f as A,g as r,t as i,i as n,j as e,k as u}from"../chunks/disclose-version.BAOoFInd.js";import{s as p,B as L,z as C,f as ie}from"../chunks/runtime.Bix74eL6.js";import{e as N}from"../chunks/render.DvSWKrhB.js";import{b as M}from"../chunks/this.wyHJEu0o.js";import{S as j,C as V}from"../chunks/split.DmvM2kU1.js";import{P as se,S as _,T as $,C as h}from"../chunks/content.Cka6NWLM.js";import{F as oe}from"../chunks/front.DzTqcsJY.js";var de=i('<ol><li class="fragment">Avancerade Dart-koncept</li> <ul><li class="fragment">extension types</li> <li class="fragment">mixins</li> <li class="fragment">extension methods</li> <li class="fragment">patterns</li> <ul><li class="fragment">object desctructuring</li> <li class="fragment">rest element</li> <li class="fragment">if-case</li></ul> <li class="fragment">isolates</li></ul> <li class="fragment">Inget som examineras under Dart-kursen som slutar bästa vecka (v.45)</li> <li class="fragment">Gott och blandat som kan dyka upp under Flutter-utveckling</li></ol>'),ue=i("<!> <!>",5),ce=i('<ol><li class="fragment">Ingen föreläsning</li> <li class="fragment">Bara handledning</li> <li class="fragment">Tid att göra klart uppgift 2 så alla är i fas inför Flutter.</li></ol>'),ge=i("<!> <!>",5),ve=i('<ol><li class="fragment">Ni är fria att implementera repositories med valfri persistent datalagringsstrategi</li> <li class="fragment">Anledning till ändringen:</li> <ul><li class="fragment">Undvika krav på nedladdning av osignerade exekverbara filer</li> <li class="fragment">ObjectBox har begränsningar kring datatyper och konstruktorer</li></ul> <li class="fragment">Tillgängliga strategier:</li> <ul><li class="fragment"><code class="svelte-1322xwn">ObjectBox</code> - För dig som är ny till databaser och vill ha en tillgänglig dokumentation</li> <li class="fragment"><code class="svelte-1322xwn">SQLite</code> - För dig med tidigare SQL/SQLite-erfarenhet</li> <ul><li class="fragment">Kan innebära visst dubbelarbete då Firebase är NoSQL</li></ul> <li class="fragment"><code class="svelte-1322xwn">Hive</code> - Enklare alternativ med tillräckliga exempel (trots begränsad dokumentation)</li> <li class="fragment"><code class="svelte-1322xwn">Fil</code> - Egen lösning med JSON/CSV-format</li> <li class="fragment">Eller din egen preferens</li></ul> <li class="fragment">Referenskod finns nu tillgänglig för samtliga strategier</li> <li class="fragment">Vi examinerar funktionaliteten (persistent datalagring), inte valet av strategi</li> <li class="fragment">Ursäkter till er som redan börjat med en lösning ni nu vill byta ut</li></ol>'),me=i("<!> <!>",5),fe=i('<ul><li class="fragment">Extension Types: Skapar typsäkra wrappers</li> <li class="fragment">Extension Methods: Utökar befintliga klasser</li> <li class="fragment">Grundläggande exempel</li> <li class="fragment">Varför använda extensions?</li> <ul><li class="fragment">Typsäkerhet utan runtime overhead</li> <li class="fragment">Utöka funktionalitet utan arv</li></ul></ul> <div><div class="enter"><!></div></div>',1),pe=i("<!> <!>",5),_e=i('<ul><li class="fragment">Återanvänd kod utan arv</li> <li class="fragment">Grundkoncept</li> <li class="fragment">Fördelar med mixins:</li> <ul><li class="fragment">Dela funktionalitet mellan klasser</li> <li class="fragment">Undvik duplicerad kod</li></ul></ul> <div><div class="enter"><!></div></div>',1),$e=i("<!> <!>",5),he=i('<ul><li class="fragment">Kraftfulla sätt att arbeta med data</li> <li class="fragment">Matchning och destrukturering</li> <li class="fragment">Grundläggande patterns</li> <li class="fragment">Fördelar med patterns:</li> <ul><li class="fragment">Tydligare dataextraktion</li> <li class="fragment">Säkrare kontrollflöde</li></ul></ul> <div><div class="enter"><!></div></div>',1),ke=i("<!> <!>",5),ye=i('<ul><li class="fragment">Darts sätt att hantera concurrency</li> <li class="fragment">Separat minne</li> <li class="fragment">Grundläggande exempel</li> <li class="fragment">Användningsområden:</li> <ul><li class="fragment">Tunga beräkningar</li> <li class="fragment">Parallell databehandling</li></ul></ul> <div><div class="enter"><!></div></div>',1),be=i("<!> <!>",5),xe=i('<div class="mt-60 text-center">Det var allt för idag!</div>'),Se=i("<!> <!>",5),Pe=i('<!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Ce(Y){const Z={year:"numeric",month:"long",day:"numeric"},ee=new Date().toLocaleDateString("sv-SE",Z);let D,F,U,I,c=ie(!1);var G=A(!0),ae=n(G);se(ae,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(te,Te)=>{var O=Pe(),K=n(O);oe(K,{});var Q=e(e(K,!0));_(Q,{children:(s,k)=>{var a=ue(),t=n(a);$(t,{title:"Föreläsning 5 - Avslutning Dart-kursen"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=de();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var H=e(e(Q,!0));_(H,{children:(s,k)=>{var a=ge(),t=n(a);$(t,{title:"Nästa vecka"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=ce();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var R=e(e(H,!0));_(R,{children:(s,k)=>{var a=me(),t=n(a);$(t,{title:"Uppdatering: Persistent Datalagring i Uppgift 2"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=ve();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var z=e(e(R,!0));_(z,{in:async()=>{p(c,!1),await D.update``},children:(s,k)=>{var a=pe(),t=n(a);$(t,{title:"Extensions i Dart"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=A(!0),b=n(l);j(b,{children:(x,B)=>{var g=fe(),v=n(g),S=u(v),P=e(e(S,!0)),w=e(e(P,!0)),f=e(e(v,!0)),m=u(f),T=u(m);M(V(T,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),E=>D=E,()=>D),L(()=>m.hidden=!C(c)),N("current",w,async()=>{p(c,!0),await D.update`// Extension Type - Typsäker ålder
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
}`},!1),r(x,g)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var J=e(e(z,!0));_(J,{in:async()=>{p(c,!1),await F.update``},children:(s,k)=>{var a=$e(),t=n(a);$(t,{title:"Mixins - Återanvändbar Funktionalitet"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=A(!0),b=n(l);j(b,{children:(x,B)=>{var g=_e(),v=n(g),S=u(v),P=e(e(S,!0)),w=e(e(v,!0)),f=u(w),m=u(f);M(V(m,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),T=>F=T,()=>F),L(()=>f.hidden=!C(c)),N("current",P,async()=>{p(c,!0),await F.update`mixin Loggable {
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
}`},!1),r(x,g)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var q=e(e(J,!0));_(q,{in:async()=>{p(c,!1),await U.update``},children:(s,k)=>{var a=ke(),t=n(a);$(t,{title:"Patterns - Modern Datahantering"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=A(!0),b=n(l);j(b,{children:(x,B)=>{var g=he(),v=n(g),S=u(v),P=e(e(S,!0)),w=e(e(P,!0)),f=e(e(v,!0)),m=u(f),T=u(m);M(V(T,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),E=>U=E,()=>U),L(()=>m.hidden=!C(c)),N("current",w,async()=>{p(c,!0),await U.update`// Object destructuring
var user = {'name': 'Anna', 'age': 30};
var {'name': name, 'age': age} = user;

// List patterns med rest
var numbers = [1, 2, 3, 4, 5];
var [first, second, ...rest] = numbers;

// Switch pattern matching
String getDeviceType(Map<String, dynamic> device) =>
  switch (device) {
    {'type': 'mobile', 'os': 'iOS'} => 'iPhone',
    {'type': 'mobile', 'os': 'Android'} => 'Android',
    _ => 'Unknown'
  };`},!1),r(x,g)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var W=e(e(q,!0));_(W,{in:async()=>{p(c,!1),await I.update``},children:(s,k)=>{var a=be(),t=n(a);$(t,{title:"Isolates - Parallell Exekvering"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=A(!0),b=n(l);j(b,{children:(x,B)=>{var g=ye(),v=n(g),S=u(v),P=e(e(S,!0)),w=e(e(P,!0)),f=e(e(v,!0)),m=u(f),T=u(m);M(V(T,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),E=>I=E,()=>I),L(()=>m.hidden=!C(c)),N("current",w,async()=>{p(c,!0),await I.update`import 'dart:isolate';

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
}`},!1),r(x,g)},$$slots:{default:!0}}),r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var X=e(e(W,!0));_(X,{children:(s,k)=>{var a=Se(),t=n(a);$(t,{title:"Tack för idag!"});var o=e(e(t,!0));h(o,{children:(d,y)=>{var l=xe();r(d,l)},$$slots:{default:!0}}),r(s,a)},$$slots:{default:!0}});var re=e(e(X,!0)),le=u(re),ne=u(le);ne.nodeValue=ee,r(te,O)},$$slots:{default:!0}}),r(Y,G)}export{Ce as component};
