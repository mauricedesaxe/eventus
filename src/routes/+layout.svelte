<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="bg-gray-100 p-4 text-center">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

