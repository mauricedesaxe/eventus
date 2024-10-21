import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '../../../server/db';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const address = url.searchParams.get('address');
		if (!address) {
			throw error(400, 'No address provided');
		}

		const events = await sql`
            SELECT e.slug, e.name, e.date, e.summary
            FROM events e
            INNER JOIN rsvps r ON e.slug = r.event_slug
            WHERE r.address = ${address}
            ORDER BY e.date ASC
        `;
		return json({ events });
	} catch (err) {
		console.error('Error fetching events:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
