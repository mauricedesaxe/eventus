import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import sql from '$lib/server/db';

/**
 * Create a slug from a string. Use this to create a slug from the event name.
 * @param str - The string to create a slug from
 * @returns The slug
 */
function createSlug(str: string) {
	return str
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const date = formData.get('date') as string;
		const summary = formData.get('summary') as string;
		const description = formData.get('description') as string;
		const image = formData.get('image') as string;

		if (!name || !date || !summary || !image) {
			return fail(400, { error: 'Missing required fields' });
		}

		const slug = createSlug(name);

		let error;
		try {
			await sql`
                INSERT INTO events (slug, name, date, summary, description, image)
                VALUES (${slug}, ${name}, ${date}, ${summary}, ${description}, ${image})
            `;
		} catch (err) {
			error = err;
		}
		if (!error) {
			throw redirect(303, `/events/${slug}`);
		}
		console.error('Error creating event:', error);
		if (error instanceof Error) {
			return fail(500, { error: error.message });
		} else if (typeof error === 'string') {
			return fail(500, { error });
		} else {
			return fail(500, { error: 'Failed to create event' });
		}
	}
};
