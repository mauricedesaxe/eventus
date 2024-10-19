<script>
	const events = [
		{
			slug: 'secureum-istanbul-2024',
			name: 'Secureum Istanbul',
			date: '2024-11-03',
			summary: 'Secureum Istanbul is a conference about blockchain security.',
			isRSVPed: true
		},
		{
			slug: 'ethglobal-istanbul-2024',
			name: 'ETHGlobal Istanbul',
			date: '2024-11-01',
			summary: 'A hackathon and conference for Ethereum developers and enthusiasts.',
			isRSVPed: false
		},
		{
			slug: 'devcon-bogota-2025',
			name: 'DevCon Bogotá',
			date: '2025-02-11',
			summary: 'The annual Ethereum developers conference, held in Bogotá, Colombia.',
			isRSVPed: false
		},
		{
			slug: 'nft-paris-2025',
			name: 'NFT Paris',
			date: '2025-03-23',
			summary:
				"Europe's largest NFT and Web3 event, bringing together artists, collectors, and innovators.",
			isRSVPed: false
		},
		{
			slug: 'ethdenver-2025',
			name: 'ETHDenver',
			date: '2025-01-29',
			summary: "The world's largest Web3 #BUIDLathon and innovation festival.",
			isRSVPed: false
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="summary" content="Svelte demo app" />
</svelte:head>

<form>
	<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base font-semibold leading-7 text-gray-900">New event</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				Because this is a proof of concept, anyone can add an event.
			</p>

			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div class="sm:col-span-4">
					<label for="event-name" class="block text-sm font-medium leading-6 text-gray-900"
						>Event name</label
					>
					<div class="mt-2">
						<div
							class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
						>
							<input
								type="text"
								name="event_name"
								id="event-name"
								class="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								placeholder="ETH Amsterdam"
								required
							/>
						</div>
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="event-date" class="block text-sm font-medium leading-6 text-gray-900"
						>Event date</label
					>
					<div class="mt-2">
						<input
							type="date"
							name="event_date"
							id="event-date"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
						Write a longer description about the event. This will be displayed on the event page so
						be descriptive.
					</p>
				</div>

				<div class="col-span-full">
					<label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
						>Cover photo</label
					>
					<div
						class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
					>
						<div class="text-center">
							<svg
								class="mx-auto h-12 w-12 text-gray-300"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
									clip-rule="evenodd"
								/>
							</svg>
							<div class="mt-4 flex text-sm leading-6 text-gray-600">
								<label
									for="file-upload"
									class="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
								>
									<span>Upload a file</span>
									<input id="file-upload" name="file-upload" type="file" class="sr-only" />
								</label>
								<p class="pl-1">or drag and drop</p>
							</div>
							<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
						</div>
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
