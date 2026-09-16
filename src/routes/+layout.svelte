<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><title>Nameless link</title></svelte:head>

<main class="m-3">
	{@render children()}
</main>
