<script lang="ts">
	import { Presentation, Slide, Code } from '@animotion/core'
	import Front from '$lib/front.svelte'
	import Title from '$lib/title.svelte'
	import Content from '$lib/content.svelte'

	let slides = 2
</script>

<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: false,
		progress: false,
		autoAnimateEasing: 'ease',
		autoAnimateUnmatched: true
	}}
>
	<Slide>
		<Title title="Föreläsningar"></Title>
		<Content>
			<ol>
				{#each Array(slides) as _, index}
					<li><a href="/{index+1}">Föreläsning {index+1}</a></li>
				{/each}
			</ol>
		</Content>
	</Slide>
</Presentation>

<style>
	a {
		color: white;
	}

	li {
		list-style: none;
	}
</style>
