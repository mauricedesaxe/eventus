import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

const sql = postgres(DATABASE_URL);

await sql`CREATE TABLE IF NOT EXISTS challenges (
	address TEXT PRIMARY KEY,
	nonce TEXT NOT NULL,
	expires_at TIMESTAMP NOT NULL,
	CONSTRAINT unique_address UNIQUE (address),
	CONSTRAINT expires_at_check CHECK (expires_at > NOW())
)`;

await sql`CREATE INDEX IF NOT EXISTS idx_challenges_address ON challenges (address)`;

await sql`CREATE TABLE IF NOT EXISTS rsvps (
	address TEXT,
	event_slug TEXT,
	PRIMARY KEY (address, event_slug)
)`;

await sql`CREATE INDEX IF NOT EXISTS idx_rsvps_address ON rsvps (address)`;
await sql`CREATE INDEX IF NOT EXISTS idx_rsvps_event_slug ON rsvps (event_slug)`;
await sql`CREATE INDEX IF NOT EXISTS idx_rsvps_address_event_slug ON rsvps (address, event_slug)`;

export default sql;
