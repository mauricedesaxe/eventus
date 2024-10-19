<script>
	import { modal } from '../reown';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen">
	<button
		on:click={() => console.log(modal.getAddress())}
		class="bg-blue-500 text-white px-4 py-2 rounded-md"
	>
		Log Address
	</button>
</section>

