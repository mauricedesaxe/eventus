<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '../reown';

	// have to import this to use the modal, w3m-button, etc.
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import '@reown/appkit';
</script>

<header
	class="bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center p-4"
>
	<div class="flex items-center">
		<a href="/" class="text-2xl font-bold hover:underline"> Eventus </a>
	</div>

	<nav class="flex items-center">
		<ul class="flex items-center gap-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="hover:underline">Upcoming Events</a>
			</li>
			<li aria-current={$page.url.pathname === '/my-events' ? 'page' : undefined}>
				<a href="/my-events" class="hover:underline">My Events</a>
			</li>
		</ul>
	</nav>

	<div class="flex items-center gap-4">
		<button
			on:click={() => console.log(modal.getAddress())}
			class="bg-blue-500 text-white px-4 py-2 rounded-md"
		>
			Log Address
		</button>
		<w3m-button></w3m-button>
	</div>
</header>
