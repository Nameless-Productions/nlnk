<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="justify-center text-center">
	<p class="text-xl font-bold">Nameless Link</p>
	<p class="text-sm text-gray-600">
		dead simple, <a
			href="https://github.com/nameless-productions/nlnk"
			target="_blank"
			class="text-blue-500 underline">open source</a
		> link shortener. no tracking, no logs, just a link.
	</p>
	<br />
	<form action="?/create" method="post" use:enhance>
		<input
			type="url"
			name="url"
			required
			class="w-md rounded-l-lg border border-gray-500 p-1"
			placeholder="https://example.com/your/very/very/long/url"
		/>
		<button
			type="submit"
			class="-ml-2 cursor-pointer rounded-r-lg border border-gray-500 p-1 duration-300 hover:bg-neutral-700"
			>Shorten</button
		>
	</form>
	{#if form?.id}
		<p>Shortened: {`${window.location.protocol}//${window.location.host}/${form.id}`}</p>
	{/if}
</div>
