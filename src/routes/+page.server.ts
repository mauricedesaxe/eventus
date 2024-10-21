import { error } from '@sveltejs/kit';
import sql from '../server/db';
import type { PageServerLoad } from './$types';
import type { Event } from '$lib/types';

export const load: PageServerLoad = async () => {
	const events = await sql`
        SELECT slug, name, date, summary, description, image
        FROM events
        ORDER BY date ASC
    `;
	if (!events) {
		throw error(500, 'Failed to fetch events');
	}
	if (events.length === 0) {
		throw error(404, 'No events found');
	}

	return {
		events: events as unknown as Event[]
	};
};
