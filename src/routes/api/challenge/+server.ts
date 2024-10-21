import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '../../../server/db';
import { createHash } from 'crypto';
import { isRateLimited } from '../../../server/limit';

const MINUTE = 60 * 1000;

export const POST: RequestHandler = async ({ request }) => {
	const { address } = await request.json();
	if (!address) {
		return json({ error: 'Address is required' }, { status: 400 });
	}

	if (await isRateLimited({ request, address })) {
		return json({ error: 'Too many requests' }, { status: 429 });
	}

	const nonce = crypto.randomUUID();
	const hashedNonce = createHash('sha256').update(nonce).digest('hex');
	const expiresAt = new Date(Date.now() + 5 * MINUTE);

	try {
		const result = await sql`
			INSERT INTO challenges (address, nonce, expires_at) 
			VALUES (${address}, ${hashedNonce}, ${expiresAt})
			ON CONFLICT (address) DO UPDATE
			SET nonce = ${hashedNonce}, expires_at = ${expiresAt}
            RETURNING *
		`;
		if (result.length === 0) {
			return json({ error: 'Failed to generate challenge' }, { status: 500 });
		}
		return json({ challenge: nonce });
	} catch (error) {
		console.error('Database error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
