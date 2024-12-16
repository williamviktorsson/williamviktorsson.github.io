<script lang="ts">
	import { Presentation, Slide, Code, Transition } from '@animotion/core'
	import Front from '$lib/front.svelte'
	import Title from '$lib/title.svelte'
	import Content from '$lib/content.svelte'
	import Split from '$lib/split.svelte'

	const dateops = { year: 'numeric', month: 'long', day: 'numeric' }
	const today = new Date()
	const dateInSwedish = today.toLocaleDateString('sv-SE', dateops as any)

	let code: Code
	let code1: Code
	let code2: Code
	let code3: Code
	let code4: Code
	let code5: Code
	let code6: Code

	let showcode: boolean = $state(false)
</script>

<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: true,
		progress: false,
		autoAnimateEasing: 'ease',
		autoAnimateUnmatched: true
	}}
>
	<Front></Front>

	<Slide>
		<Title title="Dagens agenda"></Title>
		<Content>
			<ol>
				<li class="fragment">Testing med bloc_test & mockito</li>
				<li class="fragment">HydratedBloc för State-persistens</li>
				<li class="fragment">ReplayBloc för historik av states + redo/undo</li>
				<li class="fragment">Optimistiska uppdateringar</li>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code5.update``
		}}
	>
		<Title title="Anatomi av bloc_test"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`class MockItemRepository extends Mock implements ItemRepository {}

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
);`
						}}
					>
						Komponenter i bloc_test
					</li>
					<li class="fragment">setUp - förbereder dependencies</li>
					<li class="fragment">build - skapar BLoC-instansen</li>
					<li class="fragment">seed - sätter starttillstånd före testet</li>
					<li class="fragment">act - utför handling</li>
					<li class="fragment">expect - verifierar states</li>
					<li class="fragment">verify - kontrollerar anrop</li>
				</ul>
				<div class="enter" hidden={!showcode}>
					<Code
						code={``}
						lang="dart"
						theme="catppuccin-frappe"
						bind:this={code5}
						options={{
							duration: 600,
							stagger: 15,
							containerStyle: false,
							lineNumbers: true
						}}
					/>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code2.update``
		}}
	>
		<Title title="HydratedBloc"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`class AuthCubit extends HydratedCubit<AuthStatus> {
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
}`
						}}
					>
						Automatisk State-persistens
					</li>
					<li class="fragment">Sparar state mellan sessioner</li>
					<li class="fragment">Perfekt för:</li>
					<ul>
						<li>Inloggningsstatus</li>
						<li>Användarinställningar</li>
						<li>Vadsomhelst som du vill cache:a lokalt på enheten</li>
					</ul>

					<li class="fragment">
						Kan krävas att komplext data serialiseras m.h.a. json.encode/json.decode om du t.ex.
						vill lagra en lista json-objekt
					</li>
				</ul>
				<div class="enter" hidden={!showcode}>
					<Code
						code={``}
						lang="dart"
						theme="catppuccin-frappe"
						bind:this={code2}
						options={{
							duration: 600,
							stagger: 15,
							containerStyle: false,
							lineNumbers: true
						}}
					/>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code3.update``
		}}
	>
		<Title title="ReplayBloc"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`class SelectionCubit extends ReplayCubit<Item?> {
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
cubit.clearHistory();    // Rensar historiken`
						}}
					>
						Replay med state-historik
					</li>
					<li class="fragment">Möjliggör:</li>

					<ul>
						<li class="fragment">Undo/redo funktionalitet</li>
						<li class="fragment">Replay av händelser</li>
						<li class="fragment">Perfekt för navigering</li>
						<li class="fragment">Perfekt för något som hanterar många lokala ändringar</li>
						<ul>
							<li class="fragment">t.ex. en pixel-art redigerare eller app för anteckningar</li>
						</ul>
					</ul>
				</ul>
				<div class="enter" hidden={!showcode}>
					<Code
						code={``}
						lang="dart"
						theme="catppuccin-frappe"
						bind:this={code3}
						options={{
							duration: 600,
							stagger: 15,
							containerStyle: false,
							lineNumbers: true
						}}
					/>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code4.update``
		}}
	>
		<Title title="Optimistiska Uppdateringar"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`Future<void> _onCreateItem(CreateItem event, Emitter<ItemsState> emit,) async {
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
}`
						}}
					>
						Direkt feedback till användaren
					</li>
					<li class="fragment">Fördelar:</li>

					<ul>
						<li class="fragment">Bättre användarupplevelse</li>
						<li class="fragment">Snabbare upplevd prestanda</li>
					</ul>
				</ul>
				<div class="enter" hidden={!showcode}>
					<Code
						code={``}
						lang="dart"
						theme="catppuccin-frappe"
						bind:this={code4}
						options={{
							duration: 600,
							stagger: 15,
							containerStyle: false,
							lineNumbers: true
						}}
					/>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Demo time?"></Title>
		<Content>
			<div class="mt-60 text-center">Demo time!</div>
		</Content>
	</Slide>

	<div class="date">
		<p class="mb-2 text-xl" id="date">{dateInSwedish}</p>
		<p class="text-xl">Stockholms Tekniska Institut</p>
	</div>
</Presentation>

<style>
	.date {
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: left;
	}

	a {
		color: white;
	}

	code {
		background-color: #eee;
		border-radius: 3px;
		font-family: courier, monospace;
		padding: 0 3px;
		color: black;
	}
</style>
