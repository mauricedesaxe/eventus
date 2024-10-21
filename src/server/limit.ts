import client from './redis';

const MINUTE = 60 * 1000;
const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * MINUTE;
const IS_DEV_ENV = process.env.NODE_ENV === 'development';

type RateLimitInput = {
	request: Request;
	address: string;
	maxReq?: number;
	windowMs?: number;
};

export async function isRateLimited({
	request,
	address,
	maxReq = MAX_REQUESTS,
	windowMs = WINDOW_MS
}: RateLimitInput): Promise<boolean> {
	if (IS_DEV_ENV) {
		return false;
	}

	const ip =
		request.headers.get('x-forwarded-for') ||
		request.headers.get('cf-connecting-ip') ||
		address ||
		'';
	const key = `ratelimit:${ip}`;
	const requests = await client.incr(key);
	if (requests === 1) {
		await client.pExpire(key, windowMs);
	}
	if (requests > maxReq) {
		return true;
	}
	return false;
}
