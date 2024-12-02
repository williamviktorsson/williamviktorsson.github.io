import{i as I,f as r,t as v,j as n,k as e,g as o}from"../chunks/disclose-version.BmIQt7z6.js";import{s as l,B as L,z as M,f as oe}from"../chunks/runtime.Bix74eL6.js";import{e as h}from"../chunks/render.DlfULs-I.js";import{b as U}from"../chunks/this.wyHJEu0o.js";import{C as E}from"../chunks/code.seIn7Zd2.js";import{P as de,S as P,T as w,C}from"../chunks/content.DTFQcm-x.js";import{F as ue}from"../chunks/front.DnDuSa6w.js";import{S as H}from"../chunks/split.B0OcPuxR.js";var ce=v('<ol><li class="fragment">Persistera gömda vyer</li> <li class="fragment">Provider (dependency injection - DI)</li> <li class="fragment">Responsiv design</li> <li class="fragment">Animationer</li> <li class="fragment">Theming</li></ol>'),ve=v("<!> <!>",5),me=v('<ul><li class="fragment">Behåll tillstånd i TabView/PageView</li> <li class="fragment">IndexedStack för att behålla vyer i minnet</li> <li class="fragment">Spara scroll position</li></ul> <div><div class="enter"><!></div></div>',1),fe=v("<!> <!>",5),ge=v(`<ul><li class="fragment">Problem utan DI:</li> <ul><li class="fragment">Tight coupling - onödig komposition osv.</li> <li class="fragment">Svårt och mödosamt att dela instanser mellan widgets</li></ul> <li class="fragment">Fördelar med DI:</li> <ul><li class="fragment">Lättare att testa - kan injecta mock-objekt</li> <li class="fragment">Loose coupling - widgets behöver inte veta hur services skapas eller bero på att de
							redan ska existera</li> <li class="fragment">Enklare att dela tillstånd och services mellan widgets</li></ul> <li class="fragment"><strong>Provider</strong> är Flutters rekommenderade DI-lösning, finns dock många fler populära, som
						t.ex. Riverpod</li> <ul><li class="fragment">Bloc som ni kommer använda senare bygger vidare på Provider och är en mer fullfjädrad
							state-management lösning</li></ul></ul> <div><div class="enter"><!></div></div>`,1),pe=v("<!> <!>",5),he=v('<ul><li class="fragment">Grundläggande Provider setup</li> <li class="fragment">ChangeNotifierProvider för tillståndshantering</li></ul> <div><div class="enter"><!></div></div>',1),_e=v("<!> <!>",5),$e=v('<ul><li class="fragment">Anpassa layout baserat på skärmstorlek</li> <li class="fragment">LayoutBuilder för flexibel layout</li></ul> <div><div class="enter"><!></div></div>',1),ye=v("<!> <!>",5),xe=v('<ul><li class="fragment">Hero animationer</li> <li class="fragment">Anpassade page transitions</li> <li class="fragment">Implicit animationer</li></ul> <div><div class="enter"><!></div></div>',1),Se=v("<!> <!>",5),be=v('<ul><li class="fragment">Material 3 theming</li> <li class="fragment">Anpassa specifika tema-komponenter</li> <li class="fragment">Använda tema i widgets</li></ul> <div><div class="enter"><!></div></div>',1),Pe=v("<!> <!>",5),we=v('<div class="mt-60 text-center">Demo time!</div>'),Ce=v("<!> <!>",5),ke=v('<!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function He(ee){const te={year:"numeric",month:"long",day:"numeric"},re=new Date().toLocaleDateString("sv-SE",te);let D,j,N,F,W,B,t=oe(!1);var R=I(!0),ae=n(R);de(ae,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ie,Te)=>{var V=ke(),z=n(V);ue(z,{});var q=e(e(z,!0));P(q,{children:(m,k)=>{var a=ve(),i=n(a);w(i,{title:"Dagens agenda"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=ce();r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var Q=e(e(q,!0));P(Q,{in:async()=>{l(t,!1),await D.update``},children:(m,k)=>{var a=fe(),i=n(a);w(i,{title:"Persistera gömda vyer"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=me(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(_,!0)),$=e(e(u,!0)),p=o($),b=o(p);U(E(b,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>D=T,()=>D),L(()=>p.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await D.update`// Använd AutomaticKeepAliveClientMixin för att behålla tillståndet
class _MyWidgetState extends State<MyWidget> with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => true;

  @override
  Widget build(BuildContext context) {
    super.build(context); // Viktigt! Måste anropas först
    return YourWidget();
  }
}`},!1),h("current",_,async()=>{l(t,!0),await D.update`// Exempel på IndexedStack för att behålla flera vyer
IndexedStack(
  index: _selectedIndex,
  children: [
    HomeView(),
    ProfileView(),
    SettingsView(),
  ],
)`},!1),h("current",S,async()=>{l(t,!0),await D.update`// Använd PageStorageKey för att spara scroll position
ListView(
  key: PageStorageKey('uniqueKey'),
  children: [
    // Lista med items
  ],
)`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var G=e(e(Q,!0));P(G,{in:async()=>{l(t,!1),await j.update``},children:(m,k)=>{var a=pe(),i=n(a);w(i,{title:"Dependency Injection (DI) - Koncept"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=ge(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(_,!0)),$=e(e(u,!0)),p=o($),b=o(p);U(E(b,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>j=T,()=>j),L(()=>p.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await j.update`// Utan DI - hårdkodade beroenden
class UserScreen extends StatelessWidget {

  // UserService och AuthService skickas in i eller skapas i konstruktorn

  final UserService userService;
  final AuthService authService;

  UserScreen({required this.userService, required this.authService});
  
  @override
  Widget build(BuildContext context) {
    return Container(); // UI implementation
  }
}`},!1),h("current",S,async()=>{l(t,!0),await j.update`// Med DI - beroenden injiceras
class UserScreen extends StatelessWidget {
    
  @override
  Widget build(BuildContext context) {
    // Använd context för att hämta injicerade beroenden
    final userService = context.read<UserService>();
    final authService = context.read<AuthService>();
    return Container(); // UI implementation
  }
}`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var O=e(e(G,!0));P(O,{in:async()=>{l(t,!1),await N.update``},children:(m,k)=>{var a=_e(),i=n(a);w(i,{title:"Provider (DI)"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=he(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(u,!0)),$=o(S),p=o($);U(E(p,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),b=>N=b,()=>N),L(()=>$.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await N.update`// Definiera en service
class AuthService {
  Future<User?> getCurrentUser() async {
    // Implementation
  }
}

// Skapa provider
final authProvider = Provider<AuthService>(
  create: (_) => AuthService(),
  child: HomeScreen(),
);

// Använd i widget med context.watch/read
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Hämtar AuthService från provider
    final authService = context.read<AuthService>();
    
    return ElevatedButton(
      onPressed: () {
        // Läser värdet utan att lyssna (används i event handlers)
        final authService = context.read<AuthService>();
        authService.getCurrentUser();
      },
      child: Text('Hämta användare'),
    );
  }
}`},!1),h("current",_,async()=>{l(t,!0),await N.update`// ChangeNotifier för state-uppdateringar
class Counter extends ChangeNotifier {
  int _count = 0;
  int get count => _count;
  
  void increment() {
    _count++;
    notifyListeners();
  }
  
  void decrement() {
    _count--;
    notifyListeners();
  }
}

// Skapa provider
final counterProvider = ChangeNotifierProvider<Counter>(
  create: (_) => Counter(),
  child: CounterWidget(),
);

// Användning i widget
class CounterWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Lyssnar på Counter ändringar
    final counter = context.watch<Counter>();
    
    return Column(
      children: [
        Text(counter.count.toString()),
        ElevatedButton(
          onPressed: () {
            // Läser Counter utan att lyssna
            context.read<Counter>().increment();
          },
          child: Text('Öka'),
        ),
      ],
    );
  }
}`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var Y=e(e(O,!0));P(Y,{in:async()=>{l(t,!1),await F.update``},children:(m,k)=>{var a=ye(),i=n(a);w(i,{title:"Responsiv design"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=$e(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(u,!0)),$=o(S),p=o($);U(E(p,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),b=>F=b,()=>F),L(()=>$.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await F.update`// Använd MediaQuery för att få skärmstorlek
Widget build(BuildContext context) {
  final size = MediaQuery.of(context).size;
  final isTablet = size.width >= 600;
  
  return Row(
    children: [
      if (isTablet) 
        Expanded(
          flex: 1,
          child: SideMenu(),
        ),
      Expanded(
        flex: 2,
        child: MainContent(),
      ),
    ],
  );
}`},!1),h("current",_,async()=>{l(t,!0),await F.update`// Använd LayoutBuilder för mer precis kontroll
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth < 600) {
      return MobileLayout();
    } else if (constraints.maxWidth < 900) {
      return TabletLayout();
    } else {
      return DesktopLayout();
    }
  },
)`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var J=e(e(Y,!0));P(J,{in:async()=>{l(t,!1),await W.update``},children:(m,k)=>{var a=Se(),i=n(a);w(i,{title:"Animationer"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=xe(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(_,!0)),$=e(e(u,!0)),p=o($),b=o(p);U(E(b,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>W=T,()=>W),L(()=>p.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await W.update`// Hero animation mellan två vyer
// Första vyn
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/image.jpg'),
);

// Andra vyn
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/image.jpg'),
);`},!1),h("current",_,async()=>{l(t,!0),await W.update`// Anpassad page transition
class CustomPageRoute extends PageRouteBuilder {
  final Widget child;
  
  CustomPageRoute({required this.child})
    : super(
        pageBuilder: (context, animation, secondaryAnimation) => child,
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeTransition(
            opacity: animation,
            child: child,
          );
        },
      );
}`},!1),h("current",S,async()=>{l(t,!0),await W.update`// Implicit animation
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  width: isExpanded ? 200.0 : 100.0,
  height: isExpanded ? 200.0 : 100.0,
  color: isExpanded ? Colors.blue : Colors.red,
  child: FlutterLogo(),
)`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var X=e(e(J,!0));P(X,{in:async()=>{l(t,!1),await B.update``},children:(m,k)=>{var a=Pe(),i=n(a);w(i,{title:"Theming"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=I(!0),y=n(s);H(y,{children:(x,K)=>{var d=be(),u=n(d),c=o(u),_=e(e(c,!0)),S=e(e(_,!0)),$=e(e(u,!0)),p=o($),b=o(p);U(E(b,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>B=T,()=>B),L(()=>p.hidden=!M(t)),h("current",c,async()=>{l(t,!0),await B.update`// Konfigurera Material 3 tema
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.light,
    ),
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.dark,
    ),
  ),
)`},!1),h("current",_,async()=>{l(t,!0),await B.update`// Anpassat tema
final customTheme = ThemeData(
  textTheme: TextTheme(
    headlineLarge: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.bold,
      color: Colors.blue,
    ),
    bodyMedium: TextStyle(
      fontSize: 16,
      color: Colors.black87,
    ),
  ),
  // Andra tema-inställningar
);`},!1),h("current",S,async()=>{l(t,!0),await B.update`// Använd tema i widgets
Text(
  'Rubrik',
  style: Theme.of(context).textTheme.headlineLarge,
),`},!1),r(x,d)},$$slots:{default:!0}}),r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var Z=e(e(X,!0));P(Z,{children:(m,k)=>{var a=Ce(),i=n(a);w(i,{title:"Demo time?"});var f=e(e(i,!0));C(f,{children:(g,A)=>{var s=we();r(g,s)},$$slots:{default:!0}}),r(m,a)},$$slots:{default:!0}});var ne=e(e(Z,!0)),se=o(ne),le=o(se);le.nodeValue=re,r(ie,V)},$$slots:{default:!0}}),r(ee,R)}export{He as component};
