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
		<Title title="Nuvarande Kursupplägg: Fullstack Dart/Flutter"></Title>
		<Content>
			<ul>
				<li class="fragment">30 min konceptgenomgång med slides</li>
				<li class="fragment">30-45 min live-kodning demonstration</li>
				<li class="fragment">Praktiska inlämningsuppgifter som bygger på koncepten</li>
				<li class="fragment">
					Tydlig uppmaning varje vecka vad de bör göra på sina uppgifter den veckan
				</li>
				<li class="fragment">Handledning fri hjälp, studentstyrd, beror på deras problem</li>
				<li class="fragment">16 föreläsningar + 6 examinationer över ~15 veckor</li>
				<li class="fragment">Progression: Dart → Flutter → Firebase/Externa APIs</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Nuvarande Kursupplägg som blended (utan större ändringar)"></Title>
		<Content>
			<ul>
				<li class="fragment">Att ta del av innan</li>
				<ul>
					<li class="fragment">30 min konceptgenomgång med slides</li>
					<li class="fragment">30-45 min live-kodning demonstration</li>
					<li class="fragment">Praktiska inlämningsuppgifter som bygger på koncepten</li>
					<li class="fragment">
						Tydlig uppmaning varje vecka vad de bör göra på sina uppgifter den veckan
					</li>
				</ul>

				<li class="fragment">Att göra på plats</li>
				<ul>
					<li class="fragment">Handledning fri hjälp, studentstyrd, beror på deras problem</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Självlett innehåll"></Title>
		<Content>
			<ul>
				<li class="fragment">Förinspelade mikro-föreläsningar (2-15 min)</li>
				<li class="fragment">Interaktiva kodövningar i DartPad (tillgängligt i browser)</li>
				<ul>
					<li class="fragment">Förberedda kodsnuttar som de kan fortsätta laborera med.</li>
				</ul>
				<li class="fragment">Självrättande quiz för konceptförståelse</li>
				<li class="fragment">Länkar till dokumenterade best practices och mönster</li>
				<li class="fragment">GitHub Discussions / Classroom för kodgranskningar?</li>
				<ul>
					<li class="fragment">För eleverna att ta del av varandras arbete?</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Lärarlett innehåll"></Title>
		<Content>
			<ul>
				<li class="fragment">Förändringar lektionstid</li>
				<ul>
					<li class="fragment">15 min frågor från förarbete istället för 30 min föreläsning</li>
					<li class="fragment">Utökad demo-tid med kollaborativ kodning</li>
				</ul>
				<li class="fragment">Interaktiva moment</li>
				<ul>
					<li class="fragment">
						Kollaborativ programmering under demo-sessioner, sokratisk metod? Mindre av en monolog
					</li>
					<li class="fragment">
						Live-quiz för förståelsekontroll? Förstod de problemet? Vilket koncept bör
						jag använda här?
					</li>
				</ul>
				<li class="fragment">Strukturerad demonstration</li>
				<ul>
					<li class="fragment">
						Uppdelade demo-block med tid för att tänka efter, diskussion i breakouts. Nu ska vi göra X, vad tror ni att vi behöver för att göra det?
					</li>
					<li class="fragment">Direkt studentmedverkan i kodningen</li>
				</ul>
				<li class="fragment">Handledning</li>
				<ul>
					<li class="fragment">
						De har fortfarande individuella uppgifter, de möter olika motgångar
					</li>
					<li class="fragment">
						<strong>Handledning fortfarande studentstyrd? De kommer med problemen?</strong>
					</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Andragogik (pedagogik för gamla)"></Title>
		<Content>
			<ul>
				<li class="fragment">Självstyrning: Flexibel tillgång till förberedande material</li>
				<li class="fragment">Erfarenhetsbaserat: Bygger på tidigare programmeringskunskap</li>
				<li class="fragment">Målorienterat: Tydlig progression mot komplett app</li>
				<li class="fragment">Relevans: Verkliga användningsfall och modern teknik</li>
				<li class="fragment">Praktisk tillämpning: Fokus på hands-on utveckling</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Föreslagna Förbättringar"></Title>
		<Content>
			<ol>
				<li class="fragment">Omstrukturera till "Flipped Classroom"</li>
				<ul>
					<li class="fragment">Teori före lektion via videos</li>
					<li class="fragment">Mer workshop-tid under lektion</li>
				</ul>
				<li class="fragment">Utökad digital infrastruktur</li>
				<ul>
					<li class="fragment">GitHub Classroom?</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Områden för Feedback"></Title>
		<Content>
			<ol>
				<li class="fragment">Balans mellan synkront/asynkront innehåll</li>
				<li class="fragment">Effektiva sätt att mäta förståelse online</li>
				<li class="fragment">Verktyg för att stödja par-programmering på distans</li>
				<li class="fragment">Strategier för att behålla engagemang i online-miljö</li>
			</ol>
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
