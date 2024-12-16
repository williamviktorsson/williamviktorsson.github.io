import{i as w,f as t,t as l,j as s,k as e,g as v}from"../chunks/disclose-version.BmIQt7z6.js";import{s as f,B as j,z as B,f as te}from"../chunks/runtime.Bix74eL6.js";import{e as F}from"../chunks/render.DlfULs-I.js";import{b as L}from"../chunks/this.wyHJEu0o.js";import{C as M}from"../chunks/code.seIn7Zd2.js";import{P as ae,S as k,T as b,C as S}from"../chunks/content.DTFQcm-x.js";import{F as re}from"../chunks/front.DnDuSa6w.js";import{S as D}from"../chunks/split.B0OcPuxR.js";var se=l('<ol><li class="fragment">Testing med bloc_test & mockito</li> <li class="fragment">HydratedBloc för State-persistens</li> <li class="fragment">ReplayBloc för historik av states + redo/undo</li> <li class="fragment">Optimistiska uppdateringar</li></ol>'),ie=l("<!> <!>",5),le=l('<ul><li class="fragment">Komponenter i bloc_test</li> <li class="fragment">setUp - förbereder dependencies</li> <li class="fragment">build - skapar BLoC-instansen</li> <li class="fragment">seed - sätter starttillstånd före testet</li> <li class="fragment">act - utför handling</li> <li class="fragment">expect - verifierar states</li> <li class="fragment">verify - kontrollerar anrop</li></ul> <div class="enter"><!></div>',1),ne=l("<!> <!>",5),oe=l(`<ul><li class="fragment">Automatisk State-persistens</li> <li class="fragment">Sparar state mellan sessioner</li> <li class="fragment">Perfekt för:</li> <ul><li>Inloggningsstatus</li> <li>Användarinställningar</li> <li>Vadsomhelst som du vill cache:a lokalt på enheten</li></ul> <li class="fragment">Kan krävas att komplext data serialiseras m.h.a. json.encode/json.decode om du t.ex.
						vill lagra en lista json-objekt</li></ul> <div class="enter"><!></div>`,1),de=l("<!> <!>",5),ue=l('<ul><li class="fragment">Replay med state-historik</li> <li class="fragment">Möjliggör:</li> <ul><li class="fragment">Undo/redo funktionalitet</li> <li class="fragment">Replay av händelser</li> <li class="fragment">Perfekt för navigering</li> <li class="fragment">Perfekt för något som hanterar många lokala ändringar</li> <ul><li class="fragment">t.ex. en pixel-art redigerare eller app för anteckningar</li></ul></ul></ul> <div class="enter"><!></div>',1),me=l("<!> <!>",5),ce=l('<ul><li class="fragment">Direkt feedback till användaren</li> <li class="fragment">Fördelar:</li> <ul><li class="fragment">Bättre användarupplevelse</li> <li class="fragment">Snabbare upplevd prestanda</li></ul></ul> <div class="enter"><!></div>',1),pe=l("<!> <!>",5),ve=l('<div class="mt-60 text-center">Demo time!</div>'),fe=l("<!> <!>",5),ge=l('<!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function xe(q){const G={year:"numeric",month:"long",day:"numeric"},Q=new Date().toLocaleDateString("sv-SE",G);let x,A,R,C,n=te(!1);var N=w(!0),W=s(N);ae(W,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(X,$e)=>{var T=ge(),V=s(T);re(V,{});var E=e(e(V,!0));k(E,{children:(o,I)=>{var a=ie(),r=s(a);b(r,{title:"Dagens agenda"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=se();t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var H=e(e(E,!0));k(H,{in:async()=>{f(n,!1),await C.update``},children:(o,I)=>{var a=ne(),r=s(a);b(r,{title:"Anatomi av bloc_test"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=w(!0),g=s(i);D(g,{children:(_,U)=>{var m=le(),c=s(m),$=v(c),p=e(e(c,!0)),h=v(p);L(M(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>C=y,()=>C),j(()=>p.hidden=!B(n)),F("current",$,async()=>{f(n,!0),await C.update`class MockItemRepository extends Mock implements ItemRepository {}

itemRepository = MockItemRepository();

blocTest<ItemsBloc, ItemsState>(
	'skapar item och uppdaterar listan',
	
	// Förbered mock-svar
	setUp: () {
		// when(...) kommer från Mocktail
		when(() => itemRepository.create(any()))
		.thenAnswer((_) async => newItem);
	},

	build: () => ItemsBloc(itemRepository: itemRepository,)),	// Skapa bloc

	seed: () => ItemsLoaded([existingItem]),	// Förbered initial state

	act: (bloc) => bloc.add(CreateItem(newItem)),	// Utför handling

	// Verifiera state-sekvens
	expect: () => [
		ItemsLoaded([existingItem, newItem]), 	
	],

	// Verifiera repository-anrop
	verify: (_) {
		// verify(...) kommer från Mocktail
		verify(() => itemRepository.create(newItem))
		.called(1);
	},
);`},!1),t(_,m)},$$slots:{default:!0}}),t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var J=e(e(H,!0));k(J,{in:async()=>{f(n,!1),await x.update``},children:(o,I)=>{var a=de(),r=s(a);b(r,{title:"HydratedBloc"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=w(!0),g=s(i);D(g,{children:(_,U)=>{var m=oe(),c=s(m),$=v(c),p=e(e(c,!0)),h=v(p);L(M(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>x=y,()=>x),j(()=>p.hidden=!B(n)),F("current",$,async()=>{f(n,!0),await x.update`class AuthCubit extends HydratedCubit<AuthStatus> {
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
}`},!1),t(_,m)},$$slots:{default:!0}}),t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var K=e(e(J,!0));k(K,{in:async()=>{f(n,!1),await A.update``},children:(o,I)=>{var a=me(),r=s(a);b(r,{title:"ReplayBloc"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=w(!0),g=s(i);D(g,{children:(_,U)=>{var m=ue(),c=s(m),$=v(c),p=e(e(c,!0)),h=v(p);L(M(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>A=y,()=>A),j(()=>p.hidden=!B(n)),F("current",$,async()=>{f(n,!0),await A.update`class SelectionCubit extends ReplayCubit<Item?> {
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
cubit.clearHistory();    // Rensar historiken`},!1),t(_,m)},$$slots:{default:!0}}),t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var O=e(e(K,!0));k(O,{in:async()=>{f(n,!1),await R.update``},children:(o,I)=>{var a=pe(),r=s(a);b(r,{title:"Optimistiska Uppdateringar"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=w(!0),g=s(i);D(g,{children:(_,U)=>{var m=ce(),c=s(m),$=v(c),p=e(e(c,!0)),h=v(p);L(M(h,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),y=>R=y,()=>R),j(()=>p.hidden=!B(n)),F("current",$,async()=>{f(n,!0),await R.update`Future<void> _onCreateItem(CreateItem event, Emitter<ItemsState> emit,) async {
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
}`},!1),t(_,m)},$$slots:{default:!0}}),t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var z=e(e(O,!0));k(z,{children:(o,I)=>{var a=fe(),r=s(a);b(r,{title:"Demo time?"});var d=e(e(r,!0));S(d,{children:(u,P)=>{var i=ve();t(u,i)},$$slots:{default:!0}}),t(o,a)},$$slots:{default:!0}});var Y=e(e(z,!0)),Z=v(Y),ee=v(Z);ee.nodeValue=Q,t(X,T)},$$slots:{default:!0}}),t(q,N)}export{xe as component};
