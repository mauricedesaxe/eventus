<script>
	import { handleRSVP } from '$lib/rsvp';

	const event = {
		slug: 'secureum-istanbul-2024',
		name: 'Secureum Istanbul',
		date: '2024-11-03',
		summary: 'Secureum Istanbul is a conference about blockchain security.',
		description:
			"Secureum Istanbul is a premier conference focused on blockchain security, bringing together experts, researchers, and practitioners from around the world. This event offers a unique opportunity to delve deep into the latest advancements, challenges, and best practices in securing blockchain technologies. Attendees can expect a rich program featuring keynote speeches from industry leaders, hands-on workshops, panel discussions, and networking sessions. Topics covered will include smart contract auditing, DeFi security, cryptographic protocols, and emerging threats in the blockchain space. Whether you're a seasoned security professional, a blockchain developer, or a curious enthusiast, Secureum Istanbul promises to provide valuable insights and foster collaboration in the ever-evolving field of blockchain security.",
		image: 'https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png',
		isRSVPed: true
	};
</script>

<svelte:head>
	<title>{event.name}</title>
	<meta name="summary" content={event.summary} />
</svelte:head>

<div
	class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
>
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<svg
			class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="e813992c-7d03-4cc4-a2bd-151760b470a0"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
				<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
			/>
		</svg>
	</div>
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
	>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
		>
			<div class="lg:pr-4">
				<div class="lg:max-w-lg">
					<p class="text-base font-semibold leading-7 text-blue-600">
						{new Date(event.date).toLocaleDateString('en-US', {
							weekday: 'short',
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})}
					</p>
					<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{event.name}
					</h1>
					<p class="mt-6 text-xl leading-8 text-gray-700">
						{event.summary}
					</p>
				</div>
			</div>
		</div>
		<div
			class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
		>
			<img
				class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
				src={event.image}
				alt={event.name}
			/>
		</div>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
		>
			<div class="lg:pr-4">
				<div class="prose max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
					{event.description}
				</div>
				<div class="mt-6 flex items-center justify-start gap-x-6">
					<button
						type="button"
						on:click={() => handleRSVP(event.slug)}
						class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						RSVP to {event.name}
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
