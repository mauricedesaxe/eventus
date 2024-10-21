import { error } from '@sveltejs/kit';
import sql from '$lib/server/db';
import type { PageServerLoad } from './$types';

type Event = {
	slug: string;
	name: string;
	date: string;
	summary: string;
	address: string;
};

export const load: PageServerLoad = async () => {
	try {
		const events = await sql`
            SELECT e.slug, e.name, e.date, e.summary, r.address
            FROM events e
            LEFT JOIN rsvps r ON e.slug = r.event_slug
            ORDER BY e.date ASC
        `;

		return {
			events: events.map((event) => ({
				...event,
				isRSVPed: !!event.address
			})) as unknown as Event[]
		};
	} catch (err) {
		console.error('Error fetching events:', err);
		throw error(500, 'Error fetching events');
	}
};
