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
				<li class="fragment">Layout-widgets</li>
				<li class="fragment">FutureBuilder</li>
				<li class="fragment">Dialog</li>
				<li class="fragment">Demo</li>
				<ul>
					<li class="fragment">Kommunikation med dart-server</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Layout widgets"></Title>
		<Content>
			<ol>
				<li class="fragment">Column</li>
				<ul>
					<li class="fragment">För vertikal placering av widgets i kolumner</li>
				</ul>
				<li class="fragment">Row</li>
				<ul><li class="fragment">För horisontell placering av widgets i rader</li></ul>
				<li class="fragment">Stack</li>
				<ul>
					<li class="fragment">För att lägga widgets ovanpå varandra</li>
					<li class="fragment">Använd Positioned för exakt placering inom Stack</li>
				</ul>
				<li class="fragment">Expanded</li>
				<ul>
					<li class="fragment">Låter widgets expandera för att fylla tillgängligt utrymme</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Layout widgets - fortsättning"></Title>
		<Content>
			<ol start="5">
				<li class="fragment">Wrap</li>
				<ul>
					<li class="fragment">
						Som Row/Column fast med automatiskt radbyte när utrymmet tar slut
					</li>
				</ul>
				<li class="fragment">ListView</li>
				<ul><li class="fragment">För scrollbara listor av widgets</li></ul>
				<li class="fragment">GridView</li>
				<ul><li class="fragment">För scrollbara rutnät av widgets</li></ul>
				<li class="fragment"><strong>Alla layout widgets kan kombineras</strong></li>
				<ul>
					<li class="fragment">Till exempel kan en ListView innehålla Rows med Stacks</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide
		in={async () => {
			showcode = false
			await code1.update``
		}}
	>
		<Title title="Layout Widgets - Column & Row"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`Column(
		children: [
			Text('Item 1'),
			Text('Item 2'),
			Text('Item 3'),
		],
	)`
						}}
					>
						Vertikal stapel av widgets
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`Row(
		children: [
			Text('Left'),
			Text('Center'),
			Text('Right'),
		],
	)`
						}}
					>
						Horisontell rad av widgets
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code1.update`Column(
		mainAxisAlignment: MainAxisAlignment.center,
		crossAxisAlignment: CrossAxisAlignment.stretch,
		children: [
			Text('Centered'),
			Text('And'),
			Text('Stretched'),
		],
	)`
						}}
					>
						Justeringsalternativ:
					</li>
					<ul>
						<li class="fragment">mainAxisAlignment - justerar i huvudaxelns riktning</li>
						<li class="fragment">crossAxisAlignment - justerar i tväraxelns riktning</li>
					</ul>
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
		<Title title="Stack & Positioned"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`Stack(
		children: [
			Image.asset('background.png'),
			Text('Overlaid Text'),
		],
	)`
						}}
					>
						Lägger widgets i lager ovanpå varandra
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code2.update`Stack(
		children: [
			Image.asset('background.png'),
			Positioned(
				bottom: 20,
				right: 20,
				child: Text('Bottom Right'),
			),
		],
	)`
						}}
					>
						Positioned för exakt placering
					</li>
					<li class="fragment">Vanliga användningsområden:</li>
					<ul>
						<li class="fragment">Märken, badges, notiser</li>
						<li class="fragment">Flytande element</li>
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
		<Title title="Expanded & Wrap"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`Row(
		children: [
			Expanded(
				flex: 2,
				child: Container(color: Colors.red),
			),
			Expanded(
				flex: 1,
				child: Container(color: Colors.blue),
			),
		],
	)`
						}}
					>
						Expanded fördelar tillgängligt utrymme
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code3.update`Wrap(
		spacing: 8.0,
		runSpacing: 8.0,
		children: [
			Chip(label: Text('Flutter')),
			Chip(label: Text('Dart')),
			Chip(label: Text('Mobile')),
			Chip(label: Text('Web')),
		],
	)`
						}}
					>
						Wrap hanterar innehåll som tar för mycket plats per automagi
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
		<Title title="ListView & GridView"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`ListView.builder(
		itemCount: items.length,
		itemBuilder: (context, index) {
			return ListTile(
				title: Text(items[index]),
			);
		},
	)`
						}}
					>
						ListView.builder för effektiv scrollning
					</li>
					<ul>
						<li class="fragment">Index går upp/ned av att användaren skrollar</li>
					</ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code4.update`GridView.builder(
		gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
			crossAxisCount: 2,
			mainAxisSpacing: 10,
			crossAxisSpacing: 10,
		),
		itemCount: items.length,
		itemBuilder: (context, index) {
			return Card(
				child: Center(
					child: Text(items[index]),
				),
			);
		},
	)`
						}}
					>
						GridView.builder för rutnätslayouter
					</li>
					<ul>
						<li class="fragment">GridDelegate för att hantera hur innehåll i grid placeras</li>
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
		<Title title="FutureBuilder"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`Future<String> fetchData() async {
		await Future.delayed(Duration(seconds: 2));
		return 'Data loaded!';
	}
	
	// In your build method:
	FutureBuilder<String>(
		future: fetchData(),
		builder: (context, snapshot) {
			if (snapshot.hasData) {
				return Text(snapshot.data!);
			}
			if (snapshot.hasError) {
				return Text('Error: \${snapshot.error}');
			}
			return CircularProgressIndicator();
		},
	)`
						}}
					>
						Grundläggande användning av FutureBuilder
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code5.update`FutureBuilder<List<String>>(
		future: fetchItems(),
		builder: (context, snapshot) {
			switch (snapshot.connectionState) {
				case ConnectionState.none:
					return Text('Press button to start');
				case ConnectionState.waiting:
					return CircularProgressIndicator();
				case ConnectionState.active:
					return Text('Active state');
				case ConnectionState.done:
					if (snapshot.hasError) 
						return Text('Error: \${snapshot.error}');
					return ListView.builder(
						itemCount: snapshot.data!.length,
						itemBuilder: (context, index) {
							return ListTile(
								title: Text(snapshot.data![index]),
							);
						},
					);
			}
		},
	)`
						}}
					>
						Hantering av olika tillstånd
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
		<Title title="Flutter Dialogs"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Simple alert dialog
	showDialog(
		context: context,
		builder: (context) => AlertDialog(
			title: Text('Warning'),
			content: Text('Are you sure?'),
			actions: [
				TextButton(
					onPressed: () => Navigator.pop(context),
					child: Text('Cancel'),
				),
				TextButton(
					onPressed: () {
						// Handle confirmation
						Navigator.pop(context);
					},
					child: Text('Confirm'),
				),
			],
		),
	)`
						}}
					>
						AlertDialog för enkla meddelanden
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Custom dialog
	showDialog(
		context: context,
		builder: (context) => Dialog(
			shape: RoundedRectangleBorder(
				borderRadius: BorderRadius.circular(20),
			),
			child: Padding(
				padding: EdgeInsets.all(20),
				child: Column(
					mainAxisSize: MainAxisSize.min,
					children: [
						CircleAvatar(
							radius: 40,
							child: Icon(Icons.check, size: 40),
						),
						SizedBox(height: 20),
						Text('Success!'),
						ElevatedButton(
							onPressed: () => Navigator.pop(context),
							child: Text('Close'),
						),
					],
				),
			),
		),
	)`
						}}
					>
						Anpassad dialog med styling
					</li>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = true
							await code6.update`// Bottom sheet
	showModalBottomSheet(
		context: context,
		builder: (context) => Container(
			padding: EdgeInsets.all(20),
			child: Column(
				mainAxisSize: MainAxisSize.min,
				children: [
					Text('Choose an option'),
					ListTile(
						leading: Icon(Icons.photo),
						title: Text('Gallery'),
						onTap: () {
							// Handle gallery selection
							Navigator.pop(context);
						},
					),
					ListTile(
						leading: Icon(Icons.camera),
						title: Text('Camera'),
						onTap: () {
							// Handle camera selection
							Navigator.pop(context);
						},
					),
				],
			),
		),
	)`
						}}
					>
						ModalBottomSheet för fler alternativ
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
		<Title title="Demo"></Title>
		<Content>
			<ol>
				<li class="fragment">Nytt projekt</li>
				<li class="fragment">Stateful/Statelesswidget</li>
				<li class="fragment">Basic navigering</li>
				<li class="fragment">Första vy, scaffold</li>
				<ul>
					<li class="fragment">Kommunikation med dart-server</li>
				</ul>
				<li class="fragment">ListView</li>
				<li class="fragment">FutureBuilder</li>
				<li class="fragment">AlertDialog</li>
			</ol>
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
