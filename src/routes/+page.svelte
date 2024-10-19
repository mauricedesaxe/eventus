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
	<title>Eventus - RSVP to Events</title>
	<meta name="summary" content="RSVP to Events" />
</svelte:head>

<main class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-10">
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-base font-semibold leading-6 text-gray-900">Upcoming Events</h1>
				<p class="mt-2 text-sm text-gray-700">
					RSVP to any of the upcoming events below using your wallet (you must connect your wallet
					to Eventus to RSVP, address read-only).
				</p>
			</div>
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<a
					href="/add-event"
					class="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>Add event</a
				>
			</div>
		</div>
		<div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
			<table class="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						<th
							scope="col"
							class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
						>
							Event</th
						>
						<th
							scope="col"
							class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
						>
							Date</th
						>
						<th
							scope="col"
							class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
						>
							Countdown</th
						>
						<th
							scope="col"
							class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
						>
							Summary</th
						>
						<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
							<span class="sr-only">RSVP</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each events as event}
						<tr>
							<td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
								<div class="font-medium text-gray-900">{event.name}</div>
								<div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
									<span>{event.date}</span>
									<span class="hidden sm:inline">·</span>
									<span>{event.summary}</span>
								</div>
							</td>
							<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
								{new Date(event.date).toLocaleDateString('en-US', {
									weekday: 'short',
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</td>
							<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
								{#if new Date(event.date) > new Date()}
									{@const timeLeft = new Date(event.date).getTime() - new Date().getTime()}
									{@const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))}
									{@const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
									{days}d {hours}h
								{:else if new Date(event.date) < new Date()}
									Event has passed
								{:else if new Date(event.date) === new Date()}
									Event starts today
								{:else}
									Coming soon
								{/if}
							</td>
							<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
								{event.summary}
							</td>
							<td class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
								<a
									href={`/events/${event.slug}`}
									class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
								>
									Details<span class="sr-only"> about {event.name}</span></a
								>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</main>
