<script>
	import { modal } from '../reown';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<button on:click={() => console.log(modal.getAddress())}>Log Address</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	button {
		padding: 1rem;
		background-color: #1a1a1a;
		color: white;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>

