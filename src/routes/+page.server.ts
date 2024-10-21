import sql from '../server/db';
import type { PageServerLoad } from './$types';
import type { Event } from '$lib/types';

export const load: PageServerLoad = async () => {
	try {
		const events = await sql`
			SELECT slug, name, date, summary, description, image
			FROM events
			ORDER BY date ASC
		`;

		if (!events) {
			return {
				error: 'Failed to fetch events'
			};
		}
		if (events.length === 0) {
			return {
				error: 'No events found'
			};
		}

		return {
			events: events as unknown as Event[]
		};
	} catch (error) {
		return {
			error: `An error occurred while fetching events: ${error}`
		};
	}
};
