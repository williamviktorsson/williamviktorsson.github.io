<script lang="ts">
	let { title, border = true }: { title: string; border?: boolean } = $props()
</script>

<li style="list-style: none;" class="class slide-title mb-4 text-left text-4xl font-bold">
	{title}
</li>
{#if border}
	<hr class="border-white-500 border-t-4" />
{/if}
