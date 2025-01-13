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
		<Title title="Uppgift 5: Firebase Integration"></Title>
		<Content>
				<ul>
					<li class="fragment">Migrera från HTTP server till Firebase som backend</li>
					<li class="fragment">Krav för godkänt (G):</li>
					<ul>
						<li class="fragment">Firestore repositories för all data</li>
						<li class="fragment">Anpassa BLoCs för Firebase API</li>
						<li class="fragment">Email/lösenord autentisering</li>
					</ul>
					<li class="fragment">Extra för VG (minst 1):</li>
					<ul>
						<li class="fragment">Realtidsuppdateringar</li>
						<li class="fragment">Tredjepartsautentisering (Google, GitHub etc)</li>
						<li class="fragment">Cloud Functions för att koppla Firebase Auth med Firebase Firestore</li>
					</ul>
				</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Vad är Firebase?"></Title>
		<Content>
				<ul>
					<li class="fragment">Googles plattform för app-utveckling</li>
					<li class="fragment">Backend-as-a-Service (BaaS) lösning</li>
					<li class="fragment">Ersätter behovet av egen backend</li>
					<li class="fragment">Huvudkomponenter vi kommer använda:</li>
					<ul>
						<li class="fragment">Firebase Authentication</li>
						<li class="fragment">Cloud Firestore (NoSQL, dokumentdatabas, lagrat som json)</li>
					</ul>
				</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Dagens Demo - Setup"></Title>
		<Content>
				<ul>
					<li class="fragment">Skapa Firebase projekt</li>
					<li class="fragment">Konfigurera Firestore Database (EU region)</li>
					<li class="fragment">Använda Firebase CLI</li>
					<li class="fragment">Skapa Firebase repositories</li>
					<li class="fragment">Konfigurera Flutter projekt för Firebase</li>
					<li class="fragment">Allt för godkänt som rör Firestore(databasen), nästa vecka authenticering</li>

				</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Migration till Firebase"></Title>
		<Content>
				<ul>
					<li class="fragment">Byt ut HTTP repositories mot Firebase repositories</li>
					<li class="fragment">Viktiga ändringar:</li>
					<ul>
						<li class="fragment">ID:n blir strings istället för int</li>
						<li class="fragment">Firestore anrop istället för HTTP</li>
						<li class="fragment">Realtidsuppdateringar möjliga, men inte idag, se länkad dokumentation i uppgift</li>
					</ul>
					<li class="fragment">Samma BLoC-struktur kan behållas</li>
				</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Att tänka på"></Title>
		<Content>
				<ul>
					<li class="fragment">Test mode på databasen = alla med config kan läsa/skriva</li>
					<li class="fragment">iOS/macOS config endast om du har Mac (när du konfigurerar firebase)</li>
					<li class="fragment">Viktigt med rätt application/bundle ID för iOS/Android</li>
					<ul>
						<li class="fragment">finns i källkoden för android i <code>build.gradle</code> och läses i Xcode på Mac</li>
					</ul>
					<li class="fragment">Initiera Firebase vid app-start</li>
				</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Demo time?"></Title>
		<Content>
			<div class="mt-60 text-center">Demo time!</div>
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
