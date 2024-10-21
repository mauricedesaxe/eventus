import { signMessage } from '@wagmi/core';
import { modal, wagmiAdapter } from './reown';

/**
 * Handles the RSVP process for an event.
 * @param eventSlug - The slug of the event to RSVP to.
 * @returns True if the RSVP was successful, false otherwise.
 */
export async function handleRSVP(eventSlug: string) {
	try {
		const address = modal.getAddress();
		if (!address) {
			await modal.open();
			const updatedAddress = modal.getAddress();
			if (!updatedAddress) {
				throw new Error('No account connected');
			}
		}

		const challengeRes = await fetch(`/api/challenge`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ address })
		});
		const { challenge, error } = (await challengeRes.json()) as {
			challenge: string;
			error?: string;
		};
		if (!challenge) {
			throw new Error(error || 'Failed to get challenge');
		}

		const message = `I am signing my address to confirm my RSVP to ${eventSlug}: ${challenge}`;
		const signature = await signMessage(wagmiAdapter.wagmiConfig, { message });

		const rsvpRes = await fetch(`/api/rsvp`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ address, eventSlug, signature, challenge })
		});
		if (!rsvpRes.ok) {
			throw new Error('Failed to RSVP');
		}

		return true;
	} catch (error) {
		console.error('Error signing message:', error);
		if (error instanceof Error) {
			return error.message;
		} else if (typeof error === 'string') {
			return error;
		} else {
			return 'An unknown error occurred';
		}
	}
}
