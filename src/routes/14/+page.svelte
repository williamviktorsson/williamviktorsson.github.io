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
		<Title title="Lokala Notifikationer i Flutter"></Title>
		<Content>
			<ol>
				<li class="fragment">Vad ska vi bygga?</li>
				<li class="fragment">Parkeringsapplikation med påminnelser</li>
				<li class="fragment">Examination av systemintegration</li>
				<li class="fragment">Flutter Local Notifications & Platform Integration</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Hårdvaru/System API:er: Allmän Arbetsgång"></Title>
		<Content>
			<ol>
				<li class="fragment">Plattformsspecifik Konfiguration</li>
				<ul>
					<li class="fragment">AndroidManifest.xml (Android)</li>
					<li class="fragment">Info.plist & AppDelegate.swift (iOS)</li>
				</ul>
				<li class="fragment">Behörighetshantering</li>
				<li class="fragment">Native till Flutter-kommunikation</li>
				<li class="fragment">Livscykelhantering</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Implementation Steg"></Title>
		<Content>
			<ol>
				<li class="fragment">Grundläggande Setup</li>
				<ul>
					<li class="fragment">Plugin installation</li>
					<li class="fragment">Plattformskonfiguration</li>
				</ul>
				<li class="fragment">Notifikationshantering</li>
				<ul>
					<li class="fragment">Behörigheter</li>
					<li class="fragment">Schemaläggning</li>
				</ul>
				<li class="fragment">Integration med Parkeringar</li>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Krav för Examination"></Title>
		<Content>
			<ol>
				<li class="fragment">Grundnivå (G)</li>
				<ul>
					<li class="fragment">Fungerande notifikationer på <strong>en</strong> plattformar</li>
					<li class="fragment">Korrekt behörighetshantering</li>
					<li class="fragment">Integration med befintlig BLoC-arkitektur</li>
				</ul>
				<li class="fragment">Utökad Funktionalitet (VG) - Välj 1</li>
				<ul>
					<li class="fragment">Anpassade påminnelser (ljud/text)</li>
					<li class="fragment">Interaktiva notifikationer (knappval, t.ex. förläng parkering)</li>
					<li class="fragment">Lägg till notiser för ytterligare <strong>en</strong> platform</li>
				</ul>
			</ol>
		</Content>
	</Slide>

	<Slide>
		<Title title="Vanliga Utmaningar & Lösningar"></Title>
		<Content>
			<ol>
				<li class="fragment">Plattformsspecifika Skillnader</li>
				<ul>
					<li class="fragment">Android vs iOS konfiguration</li>
					<li class="fragment">Behörighetsmodeller</li>
				</ul>
				<li class="fragment">Timing & Bakgrundshantering</li>
				<ul>
					<li class="fragment">Tidszoner</li>
					<li class="fragment">Batterioptimering</li>
				</ul>
				<li class="fragment">Testning & Verifiering</li>
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
