<script lang="ts">
	import '../styles/app.css'
	import '../styles/tailwind.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Dart & Flutter @ STI</title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children()}
