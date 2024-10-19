# Eventus - RSVP for Crypto Events

This is a simple RSVP app for crypto events. It's built with SvelteKit.
I won't go into how to set it up, figure it out.

What I will use this README for is to document issues for myself.

- [x] Make UI for adding events
- [x] Add page with event details
- [ ] Integrate backend with db to add, read and RSVP to events
- [ ] Consider security of address auth (how will the backend know the address is actually connected, somebody could spam the API, no?)

## Proving the user owns the address with a challenge-response system

1. When a user wants to RSVP, the frontend requests a unique challenge (e.g. a nonce) from the backend
2. The backend stores the challenge alongside the user address in the db and returns the challenge to the frontend
3. The frontend asks the user to sign the challenge with their wallet & sends the signed message to the backend
4. The backend verifies the signature against the stored challenge and updates the user's RSVP status in the db
5. If the signature is valid, the user is added to the event's RSVP list

Other considerations:
- nonce should have a short expiration time
- nonce should be one time use
- challenge requests should be rate limited