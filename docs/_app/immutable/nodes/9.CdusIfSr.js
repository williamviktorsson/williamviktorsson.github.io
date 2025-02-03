import{i as N,f as a,t as s,j as u,k as l,g as j}from"../chunks/disclose-version.BmIQt7z6.js";import{P as X,S as f,T as d,C as c}from"../chunks/content.DTFQcm-x.js";import{F as E}from"../chunks/front.DnDuSa6w.js";var H=s('<ul><li class="fragment">Idag går vi igenom:</li> <ul><li class="fragment">Kodskydd och obfuskering</li> <li class="fragment">Web deployment med Firebase</li> <li class="fragment">App-ikoner och resurser för olika plattformar</li> <li class="fragment">Signering och distribution</li> <li class="fragment">App Store krav och review-process</li> <li class="fragment">Versionshantering och beta-distribution</li> <li class="fragment">CI/CD-verktyg</li> <li class="fragment">Plattformsspecifika konfigurationsfiler</li></ul></ul>'),J=s("<!> <!>",5),q=s('<ul><li class="fragment">Kommando för obfuskering:</li> <ul><li class="fragment"><code class="svelte-1322xwn">flutter build appbundle --obfuscate --split-debug-info=/admin_app/debug_info</code></li> <li class="fragment">byt ut <strong>admin_app</strong> mot namnet på din app</li> <li class="fragment">även <strong>debug_info</strong> kan du kalla något annat</li></ul> <li class="fragment">Fungerar på alla build targets utom web</li> <li class="fragment">Debugging av stacktrace:</li> <ul><li class="fragment">Kräver de-obfuskering med <code class="svelte-1322xwn">flutter symbolize -i &lt;symbol fil från debug_info mappen&gt;</code></li></ul></ul>'),Q=s("<!> <!>",5),Y=s('<ul><li class="fragment">Firebase deployment steg:</li> <ul><li class="fragment"><code class="svelte-1322xwn">firebase experiments:enable webframeworks</code></li> <li class="fragment"><code class="svelte-1322xwn">firebase init hosting</code></li> <li class="fragment"><code class="svelte-1322xwn">firebase deploy</code></li></ul> <li class="fragment">CLI förstår automatiskt framework-typen</li> <li class="fragment">Stödjer express/Next/angular/flutter</li></ul>'),Z=s("<!> <!>",5),ll=s('<ul><li class="fragment">Generera app-ikon för varje plattform</li> <li class="fragment">Specificera sökväg i plattformsspecifik konfig-fil</li> <li class="fragment">Sparas i plattformsspecifika resursmappar:</li> <ul><li class="fragment">Android: <code class="svelte-1322xwn">android/app/src/main/res/</code></li> <li class="fragment">iOS: <code class="svelte-1322xwn">ios/Runner/Assets.xcassets</code></li> <li class="fragment">Windows: <code class="svelte-1322xwn">windows/runner/resources/</code></li> <li class="fragment">Linux: <code class="svelte-1322xwn">snap/gui/</code></li></ul></ul>'),el=s("<!> <!>",5),rl=s(`<ul><li class="fragment">Krävs för alla plattformar utom Linux & web</li> <li class="fragment">Säkerställer betrodd utvecklare</li> <li class="fragment">Verifierar att appen inte modifierats efter bygge</li> <li class="fragment">Plattformsspecifik hantering:</li> <ul><li class="fragment">Android: Signering via build.gradle med signeringsnycklar från Google Play, används med
						--release flagga</li> <li class="fragment">iOS/macOS: Via App Store</li> <ul><li class="fragment">Appen signeras i samband med uppladdning</li></ul> <li class="fragment">Windows: Signeras vid uppladdning till Microsoft Store eller egen signering (<a href="https://docs.flutter.dev/platform-integration/windows/building#building-your-own-zip-file-for-windows" class="svelte-1322xwn">länk</a>)</li></ul></ul>`),al=s("<!> <!>",5),sl=s('<ul><li class="fragment">macOS: Möjligt att distribuera signerad .dmg utan developer-konto</li> <li class="fragment">iOS: .ipa kräver Apple Developer-konto</li> <li class="fragment">Linux: Primärt via Snap Store (<a href="https://snapcraft.io/" class="svelte-1322xwn">länk</a>)</li> <li class="fragment">Linux alternativ: .deb (Debian/Ubuntu) eller .rpm (Fedora)</li> <ul><li class="fragment">Kräver att du laddar ned ganska många buildsystem</li></ul> <li class="fragment">Windows: Microsoft Store eller egen .exe-distribution(zip med allt i) eller windows installer</li></ul>'),tl=s("<!> <!>",5),il=s('<ul><li class="fragment">Verifiera app/bundle ID:n i alla konfig-filer</li> <li class="fragment">ID:n måste matcha registrerade värden i:</li> <ul><li class="fragment">Respektive app store</li> <li class="fragment">API:er och tjänster</li> <li class="fragment">Alla plattformskonfigurationer</li></ul> <li class="fragment">Vid ID-ändring: Uppdatera överallt</li></ul>'),nl=s("<!> <!>",5),ol=s('<ul><li class="fragment">Uppdatera version i pubspec.yaml</li> <li class="fragment">Plattformsspecifika uppdateringar:</li> <ul><li class="fragment">Linux: snapcraft.yaml</li> <li class="fragment">iOS: XCode konfiguration</li></ul> <li class="fragment">Olika distributionskanaler:</li> <ul><li class="fragment">iOS/Android: beta/release/testing</li> <li class="fragment">Windows: "package flight" och "flight groups"</li></ul></ul>'),ul=s("<!> <!>",5),fl=s('<ul><li class="fragment">Omfattande app-beskrivningar krävs</li> <li class="fragment">Dokumentera:</li> <ul><li class="fragment">Användningsfall</li> <li class="fragment">Hårdvaru-API användning</li> <li class="fragment">Screenshots (landscape/portrait)</li></ul> <li class="fragment">Beta/testing före officiell release</li> <li class="fragment">iOS: TestFlight för beta (kräver separat app-installation)</li> <li class="fragment">Android: Direkt via Play Store som vanliga appar</li></ul>'),dl=s("<!> <!>",5),cl=s('<ul><li class="fragment">Krav för review:</li> <ul><li class="fragment">Testinloggningar</li> <li class="fragment">Navigationsguide</li> <li class="fragment">Användningsbeskrivning</li></ul> <li class="fragment">Juridiska krav:</li> <ul><li class="fragment">GDPR-dokumentation</li> <li class="fragment">Schrems 2 för tredjelandsöverföringar</li></ul></ul>'),gl=s("<!> <!>",5),ml=s(`<ul><li class="fragment">Följ alltid <a href="https://docs.flutter.dev/deployment" class="svelte-1322xwn">Flutter:s officiella deploymentguide</a></li> <li class="fragment">Codemagic för molnbaserad CI/CD</li> <ol><li class="fragment">Finns CLI open source redo att ladda ned som deras tjänst använder. Det kan du använda
						också för att bygga + deploya.</li> <li class="fragment">CLI verktyg: <a href="https://github.com/codemagic-ci-cd/cli-tools" class="svelte-1322xwn">Codemagic CLI tools</a></li></ol> <li class="fragment">Alternativ: <a href="https://docs.fastlane.tools/" class="svelte-1322xwn">Fastlane</a> med GitHub Actions</li> <li class="fragment">Windows-specifikt:</li> <ul><li class="fragment"><a href="https://pub.dev/packages/fluent_ui" class="svelte-1322xwn">fluent_ui</a> för Windows design</li> <li class="fragment"><a href="https://pub.dev/packages/fluentui_system_icons" class="svelte-1322xwn">fluentui_system_icons</a> för ikoner</li></ul></ul>`),pl=s("<!> <!>",5),vl=s('<ul><li class="fragment">android/app/build.gradle:</li> <ul><li class="fragment">App version</li> <li class="fragment">Build inställningar</li> <li class="fragment">Signing configs</li> <li class="fragment">Dependencies</li> <li class="fragment">SDK versioner</li></ul> <li class="fragment">android/app/src/main/AndroidManifest.xml:</li> <ul><li class="fragment">App permissions</li> <li class="fragment">App namn</li> <li class="fragment">Internet access inställningar</li> <li class="fragment">Övriga app-konfigurationer</li></ul> <li class="fragment">[project]/android/key.properties:</li> <ul><li class="fragment">Keystore information</li> <li class="fragment">Password referenser</li> <li class="fragment">Keystore filplats</li></ul> <li class="fragment">android/app/src/main/res/:</li> <ul><li class="fragment">App-ikoner i olika upplösningar</li> <li class="fragment">Launcher ikoner</li> <li class="fragment">Övriga resurser</li></ul></ul>'),$l=s("<!> <!>",5),_l=s('<ul><li class="fragment">ios/Runner/Info.plist:</li> <ul><li class="fragment">App permissions</li> <li class="fragment">Grundläggande app-konfigurationer</li> <li class="fragment">Display namn</li></ul> <li class="fragment">ios/Runner/Assets.xcassets:</li> <ul><li class="fragment">App-ikoner</li> <li class="fragment">Launch images</li></ul></ul>'),kl=s("<!> <!>",5),hl=s('<ul><li class="fragment">macos/Runner/Configs/AppInfo.xcconfig:</li> <ul><li class="fragment">Produktnamn</li> <li class="fragment">Bundle identifier</li></ul> <li class="fragment">macos/Runner.xcworkspace:</li> <ul><li class="fragment">Projektinställningar</li> <li class="fragment">Build konfigurationer</li></ul> <li class="fragment">macos/Runner/Assets.xcassets:</li> <ul><li class="fragment">App-ikoner</li> <li class="fragment">Resurser</li></ul></ul>'),bl=s("<!> <!>",5),Pl=s('<ul><li class="fragment">windows/runner/Runner.rc:</li> <ul><li class="fragment">App-ikon referenser</li> <li class="fragment">Versionsinformation</li></ul> <li class="fragment">windows/runner/resources/:</li> <ul><li class="fragment">App-ikoner (app_icon.ico)</li> <li class="fragment">Resursfiler</li></ul> <li class="fragment">pubspec.yaml (MSIX konfiguration):</li> <ul><li class="fragment">MSIX paketering</li> <li class="fragment">Versionsinformation</li> <li class="fragment">Display namn</li></ul></ul>'),wl=s("<!> <!>",5),xl=s('<ul><li class="fragment">snap/snapcraft.yaml:</li> <ul><li class="fragment">Snap konfiguration</li> <li class="fragment">App metadata</li> <li class="fragment">Build instruktioner</li> <li class="fragment">Dependencies</li></ul> <li class="fragment">snap/gui/:</li> <ul><li class="fragment">.desktop fil för app launcher</li> <li class="fragment">App-ikon (PNG format)</li> <li class="fragment">Menyintegration inställningar</li></ul></ul>'),yl=s("<!> <!>",5),Al=s('<ul><li class="fragment">pubspec.yaml:</li> <ul><li class="fragment">Versionsnummer (påverkar alla plattformar)</li> <li class="fragment">Grundläggande app-information</li> <li class="fragment">Dependencies</li> <li class="fragment">Plattformsspecifika konfigurationer</li></ul></ul>'),Sl=s("<!> <!>",5),Dl=s('<div class="mt-60 text-center">Det var allt för idag!</div>'),Il=s("<!> <!>",5),Kl=s('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function jl(V){const W={year:"numeric",month:"long",day:"numeric"},G=new Date().toLocaleDateString("sv-SE",W);var p=N(!0),M=u(p);X(M,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(T,Ll)=>{var v=Kl(),$=u(v);E($,{});var _=l(l($,!0));f(_,{children:(t,g)=>{var e=J(),r=u(e);d(r,{title:"Flutter Deployment - Översikt"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=H();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var k=l(l(_,!0));f(k,{children:(t,g)=>{var e=Q(),r=u(e);d(r,{title:"Kod-obfuskering"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=q();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var h=l(l(k,!0));f(h,{children:(t,g)=>{var e=Z(),r=u(e);d(r,{title:"Web Deployment"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=Y();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var b=l(l(h,!0));f(b,{children:(t,g)=>{var e=el(),r=u(e);d(r,{title:"App-ikoner och Resurser"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=ll();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var P=l(l(b,!0));f(P,{children:(t,g)=>{var e=al(),r=u(e);d(r,{title:"Signering av Applikationer"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=rl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var w=l(l(P,!0));f(w,{children:(t,g)=>{var e=tl(),r=u(e);d(r,{title:"Distribution per Plattform"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=sl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var x=l(l(w,!0));f(x,{children:(t,g)=>{var e=nl(),r=u(e);d(r,{title:"Konfiguration och ID:n"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=il();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var y=l(l(x,!0));f(y,{children:(t,g)=>{var e=ul(),r=u(e);d(r,{title:"Versionshantering"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=ol();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var A=l(l(y,!0));f(A,{children:(t,g)=>{var e=dl(),r=u(e);d(r,{title:"Mobil Distribution"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=fl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var S=l(l(A,!0));f(S,{children:(t,g)=>{var e=gl(),r=u(e);d(r,{title:"App Review Process"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=cl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var D=l(l(S,!0));f(D,{children:(t,g)=>{var e=pl(),r=u(e);d(r,{title:"CI/CD och lite om Windows"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=ml();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var I=l(l(D,!0));f(I,{children:(t,g)=>{var e=$l(),r=u(e);d(r,{title:"Android Konfigurationsfiler"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=vl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var K=l(l(I,!0));f(K,{children:(t,g)=>{var e=kl(),r=u(e);d(r,{title:"iOS Konfigurationsfiler"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=_l();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var C=l(l(K,!0));f(C,{children:(t,g)=>{var e=bl(),r=u(e);d(r,{title:"macOS Konfigurationsfiler"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=hl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var L=l(l(C,!0));f(L,{children:(t,g)=>{var e=wl(),r=u(e);d(r,{title:"Windows Konfigurationsfiler"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=Pl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var R=l(l(L,!0));f(R,{children:(t,g)=>{var e=yl(),r=u(e);d(r,{title:"Linux Konfigurationsfiler"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=xl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var F=l(l(R,!0));f(F,{children:(t,g)=>{var e=Sl(),r=u(e);d(r,{title:"Gemensam Konfigurationsfil"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=Al();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var O=l(l(F,!0));f(O,{children:(t,g)=>{var e=Il(),r=u(e);d(r,{title:"Tack för idag!"});var i=l(l(r,!0));c(i,{children:(n,m)=>{var o=Dl();a(n,o)},$$slots:{default:!0}}),a(t,e)},$$slots:{default:!0}});var B=l(l(O,!0)),U=j(B),z=j(U);z.nodeValue=G,a(T,v)},$$slots:{default:!0}}),a(V,p)}export{jl as component};
