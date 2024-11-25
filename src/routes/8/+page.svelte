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
	let code7: Code

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
				<li class="fragment">Navigering</li>
				<li class="fragment">Modal/popup</li>
				<li class="fragment">Forms</li>
				<li class="fragment">Focus</li>
				<li class="fragment">Snackbar</li>
				<li class="fragment">Expanded</li>
				<li class="fragment">Scrolling</li>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Navigering i Flutter"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Grundläggande navigering
Navigator.push(
    context,
    MaterialPageRoute(
        builder: (context) => DetailScreen(),
    ),
);

// För att gå tillbaka
Navigator.pop(context);`
						}}
					>
						Grundläggande navigering med push/pop
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Konfigurera en GoRouter
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) => DetailScreen(
        id: state.params['id']!,
      ),
    ),
  ],
);

// Använda i MaterialApp
MaterialApp.router(
  routerConfig: router,
  title: 'Min App',
);`
						}}
					>
						Routing med GoRouter
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`// Navigera med GoRouter
context.go('/details/123');

// Med query parameters
context.goNamed(
  'details',
  params: {'id': '123'},
  queryParams: {'view': 'full'},
);

// Gå tillbaka
context.pop();`
						}}
					>
						Navigering med GoRouter
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
		<Title title="Modal och Popup"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`Bool? delete = await showDialog(
    context: context,
    builder: (context) => AlertDialog(
        title: Text('Bekräfta radering'),
        content: Text('Är du säker på att du vill radera?'),
        actions: [
            TextButton(
                onPressed: () => Navigator.pop(context), // pass null to caller
                child: Text('Avbryt'),
            ),
            TextButton(
                onPressed: () {
                    Navigator.pop(context, true); // pass true to caller of showDialog
                },
                child: Text('Radera'), 
            ),
        ],
    ),
);`
						}}
					>
						AlertDialog för snabba beslut
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`String? choice = showModalBottomSheet(
    context: context,
    builder: (context) => Container(
        height: 300,
        padding: EdgeInsets.all(16),
        child: Column(
            children: [
                Text('Välj alternativ'),
                ListTile(
                    leading: Icon(Icons.photo),
                    title: Text('Galleri'),
                    onTap: () => Navigator.pop(context, 'gallery'),
                ),
                ListTile(
                    leading: Icon(Icons.camera),
                    title: Text('Kamera'),
                    onTap: () => Navigator.pop(context, 'camera'),
                ),
            ],
        ),
    ),
);`
						}}
					>
						ModalBottomSheet för fler val
					</li>
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
		<Title title="Formulär"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.selectLines`*`
							await code3.update`final _formKey = GlobalKey<FormState>();
String? _email;

Form(
    key: _formKey,
    child: Column(
        children: [
            TextFormField(
                validator: (value) {
                    if (value == null || value.isEmpty) {
                        return 'Vänligen ange email';
                    }
                    if (!value.contains('@')) {
                        return 'Ogiltig email';
                    }
                    return null;
                },
                onSaved: (value) => _email = value,
            ),
            ElevatedButton(
                onPressed: () {
                    if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save(); // call onSaved for each field
                        ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Sparar $_email')),
                        );
                    }
                },
                child: Text('Spara'),
            ),
        ],
    ),
)`
						}}
					>
						Flutter Form
					</li>
					<ul>
						<li class="fragment">Widget som grupperar och hanterar flera FormFields</li>
						<li class="fragment">Underlättar att validera och hantera alla fält samtidigt</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.selectLines`1,5`
						}}
					>
						GlobalKey ger tillgång till formulärets tillstånd:
					</li>

					<ul>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.selectLines`1,5,22,23`
							}}
						>
							Används för validering och sparande
						</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.selectLines`8-19`
						}}
					>
						TextFormField:
					</li>

					<ul>
						<li class="fragment">Hanterar användarinput</li>
						<li class="fragment">Innehåller validering och sparlogik</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.selectLines`9-17,22`
						}}
					>
						Validering:
					</li>

					<ul>
						<li class="fragment">Körs när validate() kallas</li>
						<li class="fragment">null betyder valid input</li>
						<li class="fragment">String returnerar felmeddelande</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.selectLines`18,22-27`
						}}
					>
						Spara och hantera data:
					</li>

					<ul>
						<li class="fragment">onSaved körs för varje fält vid save()</li>
						<li class="fragment">validate() kontrollerar alla fält</li>
						<li class="fragment">SnackBar (förslagsvis) ger feedback till användaren</li>
					</ul>
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
			await code6.update``
		}}
	>
		<Title title="Fokushantering"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.selectLines`*`
							await code6.update`final _formKey = GlobalKey<FormState>();

// Fokushantering
final _nameFocus = FocusNode();

Form(
    key: _formKey,
    child: Column(
        children: [
            TextFormField(
                autofocus: true,  // Fokusera detta fält när formen visas
                onFieldSubmitted: (_) {
                    // Flytta fokus till nästa fält när användaren trycker Enter/Next
                    _nameFocus.requestFocus();
                },
                /* ... resten */
            ),
            TextFormField(
                focusNode: _nameFocus,
                onFieldSubmitted: (_) {
                    // Submitta formen när användaren trycker Enter/Done på sista fältet
                    if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save();
                        // TODO
                    }
                },
                /* ... resten */
            ),
        ],
    ),
)`
						}}
					>
						Formulär med fokushantering
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.selectLines`10-17`
						}}
					>
						Första fältet:
					</li>

					<ul>
						<li class="fragment">autofocus drar fokus när widgeten ritas ut</li>
						<li class="fragment">onFieldSubmitted flyttar fokus</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.selectLines`4,14,19`
						}}
					>
						FocusNode för att hantera fokus via kod:
					</li>

					<ul>
						<li class="fragment">Placera focusnoden på fält du vill kunna fokusera från kod</li>
						<li class="fragment">Anropa requestfocus för att fokusera</li>
					</ul>

					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.selectLines`14,18-28`
						}}
					>
						Andra fältet:
					</li>

					<ul>
						<li class="fragment">Tar emot fokus från första fältet</li>
						<li class="fragment">onFieldSubmitted submittar formen</li>
					</ul>
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

	<Slide
		in={async () => {
			showcode = false
			await code7.update``
		}}
	>
		<Title title="SnackBar Användning"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code7.update`// Grundläggande SnackBar
ScaffoldMessenger.of(context).showSnackBar(
	SnackBar(
		content: Text('Ändringar sparade'),
		duration: Duration(seconds: 2),
	),
);`
						}}
					>
						Enkel SnackBar för feedback
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code7.update`// SnackBar med action
ScaffoldMessenger.of(context).showSnackBar(
	SnackBar(
		content: Text('Item borttagen'),
		action: SnackBarAction(
			label: 'Ångra',
			onPressed: () {
				// Återställ borttagningen
				_restoreItem();
			},
		),
		duration: Duration(seconds: 4),
		backgroundColor: Colors.red,
	),
);`
						}}
					>
						SnackBar med åtgärd
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code7.update`// Hantera flera SnackBars
class SnackBarService {
	static void showSuccess(BuildContext context, String message) {
		ScaffoldMessenger.of(context)
			..hideCurrentSnackBar()
			..showSnackBar(
				SnackBar(
					content: Text(message),
					backgroundColor: Colors.green,
					behavior: SnackBarBehavior.floating,
					shape: RoundedRectangleBorder(
						borderRadius: BorderRadius.circular(10),
					),
				),
			);
	}

	static void showError(BuildContext context, String message) {
		ScaffoldMessenger.of(context)
			..hideCurrentSnackBar()
			..showSnackBar(
				SnackBar(
					content: Text(message),
					backgroundColor: Colors.red,
					behavior: SnackBarBehavior.floating,
				),
			);
	}
}`
						}}
					>
						Förslag: Utility-klass för SnackBars
					</li>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							lang="dart"
							theme="catppuccin-frappe"
							bind:this={code7}
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
		<Title title="Expanded Widget - Flexibel Utrymmesfördelning"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Basic Row with Expanded
Row(
  children: [
    Container(
      width: 100,
      color: Colors.blue,
      child: Text('Fixed'),
    ),
    Expanded(
      child: Container(
        color: Colors.red,
        child: Text('Takes remaining space'),
      ),
    ),
  ],
)`
						}}
					>
						Expanded
					</li>

					<ul>
						<li class="fragment">Används inom Row/Column</li>
						<li class="fragment">Barnet fyller tillgängligt utrymme</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Multiple Expanded widgets with flex
Column(
  children: [
    Expanded(
      flex: 2,  // Takes 2/3 of space
      child: Container(
        color: Colors.blue,
        child: Center(child: Text('Flex: 2')),
      ),
    ),
    Expanded(
      flex: 1,  // Takes 1/3 of space
      child: Container(
        color: Colors.red,
        child: Center(child: Text('Flex: 1')),
      ),
    ),
  ],
)`
						}}
					>
						Flex-egenskapen
					</li>

					<ul>
						<li class="fragment">Styr proportionen av utrymmet</li>
						<li class="fragment">Standardvärdet för flex är 1</li>
						<li class="fragment">Högre flex-värde tar mer utrymme</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`// Common use case: App layout
Column(
  children: [
    AppBar(title: Text('My App')),
    Expanded(
      child: ListView(
        children: [
          ListTile(title: Text('Item 1')),
          ListTile(title: Text('Item 2')),
          // More items...
        ],
      ),
    ),
    BottomNavigationBar(items: [/*...*/]),
  ],
)`
						}}
					>
						Vanliga Användningsområden
					</li>

					<ul>
						<li class="fragment">Scrollbart innehåll mellan fasta headers/footers</li>
						<li class="fragment">Responsiv layouthantering</li>
						<li class="fragment">Jämn fördelning av utrymme mellan element</li>
					</ul>
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
		<Title title="Scrolling i Flutter"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`SingleChildScrollView(
    physics: BouncingScrollPhysics(),
    child: Column(
        children: [
            for (var i = 0; i < 50; i++)
                ListTile(
                    title: Text('Item $i'),
                    subtitle: Text('Mer information...'),
                ),
        ],
    ),
),`
						}}
					>
						SingleChildScrollView för enkel scrollning av valfri Widget
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) {
        return ListTile(
            title: Text(items[index].title),
            subtitle: Text(items[index].subtitle),
            onTap: () {
                // Hantera tap på item
            },
        );
    },
    // Prestanda-optimeringar
    cacheExtent: 100.0, // Cacha items utanför synligt område
    addAutomaticKeepAlives: false, // Förhindra onödig state-bevaring
    addRepaintBoundaries: true, // Optimera omritning
),`
						}}
					>
						ListView.builder för effektiv scrollning
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`RefreshIndicator(
    onRefresh: () async {
        // Implementera uppdateringslogik här
        await Future.delayed(Duration(seconds: 1));
        setState(() {
            items = newItems;
        });
    },
    child: ListView.builder(
        controller: _scrollController, // För scrollposition
        itemCount: items.length,
        itemBuilder: (context, index) {
            // Ladda mer innehåll när vi når slutet
            if (index == items.length - 1) {
                _loadMoreItems();
            }
            return ListTile(
                title: Text(items[index].title),
            );
        },
    ),
),`
						}}
					>
						RefreshIndicator
					</li>
					<ul>
						<li class="fragment">
							Visar en laddningsindikator när användaren drar uppifrån och ned
						</li>
					</ul>
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
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">Det var allt för idag!</div>
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
