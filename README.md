# Eventus: RSVP for Crypto Events

Eventus is a SvelteKit-based web app for crypto event RSVPs. It's simple: create events, view details, and RSVP securely with your crypto wallet.

## Architecture Breakdown

1. **Frontend**: SvelteKit
2. **Backend**: SvelteKit server-side API
3. **Database**: PostgreSQL
4. **Rate Limiting**: Redis
5. **Wallet Integration**: Reown AppKit

## Core Features

- Event creation and listing
- Secure RSVP using wallet signatures
- Rate limiting to prevent API abuse

## Challenge-Response-Signature System

We use a challenge-response-signature system to verify wallet ownership and secure the RSVP process. Here's how it works:

1. User initiates RSVP -> Frontend requests challenge from backend
2. Backend generates a nonce (challenge), encrypts it, and stores it with user's address and expiration
3. Frontend prompts user to sign the challenge with their wallet
4. Signed message goes to backend for verification
5. If valid, RSVP is recorded in the database

### Security Considerations

- Short-lived nonces (5 minutes)
- One-time use challenges
- Encrypted challenge storage
- Rate limiting

## Getting Started

It's a standard SvelteKit app. Just set the right env vars and you're good to go.

## Contributing

Issues and PRs are welcome.

## License

[MIT](LICENSE) - Do what you want with it.
