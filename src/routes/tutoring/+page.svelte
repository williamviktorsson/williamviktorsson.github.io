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
	<Slide
		in={() => {
			showcode = false
		}}
	>
		<Title title="Null Safety i Dart: Grunderna"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code1.update``
						}}
					>
						Varför är null safety viktigt?
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`// Utan null safety
String namn;
print(namn.length); // Potentiellt runtime-fel

// Med null safety
String? namn;
print(namn?.length); // Säkert, skriver ut null om namn är null

String ickeNullbartNamn = 'Johan';
print(ickeNullbartNamn.length); // Alltid säkert`
							}}
						>
							Förhindrar null reference errors
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`// Nullable typ
int? nullbartNummer = null;

// Non-nullable typ
int ickeNullbartNummer = 42;

// Fel: Kan inte tilldela null till en non-nullable typ
// int ickeNullbartNummer = null;`
							}}
						>
							Tilldelning av null
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code1.update``
						}}
					>
						Viktiga koncept
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`// Null-aware operator (?.)
String? namn = null;
print(namn?.length); // Säkert, skriver ut null

// Null assertion operator (!)
String? nullbartNamn = 'Johan';
String ickeNullbartNamn = nullbartNamn!; // Kastar exception om nullbartNamn är null

// Null-coalescing operator (??)
String? namn;
String visningsNamn = namn ?? 'Gäst';`
							}}
						>
							Null-aware operators (?, !, ??)
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code1.update`late String beskrivning;

void initieraBeskrivning() {
    beskrivning = 'Detta initieras senare';
}

void användBeskrivning() {
    initieraBeskrivning();
    print(beskrivning); // Säkert att använda nu
}`
							}}
						>
							Late initialization
						</li>
					</ol>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code1}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide
		in={() => {
			showcode = false
		}}
	>
		<Title title="Null Safety i Dart: Avancerade ämnen"></Title>
		<Content>
			<Split>
				<ul>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code3.update``
						}}
					>
						Flow Analysis och Type Promotion
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`void bearbetaNamn(String? namn) {
    if (namn != null) {
        // namn befordras till non-nullable String
        print(namn.length);
    } else {
        print('Namnet är null');
    }
}`
							}}
						>
							Dart "type promotear" non-nullability inom null-kontroller
						</li>
					</ol>
					<li
						class="fragment"
						oncurrent={async () => {
							showcode = false
							await code3.update``
						}}
					>
						Bästa praxis
					</li>
					<ol>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`// Undvik att använda ! när det är möjligt
String? nullbartNamn = hämtaNamn();
String namn = nullbartNamn!; // Riskabelt

// Bättre tillvägagångssätt
String? nullbartNamn = hämtaNamn();
if (nullbartNamn != null) {
    String namn = nullbartNamn; // Säkert
} else {
    // Hantera null-fallet
}`
							}}
						>
							Minimera användningen av null assertion operator (!)
						</li>
						<li
							class="fragment"
							oncurrent={async () => {
								showcode = true
								await code3.update`// Använd ?? för default values
String? namn;
String visningsNamn = namn ?? 'Gäst';

// Använd ??= för null-aware assignment
String? namn;
namn ??= 'Gäst';`
							}}
						>
							Utnyttja null-aware operators effektivt
						</li>
					</ol>
				</ul>
				<div>
					<div class="enter" hidden={!showcode}>
						<Code
							code={``}
							theme="catppuccin-frappe"
							lang="dart"
							autoIndent={true}
							bind:this={code3}
							options={{
								duration: 600,
								stagger: 15,
								containerStyle: false,
								lineNumbers: true
							}}
							class="overflow-y-clip"
						/>
					</div>
				</div>
			</Split>
		</Content>
	</Slide>

	<Slide>
		<Title title="Tack för idag!"></Title>
		<Content>
			<div class="mt-60 text-center">
				Det var allt för idag! Nästa vecka börjar det bli mer nytt innehåll och mer komplexa
				koncept!
			</div>
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
