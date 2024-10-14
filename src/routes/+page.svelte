<script lang="ts">
	import { Presentation, Slide } from '@animotion/core'
	import Title from '$lib/title.svelte'
	import Content from '$lib/content.svelte'

	let slides = 3
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
			<div class="flex flex-col justify-between h-full">
				<ol>
					{#each Array(slides) as _, index}
						<li><a href="/{index + 1}">Föreläsning {index + 1}</a></li>
					{/each}
				</ol>
				<li><a href="/tutoring">Handledning</a></li>
			</div>
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
