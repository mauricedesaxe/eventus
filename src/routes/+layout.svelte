<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-10">
		<slot />
	</main>

	<footer class="bg-gray-100 p-4 text-center">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
