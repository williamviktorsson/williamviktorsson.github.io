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
				<li class="fragment">Persistera gömda vyer</li>
				<li class="fragment">Provider (dependency injection - DI)</li>
				<li class="fragment">Responsiv design</li>
				<li class="fragment">Animationer</li>
				<li class="fragment">Theming</li>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Persistera gömda vyer"></Title>

		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Använd AutomaticKeepAliveClientMixin för att behålla tillståndet
class _MyWidgetState extends State<MyWidget> with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => true;

  @override
  Widget build(BuildContext context) {
    super.build(context); // Viktigt! Måste anropas först
    return YourWidget();
  }
}`
						}}
					>
						Behåll tillstånd i TabView/PageView
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Exempel på IndexedStack för att behålla flera vyer
IndexedStack(
  index: _selectedIndex,
  children: [
    HomeView(),
    ProfileView(),
    SettingsView(),
  ],
)`
						}}
					>
						IndexedStack för att behålla vyer i minnet
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Använd PageStorageKey för att spara scroll position
ListView(
  key: PageStorageKey('uniqueKey'),
  children: [
    // Lista med items
  ],
)`
						}}
					>
						Spara scroll position
					</li>
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

	<Slide
		in={async () => {
			showcode = false
			await code2.update``
		}}
	>
		<Title title="Dependency Injection (DI) - Koncept"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Utan DI - hårdkodade beroenden
class UserScreen extends StatelessWidget {

  // UserService och AuthService skickas in i eller skapas i konstruktorn

  final UserService userService;
  final AuthService authService;

  UserScreen({required this.userService, required this.authService});
  
  @override
  Widget build(BuildContext context) {
    return Container(); // UI implementation
  }
}`
						}}
					>
						Problem utan DI:
					</li>
					<ul>
						<li class="fragment">
							Tight coupling - onödig komposition osv.
						</li>
						<li class="fragment">Svårt och mödosamt att dela instanser mellan widgets</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`// Med DI - beroenden injiceras
class UserScreen extends StatelessWidget {
    
  @override
  Widget build(BuildContext context) {
    // Använd context för att hämta injicerade beroenden
    final userService = context.read<UserService>();
    final authService = context.read<AuthService>();
    return Container(); // UI implementation
  }
}`
						}}
					>
						Fördelar med DI:
					</li>
					<ul>
						<li class="fragment">Lättare att testa - kan injecta mock-objekt</li>
						<li class="fragment">
							Loose coupling - widgets behöver inte veta hur services skapas eller bero på att de
							redan ska existera
						</li>
						<li class="fragment">Enklare att dela tillstånd och services mellan widgets</li>
					</ul>
					<li class="fragment">
						<strong>Provider</strong> är Flutters rekommenderade DI-lösning, finns dock många fler populära, som
						t.ex. Riverpod
					</li>
					
					<ul>
						<li class="fragment">
							Bloc som ni kommer använda senare bygger vidare på Provider och är en mer fullfjädrad
							state-management lösning
						</li>
					</ul> 
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

	<Slide
		in={async () => {
			showcode = false
			await code3.update``
		}}
	>
		<Title title="Provider (DI)"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// Definiera en service
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
}`
						}}
					>
						Grundläggande Provider setup
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`// ChangeNotifier för state-uppdateringar
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
}`
						}}
					>
						ChangeNotifierProvider för tillståndshantering
					</li>
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

	<Slide
		in={async () => {
			showcode = false
			await code4.update``
		}}
	>
		<Title title="Responsiv design"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Använd MediaQuery för att få skärmstorlek
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
}`
						}}
					>
						Anpassa layout baserat på skärmstorlek
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Använd LayoutBuilder för mer precis kontroll
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
)`
						}}
					>
						LayoutBuilder för flexibel layout
					</li>
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

	<Slide
		in={async () => {
			showcode = false
			await code5.update``
		}}
	>
		<Title title="Animationer"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`// Hero animation mellan två vyer
// Första vyn
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/image.jpg'),
);

// Andra vyn
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/image.jpg'),
);`
						}}
					>
						Hero animationer
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`// Anpassad page transition
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
}`
						}}
					>
						Anpassade page transitions
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`// Implicit animation
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  width: isExpanded ? 200.0 : 100.0,
  height: isExpanded ? 200.0 : 100.0,
  color: isExpanded ? Colors.blue : Colors.red,
  child: FlutterLogo(),
)`
						}}
					>
						Implicit animationer
					</li>
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

	<Slide
		in={async () => {
			showcode = false
			await code6.update``
		}}
	>
		<Title title="Theming"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Konfigurera Material 3 tema
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
)`
						}}
					>
						Material 3 theming
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Anpassat tema
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
);`
						}}
					>
						Anpassa specifika tema-komponenter
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Använd tema i widgets
Text(
  'Rubrik',
  style: Theme.of(context).textTheme.headlineLarge,
),`
						}}
					>
						Använda tema i widgets
					</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							lang="dart"
							theme="catppuccin-frappe"
							bind:this={code6}
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
