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
		<Title title="Firebase Autentisering: Utmaningar"></Title>
		<Content>
			<ol>
				<li class="fragment">Förstå kärnproblemet</li>
				<li class="fragment">Firebase Autentisering vs Databaslagring</li>
				<li class="fragment">Varför vi behöver koppla systemen</li>
				<li class="fragment">Lösningsmetoder</li>
				<ul>
					<li class="fragment">Firebase Functions (Serverlös)</li>
					<li class="fragment">Applikationsnivå-registrering</li>
					<li class="fragment">För- och nackdelar med varje metod</li>
					<li class="fragment">Implementeringsöverväganden</li>
					<li class="fragment">Best practices</li>
					<li class="fragment">Praktiska användningsfall</li>
				</ul>
			</ol>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Kärnproblemet"></Title>
		<Content>
			<ol>
				<li class="fragment">Firebase Auth och Databas är separata system</li>
				<li class="fragment">Auth skapar användaruppgifter</li>
				<li class="fragment">Databasen behöver egen användarrepresentation</li>
				<li class="fragment">Båda systemen måste hållas synkroniserade</li>
			</ol>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Varför koppla ihop systemen?"></Title>
		<Content>
			<ol>
				<li class="fragment">Auth ger endast grundläggande användarinfo</li>
				<li class="fragment">Extra användardata måste lagras i databasen</li>
				<li class="fragment">StateChangeStream visar endast information från auth-systemet</li>
				<li class="fragment">Profildata kräver databasinformation</li>
			</ol>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Lösning 1: Firebase Functions"></Title>
		<Content>
			<ol>
				<li class="fragment">Serverlösa funktioner fångar auth-skapande</li>
				<li class="fragment">Blockerande funktion säkerställer synkronisering</li>
				<li class="fragment">Transaktionell operation garanterar konsistens</li>
				<li class="fragment">Kräver aktiverad fakturering (kreditkort behövs)</li>
			</ol>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Lösning 2: Applikationsflöde"></Title>
		<Content>
			<ol>
				<li class="fragment">Inga faktureringskrav</li>
				<li class="fragment">Implementerar mellanliggande registreringssteg</li>
				<li class="fragment">Kontrollerar saknade databasinlägg</li>
				<li class="fragment">Samlar in ytterligare användarinformation</li>
				<li class="fragment">Skapar databasinlägg innan flödet slutförs</li>
			</ol>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Implementeringsflöde"></Title>
		<Content>
			<ol>
				<li class="fragment">Användaren slutför autentisering</li>
				<li class="fragment">Appen kontrollerar databasinlägg</li>
				<li class="fragment">Vid saknat inlägg, visa registreringsformulär</li>
				<li class="fragment">Samla in ytterligare information</li>
				<ul>
					<li class="fragment">Profildetaljer</li>
					<li class="fragment">Obligatorisk information</li>
					<li class="fragment">Skapa databasinlägg</li>
					<li class="fragment">Slutför användarflöde</li>
					<li class="fragment">Visa huvudapplikationen</li>
				</ul>
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
