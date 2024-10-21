import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '$lib/server/db';

/**
 * GET /api/events/[slug]
 */
export const GET: RequestHandler = async ({ url, params }) => {
	try {
		const { slug } = params;
		if (!slug) {
			throw error(400, 'No slug provided');
		}

		const address = url.searchParams.get('address');

		if (address) {
			const event = await sql`
                SELECT e.slug, e.name, e.date, e.summary, e.description, e.image
                FROM events e
                INNER JOIN rsvps r ON e.slug = r.event_slug
                WHERE r.address = ${address} AND e.slug = ${slug}
            `;
			return json({ event });
		} else {
			const event = await sql`
                SELECT e.slug, e.name, e.date, e.summary, e.description, e.image
                FROM events e
                WHERE e.slug = ${slug}
            `;
			return json({ event });
		}
	} catch (err) {
		console.error('Error fetching event:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
