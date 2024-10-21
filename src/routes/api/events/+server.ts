import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '../../../server/db';

/**
 * GET /api/events
 */
export const GET: RequestHandler = async ({ url }) => {
	try {
		const address = url.searchParams.get('address');
		if (address) {
			const events = await sql`
                SELECT e.slug, e.name, e.date, e.summary, e.description, e.image
                FROM events e
                INNER JOIN rsvps r ON e.slug = r.event_slug
                WHERE r.address = ${address}
                ORDER BY e.date ASC
            `;
			return json({ events });
		} else {
			const events = await sql`
                SELECT e.slug, e.name, e.date, e.summary, e.description, e.image
                FROM events e
                ORDER BY e.date ASC
            `;
			return json({ events });
		}
	} catch (err) {
		console.error('Error fetching events:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
