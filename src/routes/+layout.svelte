<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app">
	<Header />

	<slot />

	<Footer />
</div>
