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
		<Title title="Flutter Deployment - Översikt"></Title>
		<Content>
			<ul>
				<li class="fragment">Idag går vi igenom:</li>
				<ul>
					<li class="fragment">Kodskydd och obfuskering</li>
					<li class="fragment">Web deployment med Firebase</li>
					<li class="fragment">App-ikoner och resurser för olika plattformar</li>
					<li class="fragment">Signering och distribution</li>
					<li class="fragment">App Store krav och review-process</li>
					<li class="fragment">Versionshantering och beta-distribution</li>
					<li class="fragment">CI/CD-verktyg</li>
					<li class="fragment">Plattformsspecifika konfigurationsfiler</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Kod-obfuskering"></Title>
		<Content>
			<ul>
				<li class="fragment">Kommando för obfuskering:</li>
				<ul>
					<li class="fragment">
						<code>flutter build appbundle --obfuscate --split-debug-info=/admin_app/debug_info</code
						>
					</li>
					<li class="fragment">byt ut <strong>admin_app</strong> mot namnet på din app</li>
					<li class="fragment">även <strong>debug_info</strong> kan du kalla något annat</li>
				</ul>
				<li class="fragment">Fungerar på alla build targets utom web</li>
				<li class="fragment">Debugging av stacktrace:</li>
				<ul>
					<li class="fragment">
						Kräver de-obfuskering med <code
							>flutter symbolize -i &lt;symbol fil från debug_info mappen&gt;</code
						>
					</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Web Deployment"></Title>
		<Content>
			<ul>
				<li class="fragment">Firebase deployment steg:</li>
				<ul>
					<li class="fragment"><code>firebase experiments:enable webframeworks</code></li>
					<li class="fragment"><code>firebase init hosting</code></li>
					<li class="fragment"><code>firebase deploy</code></li>
				</ul>
				<li class="fragment">CLI förstår automatiskt framework-typen</li>
				<li class="fragment">Stödjer express/Next/angular/flutter</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="App-ikoner och Resurser"></Title>
		<Content>
			<ul>
				<li class="fragment">Generera app-ikon för varje plattform</li>
				<li class="fragment">Specificera sökväg i plattformsspecifik konfig-fil</li>
				<li class="fragment">Sparas i plattformsspecifika resursmappar:</li>
				<ul>
					<li class="fragment">Android: <code>android/app/src/main/res/</code></li>
					<li class="fragment">iOS: <code>ios/Runner/Assets.xcassets</code></li>
					<li class="fragment">Windows: <code>windows/runner/resources/</code></li>
					<li class="fragment">Linux: <code>snap/gui/</code></li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Signering av Applikationer"></Title>
		<Content>
			<ul>
				<li class="fragment">Krävs för alla plattformar utom Linux & web</li>
				<li class="fragment">Säkerställer betrodd utvecklare</li>
				<li class="fragment">Verifierar att appen inte modifierats efter bygge</li>
				<li class="fragment">Plattformsspecifik hantering:</li>
				<ul>
					<li class="fragment">
						Android: Signering via build.gradle med signeringsnycklar från Google Play, används med
						--release flagga
					</li>
					<li class="fragment">iOS/macOS: Via App Store</li>
					<ul>
						<li class="fragment">Appen signeras i samband med uppladdning</li>
					</ul>
					<li class="fragment">
						Windows: Signeras vid uppladdning till Microsoft Store eller egen signering (<a
							href="https://docs.flutter.dev/platform-integration/windows/building#building-your-own-zip-file-for-windows"
							>länk</a
						>)
					</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Distribution per Plattform"></Title>
		<Content>
			<ul>
				<li class="fragment">macOS: Möjligt att distribuera signerad .dmg utan developer-konto</li>
				<li class="fragment">iOS: .ipa kräver Apple Developer-konto</li>
				<li class="fragment">
					Linux: Primärt via Snap Store (<a href="https://snapcraft.io/">länk</a>)
				</li>
				<li class="fragment">Linux alternativ: .deb (Debian/Ubuntu) eller .rpm (Fedora)</li>
				<ul>
					<li class="fragment">Kräver att du laddar ned ganska många buildsystem </li>
				</ul>
				<li class="fragment">Windows: Microsoft Store eller egen .exe-distribution(zip med allt i) eller windows installer</li>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Konfiguration och ID:n"></Title>
		<Content>
			<ul>
				<li class="fragment">Verifiera app/bundle ID:n i alla konfig-filer</li>
				<li class="fragment">ID:n måste matcha registrerade värden i:</li>
				<ul>
					<li class="fragment">Respektive app store</li>
					<li class="fragment">API:er och tjänster</li>
					<li class="fragment">Alla plattformskonfigurationer</li>
				</ul>
				<li class="fragment">Vid ID-ändring: Uppdatera överallt</li>
			</ul>
		</Content>
	</Slide>

	
	<Slide>
		<Title title="Versionshantering"></Title>
		<Content>
			<ul>
				<li class="fragment">Uppdatera version i pubspec.yaml</li>
				<li class="fragment">Plattformsspecifika uppdateringar:</li>
				<ul>
					<li class="fragment">Linux: snapcraft.yaml</li>
					<li class="fragment">iOS: XCode konfiguration</li>
				</ul>
				<li class="fragment">Olika distributionskanaler:</li>
				<ul>
					<li class="fragment">iOS/Android: beta/release/testing</li>
					<li class="fragment">Windows: "package flight" och "flight groups"</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Mobil Distribution"></Title>
		<Content>
			<ul>
				<li class="fragment">Omfattande app-beskrivningar krävs</li>
				<li class="fragment">Dokumentera:</li>
				<ul>
					<li class="fragment">Användningsfall</li>
					<li class="fragment">Hårdvaru-API användning</li>
					<li class="fragment">Screenshots (landscape/portrait)</li>
				</ul>
				<li class="fragment">Beta/testing före officiell release</li>
				<li class="fragment">iOS: TestFlight för beta (kräver separat app-installation)</li>
				<li class="fragment">Android: Direkt via Play Store som vanliga appar</li>
			</ul>
		</Content>
	</Slide>


	<Slide>
		<Title title="App Review Process"></Title>
		<Content>
			<ul>
				<li class="fragment">Krav för review:</li>
				<ul>
					<li class="fragment">Testinloggningar</li>
					<li class="fragment">Navigationsguide</li>
					<li class="fragment">Användningsbeskrivning</li>
				</ul>
				<li class="fragment">Juridiska krav:</li>
				<ul>
					<li class="fragment">GDPR-dokumentation</li>
					<li class="fragment">Schrems 2 för tredjelandsöverföringar</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="CI/CD och lite om Windows"></Title>
		<Content>
			<ul>
				<li class="fragment">
					Följ alltid <a href="https://docs.flutter.dev/deployment"
						>Flutter:s officiella deploymentguide</a
					>
				</li>
				<li class="fragment">Codemagic för molnbaserad CI/CD</li>
				<ol>
					<li class="fragment">
						Finns CLI open source redo att ladda ned som deras tjänst använder. Det kan du använda
						också för att bygga + deploya.
					</li>
					<li class="fragment">
						CLI verktyg: <a href="https://github.com/codemagic-ci-cd/cli-tools"
							>Codemagic CLI tools</a
						>
					</li>
				</ol>
				<li class="fragment">
					Alternativ: <a href="https://docs.fastlane.tools/">Fastlane</a> med GitHub Actions
				</li>
				<li class="fragment">Windows-specifikt:</li>
				<ul>
					<li class="fragment">
						<a href="https://pub.dev/packages/fluent_ui">fluent_ui</a> för Windows design
					</li>
					<li class="fragment">
						<a href="https://pub.dev/packages/fluentui_system_icons">fluentui_system_icons</a> för ikoner
					</li>
				</ul>
			</ul>
		</Content>
	</Slide>

	<Slide>
		<Title title="Android Konfigurationsfiler"></Title>
		<Content>
			<ul>
				<li class="fragment">android/app/build.gradle:</li>
				<ul>
					<li class="fragment">App version</li>
					<li class="fragment">Build inställningar</li>
					<li class="fragment">Signing configs</li>
					<li class="fragment">Dependencies</li>
					<li class="fragment">SDK versioner</li>
				</ul>
				<li class="fragment">android/app/src/main/AndroidManifest.xml:</li>
				<ul>
					<li class="fragment">App permissions</li>
					<li class="fragment">App namn</li>
					<li class="fragment">Internet access inställningar</li>
					<li class="fragment">Övriga app-konfigurationer</li>
				</ul>
				<li class="fragment">[project]/android/key.properties:</li>
				<ul>
					<li class="fragment">Keystore information</li>
					<li class="fragment">Password referenser</li>
					<li class="fragment">Keystore filplats</li>
				</ul>
				<li class="fragment">android/app/src/main/res/:</li>
				<ul>
					<li class="fragment">App-ikoner i olika upplösningar</li>
					<li class="fragment">Launcher ikoner</li>
					<li class="fragment">Övriga resurser</li>
				</ul>
			</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="iOS Konfigurationsfiler"></Title>
		<Content>
			<ul>

				<li class="fragment">ios/Runner/Info.plist:</li>
				<ul>
					<li class="fragment">App permissions</li>
					<li class="fragment">Grundläggande app-konfigurationer</li>
					<li class="fragment">Display namn</li>
				</ul>

				
				<li class="fragment">ios/Runner/Assets.xcassets:</li>
				<ul>
					<li class="fragment">App-ikoner</li>
					<li class="fragment">Launch images</li>
				</ul>

			</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="macOS Konfigurationsfiler"></Title>
		<Content>
			<ul>
				<li class="fragment">macos/Runner/Configs/AppInfo.xcconfig:</li>
				<ul>
					<li class="fragment">Produktnamn</li>
					<li class="fragment">Bundle identifier</li>
				</ul>
				<li class="fragment">macos/Runner.xcworkspace:</li>
				<ul>
					<li class="fragment">Projektinställningar</li>
					<li class="fragment">Build konfigurationer</li>
				</ul>
				<li class="fragment">macos/Runner/Assets.xcassets:</li>
				<ul>
					<li class="fragment">App-ikoner</li>
					<li class="fragment">Resurser</li>
				</ul>
			</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Windows Konfigurationsfiler"></Title>
		<Content>
			<ul>
				<li class="fragment">windows/runner/Runner.rc:</li>
				<ul>
					<li class="fragment">App-ikon referenser</li>
					<li class="fragment">Versionsinformation</li>
				</ul>
				<li class="fragment">windows/runner/resources/:</li>
				<ul>
					<li class="fragment">App-ikoner (app_icon.ico)</li>
					<li class="fragment">Resursfiler</li>
				</ul>
				<li class="fragment">pubspec.yaml (MSIX konfiguration):</li>
				<ul>
					<li class="fragment">MSIX paketering</li>
					<li class="fragment">Versionsinformation</li>
					<li class="fragment">Display namn</li>
				</ul>
			</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Linux Konfigurationsfiler"></Title>
		<Content>
			<ul>
				<li class="fragment">snap/snapcraft.yaml:</li>
				<ul>
					<li class="fragment">Snap konfiguration</li>
					<li class="fragment">App metadata</li>
					<li class="fragment">Build instruktioner</li>
					<li class="fragment">Dependencies</li>
				</ul>
				<li class="fragment">snap/gui/:</li>
				<ul>
					<li class="fragment">.desktop fil för app launcher</li>
					<li class="fragment">App-ikon (PNG format)</li>
					<li class="fragment">Menyintegration inställningar</li>
				</ul>
			</ul>
		</Content>
	</Slide>
	
	<Slide>
		<Title title="Gemensam Konfigurationsfil"></Title>
		<Content>
			<ul>
				<li class="fragment">pubspec.yaml:</li>
				<ul>
					<li class="fragment">Versionsnummer (påverkar alla plattformar)</li>
					<li class="fragment">Grundläggande app-information</li>
					<li class="fragment">Dependencies</li>
					<li class="fragment">Plattformsspecifika konfigurationer</li>
				</ul>
			</ul>
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
