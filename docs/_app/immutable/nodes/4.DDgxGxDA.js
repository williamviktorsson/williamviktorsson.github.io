import{i as x,f as t,t as i,j as s,k as e,g as o}from"../chunks/disclose-version.BmIQt7z6.js";import{s as h,B as b,z as w,f as oe}from"../chunks/runtime.Bix74eL6.js";import{e as C}from"../chunks/render.DlfULs-I.js";import{b as I}from"../chunks/this.wyHJEu0o.js";import{C as E}from"../chunks/code.seIn7Zd2.js";import{P as le,S as y,T as B,C as P}from"../chunks/content.DTFQcm-x.js";import{F as ie}from"../chunks/front.DnDuSa6w.js";import{S as T}from"../chunks/split.B0OcPuxR.js";var de=i('<ol><li class="fragment">Vad är BLoC?</li> <li class="fragment">Arkitektur & Systemdesign</li> <li class="fragment">Events & States</li> <li class="fragment">Implementation</li> <li class="fragment">Testing</li></ol>'),ue=i("<!> <!>",5),ce=i('<ul><li class="fragment">Business Logic Component - separerar logik från UI</li> <ul><li class="fragment">UI skickar Events</li> <li class="fragment">BLoC emitterar States</li> <li class="fragment">UI bygger som en funktion av senaste State</li></ul> <li class="fragment">Baserad på reactive programming med Streams</li> <li class="fragment">State management lösning</li></ul> <div><div class="enter"><!></div></div>',1),ve=i("<!> <!>",5),me=i('<ul><li class="fragment">Events - Input till BLoC, beskriver actions</li> <li class="fragment">States - Output från BLoC, beskriver tillstånd</li> <li class="fragment">BLoC konverterar Events till States</li></ul> <div><div class="enter"><!></div></div>',1),fe=i("<!> <!>",5),ge=i('<ul><li class="fragment">BLoC Implementation</li> <li class="fragment"> </li> <li class="fragment">Emittera states som svar på events</li> <li class="fragment">Använd repository för data operations</li></ul> <div><div class="enter"><!></div></div>',1),pe=i("<!> <!>",5),he=i('<ul><li class="fragment">Testing med bloc_test package</li> <li class="fragment">Mocka repositories med Mocktail</li> <li class="fragment">Testa event handling och state transitions</li> <li class="fragment">Verifiera error handling</li></ul> <div><div class="enter"><!></div></div>',1),_e=i("<!> <!>",5),$e=i('<ul><li class="fragment">BlocProvider för dependency injection</li> <li class="fragment">Två sätt att bygga UI: BlocBuilder eller context.watch</li> <li class="fragment">Switch expressions för clean state handling</li> <li class="fragment">context.read för att skicka events</li></ul> <div><div class="enter"><!></div></div>',1),Ae=i("<!> <!>",5),Se=i('<div class="mt-60 text-center">Demo time!</div>'),ye=i("<!> <!>",5),Be=i('<!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Re(Q){const X={year:"numeric",month:"long",day:"numeric"},Y=new Date().toLocaleDateString("sv-SE",X);let R,F,U,q,D,l=oe(!1);var V=x(!0),Z=s(V);le(Z,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ee,Le)=>{var M=Be(),W=s(M);ie(W,{});var j=e(e(W,!0));y(j,{children:(c,L)=>{var a=ue(),r=s(a);B(r,{title:"BLoC Pattern i Flutter"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=de();t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var z=e(e(j,!0));y(z,{in:async()=>{h(l,!1),await R.update``},children:(c,L)=>{var a=ve(),r=s(a);B(r,{title:"Vad är BLoC?"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=x(!0),_=s(n);T(_,{children:($,N)=>{var d=ce(),u=s(d),g=o(u),A=e(e(u,!0)),f=o(A),S=o(f);I(E(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),p=>R=p,()=>R),b(()=>f.hidden=!w(l)),C("current",g,async()=>{h(l,!0),await R.update`// Business Logic Component
	class CounterBloc extends Bloc<CounterEvent, int> {
	  CounterBloc() : super(0) {
		on<Increment>((event, emit) => emit(state + 1));
		on<Decrement>((event, emit) => emit(state - 1));
	  }
	}`},!1),t($,d)},$$slots:{default:!0}}),t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var H=e(e(z,!0));y(H,{in:async()=>{h(l,!1),await F.update``},children:(c,L)=>{var a=fe(),r=s(a);B(r,{title:"Events & States"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=x(!0),_=s(n);T(_,{children:($,N)=>{var d=me(),u=s(d),g=o(u),A=e(e(u,!0)),f=o(A),S=o(f);I(E(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),p=>F=p,()=>F),b(()=>f.hidden=!w(l)),C("current",g,async()=>{h(l,!0),await F.update`// Events beskriver actions
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
	}`},!1),t($,d)},$$slots:{default:!0}}),t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var O=e(e(H,!0));y(O,{in:async()=>{h(l,!1),await U.update``},children:(c,L)=>{var a=pe(),r=s(a);B(r,{title:"Implementation"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=x(!0),_=s(n);T(_,{children:($,N)=>{var d=ge(),u=s(d),g=o(u),A=e(e(g,!0)),f=o(A);f.nodeValue="Hantera events med on<Event>";var S=e(e(u,!0)),p=o(S),se=o(p);I(E(se,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),ne=>U=ne,()=>U),b(()=>p.hidden=!w(l)),C("current",g,async()=>{h(l,!0),await U.update`class AuthBloc extends Bloc<AuthEvent, AuthState> {
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
}`},!1),t($,d)},$$slots:{default:!0}}),t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var G=e(e(O,!0));y(G,{in:async()=>{h(l,!1),await q.update``},children:(c,L)=>{var a=_e(),r=s(a);B(r,{title:"Testing"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=x(!0),_=s(n);T(_,{children:($,N)=>{var d=he(),u=s(d),g=o(u),A=e(e(u,!0)),f=o(A),S=o(f);I(E(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),p=>q=p,()=>q),b(()=>f.hidden=!w(l)),C("current",g,async()=>{h(l,!0),await q.update`// Testing med bloc_test
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
);`},!1),t($,d)},$$slots:{default:!0}}),t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var J=e(e(G,!0));y(J,{in:async()=>{h(l,!1),await D.update``},children:(c,L)=>{var a=Ae(),r=s(a);B(r,{title:"Integration med UI"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=x(!0),_=s(n);T(_,{children:($,N)=>{var d=$e(),u=s(d),g=o(u),A=e(e(u,!0)),f=o(A),S=o(f);I(E(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),p=>D=p,()=>D),b(()=>f.hidden=!w(l)),C("current",g,async()=>{h(l,!0),await D.update`// Wrap app med BlocProvider
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
	);`},!1),t($,d)},$$slots:{default:!0}}),t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var K=e(e(J,!0));y(K,{children:(c,L)=>{var a=ye(),r=s(a);B(r,{title:"Demo time?"});var v=e(e(r,!0));P(v,{children:(m,k)=>{var n=Se();t(m,n)},$$slots:{default:!0}}),t(c,a)},$$slots:{default:!0}});var te=e(e(K,!0)),ae=o(te),re=o(ae);re.nodeValue=Y,t(ee,M)},$$slots:{default:!0}}),t(Q,V)}export{Re as component};
