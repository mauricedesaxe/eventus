<script lang="ts">
	import { page } from '$app/stores';

	// have to import this to use the modal, w3m-button, etc.
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
    import '@reown/appkit';
</script>

<header class="bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center p-4">
	<div class="flex items-center">
		<a href="/" class="text-2xl font-bold hover:underline">
			Eventus
		</a>
	</div>

	<nav class="flex items-center">
		<ul class="flex items-center gap-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="hover:underline">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="hover:underline">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle" class="hover:underline">Sverdle</a>
			</li>
		</ul>
	</nav>

	<div class="flex items-center">
		<w3m-button></w3m-button>
	</div>
</header>
