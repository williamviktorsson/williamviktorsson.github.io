import{i as P,f as r,t as i,j as l,k as e,g as f}from"../chunks/disclose-version.BmIQt7z6.js";import{s as p,B as x,z as C,f as se}from"../chunks/runtime.Bix74eL6.js";import{e as L}from"../chunks/render.DlfULs-I.js";import{b as A}from"../chunks/this.wyHJEu0o.js";import{C as R}from"../chunks/code.seIn7Zd2.js";import{P as le,S,T as I,C as k}from"../chunks/content.DTFQcm-x.js";import{F as ie}from"../chunks/front.DnDuSa6w.js";import{S as B}from"../chunks/split.B0OcPuxR.js";var ne=i('<ol><li class="fragment">Testing med bloc_test & mockito</li> <li class="fragment">Sealed Classes för typsäker State-hantering</li> <li class="fragment">HydratedBloc för State-persistens</li> <li class="fragment">ReplayBloc för tidslinje</li> <li class="fragment">Optimistiska uppdateringar</li></ol>'),oe=i("<!> <!>",5),de=i('<ul><li class="fragment">bloc_test - specialiserat testramverk för BLoCs</li> <li class="fragment">mocktail - skapar mock-objekt för deterministiska tester</li> <li class="fragment">Testar sekvenser av states vid events</li> <li class="fragment">Verifierar interaktioner med dependencies</li> <li class="fragment">Viktiga koncept:</li> <ul><li class="fragment"><code class="svelte-1322xwn">setUp</code> - förbereder testmiljön</li> <li class="fragment"><code class="svelte-1322xwn">seed</code> - sätter initial state för testet</li> <li class="fragment"><code class="svelte-1322xwn">act</code> - utför handlingen som ska testas</li> <li class="fragment"><code class="svelte-1322xwn">expect</code> - verifierar state-sekvensen</li> <li class="fragment"><code class="svelte-1322xwn">verify</code> - kontrollerar interaktioner</li></ul></ul>'),ce=i("<!> <!>",5),me=i('<ul><li class="fragment">Komponenter i bloc_test</li> <li class="fragment">setUp - förbereder dependencies</li> <li class="fragment">build - skapar BLoC-instansen</li> <li class="fragment">seed - sätter starttillstånd före testet</li> <li class="fragment">act - utför handling</li> <li class="fragment">expect - verifierar states</li> <li class="fragment">verify - kontrollerar anrop</li></ul> <div class="enter"><!></div>',1),ue=i("<!> <!>",5),ve=i('<ul><li class="fragment">Sealed classes</li> <li class="fragment">Fördelar:</li> <ul><li class="fragment">uttömmande pattern matching</li> <li class="fragment">Typsäkerhet vid compile-time</li> <li class="fragment">Bättre kodkomplettering</li></ul> <li class="fragment">Perfect för State-hantering</li></ul> <div class="enter"><!></div>',1),fe=i("<!> <!>",5),pe=i('<ul><li class="fragment">Automatisk State-persistens</li> <li class="fragment">Sparar state mellan sessioner</li> <li class="fragment">Perfekt för: <ul><li>Inloggningsstatus</li> <li>Användarinställningar</li> <li>Cache</li></ul></li></ul> <div class="enter"><!></div>',1),ge=i("<!> <!>",5),_e=i('<ul><li class="fragment">Replay med state-historik</li> <li class="fragment">Möjliggör:</li> <ul><li class="fragment">Undo/redo funktionalitet</li> <li class="fragment">Replay av händelser</li></ul></ul> <div class="enter"><!></div>',1),$e=i("<!> <!>",5),he=i('<ul><li class="fragment">Direkt feedback till användaren</li> <li class="fragment">Fördelar:</li> <ul><li class="fragment">Bättre användarupplevelse</li> <li class="fragment">Snabbare upplevd prestanda</li></ul></ul> <div class="enter"><!></div>',1),ye=i("<!> <!>",5),Se=i('<div class="mt-60 text-center">Demo time!</div>'),Ie=i("<!> <!>",5),ke=i('<!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Fe(W){const X={year:"numeric",month:"long",day:"numeric"},Y=new Date().toLocaleDateString("sv-SE",X);let V,F,j,T,E,n=se(!1);var D=P(!0),Z=l(D);le(Z,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ee,we)=>{var N=ke(),H=l(N);ie(H,{});var M=e(e(H,!0));S(M,{children:(o,b)=>{var t=oe(),a=l(t);I(a,{title:"Dagens agenda"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=ne();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var J=e(e(M,!0));S(J,{children:(o,b)=>{var t=ce(),a=l(t);I(a,{title:"Testing med bloc_test & mockito"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=de();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var O=e(e(J,!0));S(O,{in:async()=>{p(n,!1),await E.update``},children:(o,b)=>{var t=ue(),a=l(t);I(a,{title:"Anatomi av bloc_test"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=P(!0),g=l(s);B(g,{children:(_,U)=>{var m=me(),u=l(m),$=f(u),v=e(e(u,!0)),h=f(v);A(R(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>E=y,()=>E),x(()=>v.hidden=!C(n)),L("current",$,async()=>{p(n,!0),await E.update`blocTest<ItemsBloc, ItemsState>(
	'skapar item och uppdaterar listan',
	
	// Förbered mock-svar
	setUp: () {
		when(() => itemRepository.create(any()))
		.thenAnswer((_) async => newItem);
	},
	
	// Skapa bloc
	build: () => ItemsBloc(itemRepository: itemRepository,)),

	// Förbered initial state
	seed: () => ItemsLoaded([existingItem]),
	
	// Utför handling
	act: (bloc) => bloc.add(CreateItem(newItem)),
	
	// Verifiera state-sekvens
	expect: () => [
		ItemsLoaded([existingItem, newItem]),
	],
	
	// Verifiera repository-anrop
	verify: (_) {
		verify(() => itemRepository.create(newItem))
		.called(1);
	},
);`},!1),r(_,m)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var q=e(e(O,!0));S(q,{in:async()=>{p(n,!1),await V.update``},children:(o,b)=>{var t=fe(),a=l(t);I(a,{title:"Sealed Classes för State"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=P(!0),g=l(s);B(g,{children:(_,U)=>{var m=ve(),u=l(m),$=f(u),v=e(e(u,!0)),h=f(v);A(R(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>V=y,()=>V),x(()=>v.hidden=!C(n)),L("current",$,async()=>{p(n,!0),await V.update`sealed class ItemsState extends Equatable {
	const ItemsState();
}

final class ItemsInitial extends ItemsState {}
final class ItemsLoading extends ItemsState {}
final class ItemsLoaded extends ItemsState {
	final List<Item> items;
	const ItemsLoaded(this.items);
}

// Användning med pattern matching
return switch (state) {
	ItemsInitial() => const LoadingView(),
	ItemsLoading() => const LoadingView(),
	ItemsLoaded(:final items) => ItemListView(items),
	ItemsError(:final message) => ErrorView(message),
};`},!1),r(_,m)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var z=e(e(q,!0));S(z,{in:async()=>{p(n,!1),await F.update``},children:(o,b)=>{var t=ge(),a=l(t);I(a,{title:"HydratedBloc"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=P(!0),g=l(s);B(g,{children:(_,U)=>{var m=pe(),u=l(m),$=f(u),v=e(e(u,!0)),h=f(v);A(R(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>F=y,()=>F),x(()=>v.hidden=!C(n)),L("current",$,async()=>{p(n,!0),await F.update`class AuthCubit extends HydratedCubit<AuthStatus> {
	AuthCubit() : super(AuthStatus.unauthenticated);

	@override
	AuthStatus? fromJson(Map<String, dynamic> json) {
		return AuthStatus.values.byName(json['status'] as String);
	}

	@override
	Map<String, dynamic>? toJson(AuthStatus state) {
		return {'status': state.name};
	}

	// State sparas automatiskt vid varje emit
	Future<void> login() async {
		emit(AuthStatus.authenticated);
	}
}`},!1),r(_,m)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var K=e(e(z,!0));S(K,{in:async()=>{p(n,!1),await j.update``},children:(o,b)=>{var t=$e(),a=l(t);I(a,{title:"ReplayBloc"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=P(!0),g=l(s);B(g,{children:(_,U)=>{var m=_e(),u=l(m),$=f(u),v=e(e(u,!0)),h=f(v);A(R(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>j=y,()=>j),x(()=>v.hidden=!C(n)),L("current",$,async()=>{p(n,!0),await j.update`class SelectionCubit extends ReplayCubit<Item?> {
	SelectionCubit() : super(null);

	void selectItem(Item? item) => emit(item);
	void clearSelection() => emit(null);
}

// Användning
final cubit = SelectionCubit();
cubit.selectItem(item1);  // State: item1
cubit.selectItem(item2);  // State: item2
cubit.undo();            // State: item1
cubit.redo();            // State: item2
cubit.clearHistory();    // Rensar historiken`},!1),r(_,m)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var G=e(e(K,!0));S(G,{in:async()=>{p(n,!1),await T.update``},children:(o,b)=>{var t=ye(),a=l(t);I(a,{title:"Optimistiska Uppdateringar"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=P(!0),g=l(s);B(g,{children:(_,U)=>{var m=he(),u=l(m),$=f(u),v=e(e(u,!0)),h=f(v);A(R(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>T=y,()=>T),x(()=>v.hidden=!C(n)),L("current",$,async()=>{p(n,!0),await T.update`Future<void> _onCreateItem(CreateItem event, Emitter<ItemsState> emit,) async {
	// Visa optimistisk uppdatering direkt
	final currentItems = switch (state) {
		ItemsLoaded(:final items) => items,
		_ => <Item>[],
	};
	
	emit(ItemsLoaded([...currentItems, event.item]));

	try {
		// Faktiskt API-anrop
		await _itemRepository.create(event.item);
		final items = await _itemRepository.getItems();

		// Ladda om för att säkerställa konsistens
		emit(ItemsLoaded(items));
	} catch (e) {
		emit(ItemsError(e.toString()));
	}
}`},!1),r(_,m)},$$slots:{default:!0}}),r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var Q=e(e(G,!0));S(Q,{children:(o,b)=>{var t=Ie(),a=l(t);I(a,{title:"Demo time?"});var d=e(e(a,!0));k(d,{children:(c,w)=>{var s=Se();r(c,s)},$$slots:{default:!0}}),r(o,t)},$$slots:{default:!0}});var te=e(e(Q,!0)),ae=f(te),re=f(ae);re.nodeValue=Y,r(ee,N)},$$slots:{default:!0}}),r(W,D)}export{Fe as component};
