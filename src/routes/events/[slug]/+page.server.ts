import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import sql from '../../../server/db';

export interface Event {
	slug: string;
	name: string;
	date: string;
	summary: string;
	description: string;
	image: string;
}

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
	return { event };
};
