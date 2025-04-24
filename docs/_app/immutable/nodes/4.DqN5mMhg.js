import{i as b,f as r,t as n,j as l,k as e,g as i}from"../chunks/disclose-version.BmIQt7z6.js";import{s as $,B as w,z as I,f as oe}from"../chunks/runtime.Bix74eL6.js";import{e as E}from"../chunks/render.DlfULs-I.js";import{b as T}from"../chunks/this.wyHJEu0o.js";import{C as R}from"../chunks/code.seIn7Zd2.js";import{P as ue,S as B,T as k,C as P}from"../chunks/content.DTFQcm-x.js";import{F as ce}from"../chunks/front.DnDuSa6w.js";import{S as x}from"../chunks/split.B0OcPuxR.js";var de=n('<ol><li class="fragment">Vad är BLoC?</li> <li class="fragment">Arkitektur & Systemdesign</li> <li class="fragment">Events & States</li> <li class="fragment">Implementation</li> <li class="fragment">Testing</li> <li class="fragment">Intro uppgift 4</li></ol>'),ve=n("<!> <!>",5),me=n('<ul><li class="fragment">Business Logic Component - separerar logik från UI</li> <ul><li class="fragment">UI skickar Events</li> <li class="fragment">BLoC emitterar States</li> <li class="fragment">UI bygger som en funktion av senaste State</li></ul> <li class="fragment">Baserad på reactive programming med Streams</li> <li class="fragment">State management lösning</li></ul> <div><div class="enter"><!></div></div>',1),ge=n("<!> <!>",5),fe=n('<ul><li class="fragment">Events - Input till BLoC, beskriver actions</li> <li class="fragment">States - Output från BLoC, beskriver tillstånd</li> <li class="fragment">BLoC konverterar Events till States</li></ul> <div><div class="enter"><!></div></div>',1),pe=n("<!> <!>",5),he=n('<ul><li class="fragment">BLoC Implementation</li> <li class="fragment"> </li> <li class="fragment">emit state som svar på events</li> <li class="fragment">Använd repository för data operationer</li></ul> <div><div class="enter"><!></div></div>',1),_e=n("<!> <!>",5),$e=n('<ul><li class="fragment">Testing med bloc_test package</li> <li class="fragment">Mocka repositories med Mocktail</li> <li class="fragment">Testa event handling och state transitions</li> <li class="fragment">Verifiera error handling</li></ul> <div><div class="enter"><!></div></div>',1),Ae=n("<!> <!>",5),Se=n('<ul><li class="fragment">BlocProvider för dependency injection</li> <li class="fragment">Två sätt att bygga UI: BlocBuilder eller context.watch</li> <li class="fragment">Switch expressions för clean state handling</li> <li class="fragment">context.read för att skicka events</li></ul> <div><div class="enter"><!></div></div>',1),Be=n("<!> <!>",5),ke=n('<ul><li class="fragment">Mål</li> <ul><li class="fragment">Refaktorera appen med BLoC för state management</li> <li class="fragment">Skriva tester för BLoC-komponenter</li> <li class="fragment">Använda Mocktail för att mocka repositories</li></ul> <li class="fragment">Huvudkomponenter att implementera</li> <ul><li class="fragment">VehicleBloc - hantering av fordon</li> <li class="fragment">ParkingBloc - hantering av aktiva parkeringar</li> <li class="fragment">ParkingSpaceBloc - hantering av parkeringsplatser</li> <li class="fragment">AuthBloc - hantering av inloggning/användare</li></ul> <li class="fragment">För varje BLoC behöver ni</li> <ul><li class="fragment">Definiera events (vad som händer)</li> <li class="fragment">Definiera states (appens tillstånd)</li> <li class="fragment">Implementera bloc-logik (hantering av events)</li></ul></ul>'),Pe=n("<!> <!>",5),Le=n(`<ul><li class="fragment">Struktur</li> <pre class="fragment"><code class="svelte-1322xwn">lib/
					  ├── blocs/            # Alla BLoC-komponenter
					  │   ├── vehicle/      # Event, State, BLoC-filer
					  │   ├── parking/      # för varje feature
					  │   └── ...
					  ├── repositories/     # Befintliga repositories
					  └── views/            # UI-komponenter</code></pre> <li class="fragment">Testing (G-krav)</li> <ul><li class="fragment">Minst ett test för success case per BLoC</li> <li class="fragment">Minst ett test för error case per BLoC</li> <li class="fragment">Mocka repositories med Mocktail</li> <li class="fragment">Använd blocTest för att testa logiken</li></ul> <li class="fragment">Tips</li> <ul><li class="fragment">Börja med en BLoC i taget - events, states, logik</li> <li class="fragment">Integrera UI med BlocProvider/BlocBuilder</li> <li class="fragment">För VG, välj minst 2 av extrakraven</li></ul></ul>`),ye=n("<!> <!>",5),be=n('<div class="mt-60 text-center">Demo time!</div>'),xe=n("<!> <!>",5),Ce=n('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Ve(Y){const Z={year:"numeric",month:"long",day:"numeric"},ee=new Date().toLocaleDateString("sv-SE",Z);let U,F,M,q,D,v=oe(!1);var V=b(!0),te=l(V);ue(te,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ae,Ie)=>{var j=Ce(),N=l(j);ce(N,{});var W=e(e(N,!0));B(W,{children:(o,L)=>{var t=ve(),a=l(t);k(a,{title:"BLoC Pattern i Flutter"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=de();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var G=e(e(W,!0));B(G,{in:async()=>{$(v,!1),await U.update``},children:(o,L)=>{var t=ge(),a=l(t);k(a,{title:"Vad är BLoC?"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=me(),m=l(d),h=i(m),A=e(e(m,!0)),g=i(A),S=i(g);T(R(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),_=>U=_,()=>U),w(()=>g.hidden=!I(v)),E("current",h,async()=>{$(v,!0),await U.update`// Business Logic Component
	class CounterBloc extends Bloc<CounterEvent, int> {
	  CounterBloc() : super(0) {
		on<Increment>((event, emit) => emit(state + 1));
		on<Decrement>((event, emit) => emit(state - 1));
	  }
	}`},!1),r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var H=e(e(G,!0));B(H,{in:async()=>{$(v,!1),await F.update``},children:(o,L)=>{var t=pe(),a=l(t);k(a,{title:"Events & States"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=fe(),m=l(d),h=i(m),A=e(e(m,!0)),g=i(A),S=i(g);T(R(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),_=>F=_,()=>F),w(()=>g.hidden=!I(v)),E("current",h,async()=>{$(v,!0),await F.update`// Events beskriver actions
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
	}`},!1),r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var z=e(e(H,!0));B(z,{in:async()=>{$(v,!1),await M.update``},children:(o,L)=>{var t=_e(),a=l(t);k(a,{title:"Implementation"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=he(),m=l(d),h=i(m),A=e(e(h,!0)),g=i(A);g.nodeValue="Hantera events med on<Event>";var S=e(e(m,!0)),_=i(S),ne=i(_);T(R(ne,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),ie=>M=ie,()=>M),w(()=>_.hidden=!I(v)),E("current",h,async()=>{$(v,!0),await M.update`abstract class AuthEvent {}
	
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
}
						
						
class AuthBloc extends Bloc<AuthEvent, AuthState> {
	final AuthRepository repository;

	AuthBloc(this.repository) : super(AuthInitial()) {
		on<LoginRequested>((event, emit) => _handleLogin(event, emit));
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
}`},!1),r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var O=e(e(z,!0));B(O,{in:async()=>{$(v,!1),await q.update``},children:(o,L)=>{var t=Ae(),a=l(t);k(a,{title:"Testing"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=$e(),m=l(d),h=i(m),A=e(e(m,!0)),g=i(A),S=i(g);T(R(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),_=>q=_,()=>q),w(()=>g.hidden=!I(v)),E("current",h,async()=>{$(v,!0),await q.update`// Testing med bloc_test
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
);`},!1),r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var J=e(e(O,!0));B(J,{in:async()=>{$(v,!1),await D.update``},children:(o,L)=>{var t=Be(),a=l(t);k(a,{title:"Integration med UI"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=Se(),m=l(d),h=i(m),A=e(e(m,!0)),g=i(A),S=i(g);T(R(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),_=>D=_,()=>D),w(()=>g.hidden=!I(v)),E("current",h,async()=>{$(v,!0),await D.update`// Wrap app med BlocProvider
	BlocProvider(
	  create: (context) => AuthBloc(authRepository),
	  child: MyApp(),
	);
	
	// Alternativ 1: BlocBuilder med switch

	build(context){
		return BlocBuilder<AuthBloc, AuthState>(
			builder: (context, state) => switch (state) {
				AuthLoading() => const CircularProgressIndicator(),
				AuthSuccess(user: Person user) => Text('Welcome ' + user.name),
				_ => const LoginForm()
			},
		);
	}

	// Alternativ 2: Samma sak med context.watch

	build(context){
		final AuthState state = context.watch<AuthBloc>().state;
		
		return switch (state) {
			AuthLoading() => const CircularProgressIndicator(),
			AuthSuccess(user: Person user) => Text('Welcome ' + user.name),
			_ => const LoginForm()
		};
	}

	
	// Skicka events (samma för båda alternativen)
	ElevatedButton(
	  onPressed: () => context.read<AuthBloc>().add(LoginRequested('username')),
	  child: const Text('Login'),
	);`},!1),r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var K=e(e(J,!0));B(K,{children:(o,L)=>{var t=Pe(),a=l(t);k(a,{title:"Uppgift 4: BLoC & Testing"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=ke();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var Q=e(e(K,!0));B(Q,{children:(o,L)=>{var t=ye(),a=l(t);k(a,{title:"Implementationsguide & Testing"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=b(!0),f=l(s);x(f,{children:(p,C)=>{var d=Le();r(p,d)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var X=e(e(Q,!0));B(X,{children:(o,L)=>{var t=xe(),a=l(t);k(a,{title:"Demo time?"});var u=e(e(a,!0));P(u,{children:(c,y)=>{var s=be();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var re=e(e(X,!0)),se=i(re),le=i(se);le.nodeValue=ee,r(ae,j)},$$slots:{default:!0}}),r(Y,V)}export{Ve as component};
