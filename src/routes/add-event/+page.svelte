<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Eventus - Add Event</title>
	<meta name="summary" content="Add Event" />
</svelte:head>

<main class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-10">
	<form method="POST" use:enhance>
		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base font-semibold leading-7 text-gray-900">New event</h2>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Because this is a proof of concept and for the sake of simplicity & time, anyone can add
					an event. In a real world scenario, we could use the same mechanism that we use to verify
					RSVPs to verify that the event creator is who they say they are.
				</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div class="sm:col-span-4">
						<label for="event-name" class="block text-sm font-medium leading-6 text-gray-900"
							>Event name</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="name"
								id="event-name"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="event-date" class="block text-sm font-medium leading-6 text-gray-900"
							>Event date</label
						>
						<div class="mt-2">
							<input
								type="date"
								name="date"
								id="event-date"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
					</div>

					<div class="col-span-full">
						<label for="summary" class="block text-sm font-medium leading-6 text-gray-900"
							>Short summary</label
						>
						<div class="mt-2">
							<textarea
								id="summary"
								name="summary"
								rows="2"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							></textarea>
						</div>
						<p class="mt-3 text-sm leading-6 text-gray-600">
							Write 1 sentence about the event. This will be displayed on the homepage.
						</p>
					</div>

					<div class="col-span-full">
						<label for="description" class="block text-sm font-medium leading-6 text-gray-900"
							>Description</label
						>
						<div class="mt-2">
							<textarea
								id="description"
								name="description"
								rows="6"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							></textarea>
						</div>
						<p class="mt-3 text-sm leading-6 text-gray-600">
							Write a longer description about the event. This will be displayed on the event page.
						</p>
					</div>

					<div class="col-span-full">
						<label for="image" class="block text-sm font-medium leading-6 text-gray-900"
							>Cover photo URL</label
						>
						<div class="mt-2">
							<input
								type="url"
								name="image"
								id="image"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="https://example.com/image.jpg"
								required
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
			<button
				type="submit"
				class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Save</button
			>
		</div>
	</form>

	{#if form?.error}
		<div class="bg-red-50 p-4 rounded-md mt-4">
			<p class="text-red-500">{form.error}</p>
		</div>
	{/if}
</main>
