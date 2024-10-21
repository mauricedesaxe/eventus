import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import sql from '$lib/server/db';
import type { Event } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const events = await sql`
		SELECT slug, name, date, summary, description, image
		FROM events
		WHERE slug = ${params.slug}
	`;
	if (events.length === 0) {
		throw error(404, 'Event not found');
	}

	const event = events[0] as Event;
	return { event, slug: params.slug };
};
