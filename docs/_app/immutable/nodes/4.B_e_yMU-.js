import{i as b,f as r,t as n,j as l,k as e,g as i}from"../chunks/disclose-version.BmIQt7z6.js";import{s as $,B as w,z as I,f as oe}from"../chunks/runtime.Bix74eL6.js";import{e as T}from"../chunks/render.DlfULs-I.js";import{b as E}from"../chunks/this.wyHJEu0o.js";import{C as R}from"../chunks/code.seIn7Zd2.js";import{P as ce,S as k,T as S,C as P}from"../chunks/content.DTFQcm-x.js";import{F as ue}from"../chunks/front.DnDuSa6w.js";import{S as x}from"../chunks/split.B0OcPuxR.js";var de=n('<ol><li class="fragment">Vad är BLoC?</li> <li class="fragment">Arkitektur & Systemdesign</li> <li class="fragment">Events & States</li> <li class="fragment">Implementation</li> <li class="fragment">Testing</li> <li class="fragment">Intro uppgift 4</li></ol>'),ve=n("<!> <!>",5),me=n('<ul><li class="fragment">Business Logic Component - separerar logik från UI</li> <ul><li class="fragment">UI skickar Events</li> <li class="fragment">BLoC emitterar States</li> <li class="fragment">UI bygger som en funktion av senaste State</li></ul> <li class="fragment">Baserad på reactive programming med Streams</li> <li class="fragment">State management lösning</li></ul> <div><div class="enter"><!></div></div>',1),ge=n("<!> <!>",5),fe=n('<ul><li class="fragment">Events - Input till BLoC, beskriver actions</li> <li class="fragment">States - Output från BLoC, beskriver tillstånd</li> <li class="fragment">BLoC konverterar Events till States</li></ul> <div><div class="enter"><!></div></div>',1),pe=n("<!> <!>",5),_e=n('<ul><li class="fragment">BLoC Implementation</li> <li class="fragment"> </li> <li class="fragment">Emittera states som svar på events</li> <li class="fragment">Använd repository för data operations</li></ul> <div><div class="enter"><!></div></div>',1),he=n("<!> <!>",5),$e=n('<ul><li class="fragment">Testing med bloc_test package</li> <li class="fragment">Mocka repositories med Mocktail</li> <li class="fragment">Testa event handling och state transitions</li> <li class="fragment">Verifiera error handling</li></ul> <div><div class="enter"><!></div></div>',1),Be=n("<!> <!>",5),Ae=n('<ul><li class="fragment">BlocProvider för dependency injection</li> <li class="fragment">Två sätt att bygga UI: BlocBuilder eller context.watch</li> <li class="fragment">Switch expressions för clean state handling</li> <li class="fragment">context.read för att skicka events</li></ul> <div><div class="enter"><!></div></div>',1),ke=n("<!> <!>",5),Se=n('<ul><li class="fragment">Mål</li> <ul><li class="fragment">Refaktorera appen med BLoC för state management</li> <li class="fragment">Skriva tester för BLoC-komponenter</li> <li class="fragment">Använda Mocktail för att mocka repositories</li></ul> <li class="fragment">Huvudkomponenter att implementera</li> <ul><li class="fragment">VehicleBloc - hantering av fordon</li> <li class="fragment">ParkingBloc - hantering av aktiva parkeringar</li> <li class="fragment">ParkingSpaceBloc - hantering av parkeringsplatser</li> <li class="fragment">AuthBloc - hantering av inloggning/användare</li></ul> <li class="fragment">För varje BLoC behöver ni</li> <ul><li class="fragment">Definiera events (vad som händer)</li> <li class="fragment">Definiera states (appens tillstånd)</li> <li class="fragment">Implementera bloc-logik (hantering av events)</li></ul></ul>'),Pe=n("<!> <!>",5),ye=n(`<ul><li class="fragment">Struktur</li> <pre class="fragment"><code class="svelte-1322xwn">lib/
					  ├── blocs/            # Alla BLoC-komponenter
					  │   ├── vehicle/      # Event, State, BLoC-filer
					  │   ├── parking/      # för varje feature
					  │   └── ...
					  ├── repositories/     # Befintliga repositories
					  └── views/            # UI-komponenter</code></pre> <li class="fragment">Testing (G-krav)</li> <ul><li class="fragment">Minst ett test för success case per BLoC</li> <li class="fragment">Minst ett test för error case per BLoC</li> <li class="fragment">Mocka repositories med Mocktail</li> <li class="fragment">Använd blocTest för att testa logiken</li></ul> <li class="fragment">Tips</li> <ul><li class="fragment">Börja med en BLoC i taget - events, states, logik</li> <li class="fragment">Integrera UI med BlocProvider/BlocBuilder</li> <li class="fragment">För VG, välj minst 2 av extrakraven</li></ul></ul>`),Le=n("<!> <!>",5),be=n('<div class="mt-60 text-center">Demo time!</div>'),xe=n("<!> <!>",5),Ce=n('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function je(Y){const Z={year:"numeric",month:"long",day:"numeric"},ee=new Date().toLocaleDateString("sv-SE",Z);let U,F,M,D,V,v=oe(!1);var j=b(!0),te=l(j);ce(te,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ae,Ie)=>{var q=Ce(),N=l(q);ue(N,{});var W=e(e(N,!0));k(W,{children:(o,y)=>{var t=ve(),a=l(t);S(a,{title:"BLoC Pattern i Flutter"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=de();r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var G=e(e(W,!0));k(G,{in:async()=>{$(v,!1),await U.update``},children:(o,y)=>{var t=ge(),a=l(t);S(a,{title:"Vad är BLoC?"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=me(),m=l(d),_=i(m),B=e(e(m,!0)),g=i(B),A=i(g);E(R(A,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),h=>U=h,()=>U),w(()=>g.hidden=!I(v)),T("current",_,async()=>{$(v,!0),await U.update`// Business Logic Component
	class CounterBloc extends Bloc<CounterEvent, int> {
	  CounterBloc() : super(0) {
		on<Increment>((event, emit) => emit(state + 1));
		on<Decrement>((event, emit) => emit(state - 1));
	  }
	}`},!1),r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var H=e(e(G,!0));k(H,{in:async()=>{$(v,!1),await F.update``},children:(o,y)=>{var t=pe(),a=l(t);S(a,{title:"Events & States"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=fe(),m=l(d),_=i(m),B=e(e(m,!0)),g=i(B),A=i(g);E(R(A,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),h=>F=h,()=>F),w(()=>g.hidden=!I(v)),T("current",_,async()=>{$(v,!0),await F.update`// Events beskriver actions
	abstract class AuthEvent {}
	
	class LoginRequested extends AuthEvent {
	  final String username;
	  LoginRequested(this.username);
	}
	
	// States beskriver applikationens tillstånd
	abstract class AuthState {}
	
	class AuthInitial extends AuthState {}
	class AuthLoading extends AuthState {}
	class AuthSuccess extends AuthState {
	  final Person user;
	  AuthSuccess(this.user);
	}`},!1),r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var z=e(e(H,!0));k(z,{in:async()=>{$(v,!1),await M.update``},children:(o,y)=>{var t=he(),a=l(t);S(a,{title:"Implementation"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=_e(),m=l(d),_=i(m),B=e(e(_,!0)),g=i(B);g.nodeValue="Hantera events med on<Event>";var A=e(e(m,!0)),h=i(A),ne=i(h);E(R(ne,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),ie=>M=ie,()=>M),w(()=>h.hidden=!I(v)),T("current",_,async()=>{$(v,!0),await M.update`class AuthBloc extends Bloc<AuthEvent, AuthState> {
	final AuthRepository repository;

	AuthBloc(this.repository) : super(AuthInitial()) {
		on<LoginRequested>(_handleLogin);
	}

	Future<void> _handleLogin(LoginRequested event,Emitter<AuthState> emit) async {
		emit(AuthLoading());
		try {
			final user = await repository.login(event.username);
			emit(AuthSuccess(user));
		} catch (e) {
			emit(AuthFailure(e.toString()));
		}
	}
}`},!1),r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var O=e(e(z,!0));k(O,{in:async()=>{$(v,!1),await D.update``},children:(o,y)=>{var t=Be(),a=l(t);S(a,{title:"Testing"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=$e(),m=l(d),_=i(m),B=e(e(m,!0)),g=i(B),A=i(g);E(R(A,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),h=>D=h,()=>D),w(()=>g.hidden=!I(v)),T("current",_,async()=>{$(v,!0),await D.update`// Testing med bloc_test
blocTest<AuthBloc, AuthState>(
	'emits [AuthLoading, AuthSuccess] när login lyckas',
	build: () {
		when(() => mockRepository.login(any()))
			.thenAnswer((_) async => User('test'));
		return AuthBloc(mockRepository);
	},
	act: (bloc) => bloc.add(LoginRequested('user')),
	expect: () => [
		isA<AuthLoading>(),
		isA<AuthSuccess>(),
	],
);`},!1),r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var J=e(e(O,!0));k(J,{in:async()=>{$(v,!1),await V.update``},children:(o,y)=>{var t=ke(),a=l(t);S(a,{title:"Integration med UI"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=Ae(),m=l(d),_=i(m),B=e(e(m,!0)),g=i(B),A=i(g);E(R(A,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),h=>V=h,()=>V),w(()=>g.hidden=!I(v)),T("current",_,async()=>{$(v,!0),await V.update`// Wrap app med BlocProvider
	BlocProvider(
	  create: (context) => AuthBloc(authRepository),
	  child: MyApp(),
	);
	
	// Alternativ 1: BlocBuilder med switch
	BlocBuilder<AuthBloc, AuthState>(
	  builder: (context, state) => switch (state) {
		AuthLoading() => const CircularProgressIndicator(),
		AuthSuccess(user: Person user) => Text('Welcome ' + user.name),
		_ => const LoginForm()
	  },
	);
	
	// Alternativ 2: Samma sak med context.watch

	final AuthState state = context.watch<AuthBloc>().state;
	
	return switch (state) {
		AuthLoading() => const CircularProgressIndicator(),
		AuthSuccess(user: Person user) => Text('Welcome ' + user.name),
		_ => const LoginForm()
	};

	
	// Skicka events (samma för båda alternativen)
	ElevatedButton(
	  onPressed: () => context.read<AuthBloc>().add(LoginRequested('username')),
	  child: const Text('Login'),
	);`},!1),r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var K=e(e(J,!0));k(K,{children:(o,y)=>{var t=Pe(),a=l(t);S(a,{title:"Uppgift 4: BLoC & Testing"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=Se();r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var Q=e(e(K,!0));k(Q,{children:(o,y)=>{var t=Le(),a=l(t);S(a,{title:"Implementationsguide & Testing"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=ye();r(p,d)},$$slots:{default:!0}}),r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var X=e(e(Q,!0));k(X,{children:(o,y)=>{var t=xe(),a=l(t);S(a,{title:"Demo time?"});var c=e(e(a,!0));P(c,{children:(u,L)=>{var s=be();r(u,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var re=e(e(X,!0)),se=i(re),le=i(se);le.nodeValue=ee,r(ae,q)},$$slots:{default:!0}}),r(Y,j)}export{je as component};
