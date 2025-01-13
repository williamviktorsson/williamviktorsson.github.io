import{i as T,f as l,t as v,j as i,k as a,g as r}from"../chunks/disclose-version.BmIQt7z6.js";import{s as e,B as K,z as L,f as ra}from"../chunks/runtime.Bix74eL6.js";import{e as n}from"../chunks/render.DlfULs-I.js";import{b as M}from"../chunks/this.wyHJEu0o.js";import{C as H}from"../chunks/code.seIn7Zd2.js";import{P as na,S as j,T as C,C as G}from"../chunks/content.DTFQcm-x.js";/* empty css                                                       */import{S as R}from"../chunks/split.B0OcPuxR.js";var la=v('<ul><li class="fragment">Varför är null safety viktigt?</li> <ol><li class="fragment">Förhindrar null reference errors</li> <li class="fragment">Tilldelning av null</li></ol> <li class="fragment">Viktiga koncept</li> <ol><li class="fragment">Null-aware operators (?, !, ??)</li> <li class="fragment">Late initialization</li></ol></ul> <div><div class="enter"><!></div></div>',1),ia=v("<!> <!>",5),sa=v('<ul><li class="fragment">Flow Analysis och Type Promotion</li> <ol><li class="fragment">Dart "type promotear" non-nullability inom null-kontroller</li></ol> <li class="fragment">Bästa praxis</li> <ol><li class="fragment">Minimera användningen av null assertion operator (!)</li> <li class="fragment">Utnyttja null-aware operators effektivt</li></ol></ul> <div><div class="enter"><!></div></div>',1),oa=v("<!> <!>",5),ua=v(`<div class="mt-60 text-center">Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!</div>`),da=v("<!> <!>",5),ma=v('<!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function ya(q){const O={year:"numeric",month:"long",day:"numeric"},Q=new Date().toLocaleDateString("sv-SE",O);let s,d,t=ra(!1);var I=T(!0),W=i(I);na(W,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(X,ca)=>{var U=ma(),F=i(U);j(F,{in:()=>{e(t,!1)},children:(c,E)=>{var o=ia(),u=i(o);C(u,{title:"Null Safety i Dart: Grunderna"});var f=a(a(u,!0));G(f,{children:(p,J)=>{var m=T(!0),x=i(m);R(x,{children:(A,ta)=>{var g=la(),_=i(g),N=r(_),$=a(a(N,!0)),h=r($),b=a(a(h,!0)),y=a(a($,!0)),S=a(a(y,!0)),k=r(S),D=a(a(k,!0)),w=a(a(_,!0)),P=r(w),B=r(P);M(H(B,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),ea=>s=ea,()=>s),K(()=>P.hidden=!L(t)),n("current",N,async()=>{e(t,!1),await s.update``},!1),n("current",h,async()=>{e(t,!0),await s.update`// Utan null safety
String namn;
print(namn.length); // Potentiellt runtime-fel

// Med null safety
String? namn;
print(namn?.length); // Säkert, skriver ut null om namn är null

String ickeNullbartNamn = 'Johan';
print(ickeNullbartNamn.length); // Alltid säkert`},!1),n("current",b,async()=>{e(t,!0),await s.update`// Nullable typ
int? nullbartNummer = null;

// Non-nullable typ
int ickeNullbartNummer = 42;

// Fel: Kan inte tilldela null till en non-nullable typ
// int ickeNullbartNummer = null;`},!1),n("current",y,async()=>{e(t,!1),await s.update``},!1),n("current",k,async()=>{e(t,!0),await s.update`// Null-aware operator (?.)
String? namn = null;
print(namn?.length); // Säkert, skriver ut null

// Null assertion operator (!)
String? nullbartNamn = 'Johan';
String ickeNullbartNamn = nullbartNamn!; // Kastar exception om nullbartNamn är null

// Null-coalescing operator (??)
String? namn;
String visningsNamn = namn ?? 'Gäst';`},!1),n("current",D,async()=>{e(t,!0),await s.update`late String beskrivning;

void initieraBeskrivning() {
    beskrivning = 'Detta initieras senare';
}

void användBeskrivning() {
    initieraBeskrivning();
    print(beskrivning); // Säkert att använda nu
}`},!1),l(A,g)},$$slots:{default:!0}}),l(p,m)},$$slots:{default:!0}}),l(c,o)},$$slots:{default:!0}});var V=a(a(F,!0));j(V,{in:()=>{e(t,!1)},children:(c,E)=>{var o=oa(),u=i(o);C(u,{title:"Null Safety i Dart: Avancerade ämnen"});var f=a(a(u,!0));G(f,{children:(p,J)=>{var m=T(!0),x=i(m);R(x,{children:(A,ta)=>{var g=sa(),_=i(g),N=r(_),$=a(a(N,!0)),h=r($),b=a(a($,!0)),y=a(a(b,!0)),S=r(y),k=a(a(S,!0)),D=a(a(_,!0)),w=r(D),P=r(w);M(H(P,{code:"",theme:"catppuccin-frappe",lang:"dart",autoIndent:!0,options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0},class:"overflow-y-clip"}),B=>d=B,()=>d),K(()=>w.hidden=!L(t)),n("current",N,async()=>{e(t,!1),await d.update``},!1),n("current",h,async()=>{e(t,!0),await d.update`void bearbetaNamn(String? namn) {
    if (namn != null) {
        // namn befordras till non-nullable String
        print(namn.length);
    } else {
        print('Namnet är null');
    }
}`},!1),n("current",b,async()=>{e(t,!1),await d.update``},!1),n("current",S,async()=>{e(t,!0),await d.update`// Undvik att använda ! när det är möjligt
String? nullbartNamn = hämtaNamn();
String namn = nullbartNamn!; // Riskabelt

// Bättre tillvägagångssätt
String? nullbartNamn = hämtaNamn();
if (nullbartNamn != null) {
    String namn = nullbartNamn; // Säkert
} else {
    // Hantera null-fallet
}`},!1),n("current",k,async()=>{e(t,!0),await d.update`// Använd ?? för default values
String? namn;
String visningsNamn = namn ?? 'Gäst';

// Använd ??= för null-aware assignment
String? namn;
namn ??= 'Gäst';`},!1),l(A,g)},$$slots:{default:!0}}),l(p,m)},$$slots:{default:!0}}),l(c,o)},$$slots:{default:!0}});var z=a(a(V,!0));j(z,{children:(c,E)=>{var o=da(),u=i(o);C(u,{title:"Tack för idag!"});var f=a(a(u,!0));G(f,{children:(p,J)=>{var m=ua();l(p,m)},$$slots:{default:!0}}),l(c,o)},$$slots:{default:!0}});var Y=a(a(z,!0)),Z=r(Y),aa=r(Z);aa.nodeValue=Q,l(X,U)},$$slots:{default:!0}}),l(q,I)}export{ya as component};
