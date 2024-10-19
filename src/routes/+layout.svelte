<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from '../Footer.svelte';
</script>

<div class="app">
	<Header />

	<slot />

	<Footer />
</div>
