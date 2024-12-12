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
		<Title title="BLoC Pattern i Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Vad är BLoC?</li>
				<li class="fragment">Arkitektur & Systemdesign</li>
				<li class="fragment">Events & States</li>
				<li class="fragment">Implementation</li>
				<li class="fragment">Testing</li>
			</ol>
		</Content>
	</Slide>
	
	<Slide in={async () => { showcode = false; await code1.update`` }}>
		<Title title="Vad är BLoC?"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment" oncurrent={async () => {
						showcode = true
						await code1.update`// Business Logic Component
	class CounterBloc extends Bloc<CounterEvent, int> {
	  CounterBloc() : super(0) {
		on<Increment>((event, emit) => emit(state + 1));
		on<Decrement>((event, emit) => emit(state - 1));
	  }
	}`
					}}>Business Logic Component - separerar logik från UI</li>
					<ul>
						<li class="fragment">UI skickar Events</li>
						<li class="fragment">BLoC emitterar States</li>
						<li class="fragment">UI bygger som en funktion av senaste State</li>
					</ul>
					<li class="fragment">Baserad på reactive programming med Streams</li>
					<li class="fragment">State management lösning</li>
				</ul>
				<div>
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
				</div>
			</Split>
		</Content>
	</Slide>
	
	<Slide in={async () => { showcode = false; await code2.update`` }}>
		<Title title="Events & States"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment" oncurrent={async () => {
						showcode = true
						await code2.update`// Events beskriver actions
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
	}`
					}}>Events - Input till BLoC, beskriver actions</li>
					<li class="fragment">States - Output från BLoC, beskriver tillstånd</li>
					<li class="fragment">BLoC konverterar Events till States</li>
				</ul>
				<div>
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
				</div>
			</Split>
		</Content>
	</Slide>
	
	<Slide in={async () => { showcode = false; await code3.update`` }}>
		<Title title="Implementation"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment" oncurrent={async () => {
						showcode = true
						await code3.update`class AuthBloc extends Bloc<AuthEvent, AuthState> {
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
}`
					}}>BLoC Implementation</li>
					<li class="fragment">Hantera events med {`on<Event>`}</li>
					<li class="fragment">Emittera states som svar på events</li>
					<li class="fragment">Använd repository för data operations</li>
				</ul>
				<div>
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
				</div>
			</Split>
		</Content>
	</Slide>
	
	<Slide in={async () => { showcode = false; await code4.update`` }}>
		<Title title="Testing"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment" oncurrent={async () => {
						showcode = true
						await code4.update`// Testing med bloc_test
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
);`
					}}>Testing med bloc_test package</li>
					<li class="fragment">Mocka repositories med Mocktail</li>
					<li class="fragment">Testa event handling och state transitions</li>
					<li class="fragment">Verifiera error handling</li>
				</ul>
				<div>
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
				</div>
			</Split>
		</Content>
	</Slide>
	
	<Slide in={async () => { showcode = false; await code5.update`` }}>
		<Title title="Integration med UI"></Title>
		<Content>
			<Split>
				<ul>
					<li class="fragment" oncurrent={async () => {
						showcode = true
						await code5.update`// Wrap app med BlocProvider
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
	);`
					}}>BlocProvider för dependency injection</li>
					<li class="fragment">Två sätt att bygga UI: BlocBuilder eller context.watch</li>
					<li class="fragment">Switch expressions för clean state handling</li>
					<li class="fragment">context.read för att skicka events</li>
				</ul>
				<div>
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
