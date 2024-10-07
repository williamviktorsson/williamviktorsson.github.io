<script lang="ts">
	import { Action, Slide, Transition } from '@animotion/core'
	import { onDestroy } from 'svelte'
	import Title from './title.svelte'
	import { Confetti } from 'svelte-confetti'

	let sprinkles: boolean = $state(false)
	let size = $state(5)
	let amount = $state(300)

	let classes: string = $state('h-full place-content-center place-items-center')

	let t: string | undefined = $state(undefined)
	let timer: number | undefined
	let update = () => {
		let d = new Date()

		t = d.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		})

		t.replace(':', ' ')
		t = t
	}

	$effect(() => {
		clearInterval(timer)
		update()
		timer = setInterval(update, 1000)
		sprinkles = true
	})

	onDestroy(() => {
		console.log('dest')
		clearInterval(timer)
		sprinkles = false
	})
</script>

<Slide
	animate
	in={() => {
		clearInterval(timer)
		update()
		timer = setInterval(update, 1000)
		sprinkles = true
	}}
	out={() => {
		sprinkles = false
		clearInterval(timer)
	}}
	class={classes}
>
	{#if sprinkles}
		<div
			style="
position: fixed;
top: -150px;
left: 0px;
right: 0px;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
pointer-events: none;"
		>
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[0, 2000]}
				infinite={true}
				{size}
				duration={3000}
				{amount}
				fallDistance="100vh"
				destroyOnComplete={false}
			/>
		</div>
	{/if}

	<Title border={false} title="Hybridutveckling med Flutter"></Title>

	<div>
		{#if t}
			<h1 class="glowup text-9xl font-extrabold">{t}</h1>
		{/if}
	</div>
</Slide>
