import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const client = createClient({
	url: REDIS_URL
});

client.on('error', (err) => console.error('Redis Client Error', err));

await client.connect();
await client.ping();

export default client;
