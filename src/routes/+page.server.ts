import { error } from '@sveltejs/kit';
import sql from '../server/db';
import type { PageServerLoad } from './$types';

type Event = {
	slug: string;
	name: string;
	date: string;
	summary: string;
};

export const load: PageServerLoad = async () => {
	const events = await sql`
        SELECT slug, name, date, summary
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
