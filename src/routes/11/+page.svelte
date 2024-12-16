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
				<li class="fragment">Sealed Classes för typsäker State-hantering</li>
				<li class="fragment">HydratedBloc för State-persistens</li>
				<li class="fragment">ReplayBloc för tidslinje</li>
				<li class="fragment">Optimistiska uppdateringar</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Testing med bloc_test & mockito"></Title>
		<Content>
			<ul>
				<li class="fragment">bloc_test - specialiserat testramverk för BLoCs</li>
				<li class="fragment">mocktail - skapar mock-objekt för deterministiska tester</li>
				<li class="fragment">Testar sekvenser av states vid events</li>
				<li class="fragment">Verifierar interaktioner med dependencies</li>
				<li class="fragment">Viktiga koncept:</li>

				<ul>
					<li class="fragment"><code>setUp</code> - förbereder testmiljön</li>
					<li class="fragment"><code>seed</code> - sätter initial state för testet</li>
					<li class="fragment"><code>act</code> - utför handlingen som ska testas</li>
					<li class="fragment"><code>expect</code> - verifierar state-sekvensen</li>
					<li class="fragment"><code>verify</code> - kontrollerar interaktioner</li>
				</ul>
			</ul>
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
							await code5.update`blocTest<ItemsBloc, ItemsState>(
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
			await code1.update``
		}}
	>
		<Title title="Sealed Classes för State"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`sealed class ItemsState extends Equatable {
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
};`
						}}
					>
						Sealed classes
					</li>
					<li class="fragment">Fördelar:</li>

					<ul>
						<li class="fragment">uttömmande pattern matching</li>
						<li class="fragment">Typsäkerhet vid compile-time</li>
						<li class="fragment">Bättre kodkomplettering</li>
					</ul>
					<li class="fragment">Perfect för State-hantering</li>
				</ul>
				<div class="enter" hidden={!showcode}>
					<Code
						code={``}
						lang="dart"
						theme="catppuccin-frappe"
						bind:this={code1}
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
					<li class="fragment">
						Perfekt för:
						<ul>
							<li>Inloggningsstatus</li>
							<li>Användarinställningar</li>
							<li>Cache</li>
						</ul>
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
