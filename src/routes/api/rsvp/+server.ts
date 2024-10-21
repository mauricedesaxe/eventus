import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '$lib/server/db';
import { verifyMessage } from 'viem';
import { createHash } from 'crypto';
import { isRateLimited } from '$lib/server/limit';
import { getRSVPMessage } from '$lib/rsvp';

export const POST: RequestHandler = async ({ request }) => {
	const { address, eventSlug, signature, challenge } = await request.json();
	if (!address || !eventSlug || !signature || !challenge) {
		return json({ error: 'Missing required fields' }, { status: 400 });
	}

	if (await isRateLimited({ request, address })) {
		return json({ error: 'Too many requests' }, { status: 429 });
	}

	const challengeRes =
		await sql`SELECT address, nonce FROM challenges WHERE address = ${address} AND expires_at > NOW()`;
	const storedChallenge = challengeRes[0] as {
		address: string;
		nonce: string;
	};
	if (!storedChallenge) {
		return json({ error: 'Invalid challenge' }, { status: 400 });
	}
	const hashedChallenge = createHash('sha256').update(challenge).digest('hex');
	if (!storedChallenge || storedChallenge.nonce !== hashedChallenge) {
		return json({ error: 'Invalid challenge' }, { status: 400 });
	}

	const message = getRSVPMessage(eventSlug, challenge);
	const isValid = await verifyMessage({
		address: address as `0x${string}`,
		message,
		signature: signature as `0x${string}`
	});
	if (!isValid) {
		return json({ error: 'Invalid signature' }, { status: 400 });
	}

	await sql`DELETE FROM challenges WHERE address = ${address}`;

	await sql`INSERT INTO rsvps (address, event_slug) VALUES (${address}, ${eventSlug})`;

	return json({ success: true });
};
