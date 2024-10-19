import { createAppKit } from '@reown/appkit';
import { mainnet } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

const projectId = 'f980d1e8ac5f60d237a134a726ee17cd';

export const networks = [mainnet];

export const wagmiAdapter = new WagmiAdapter({
	projectId,
	networks
});

const metadata = {
	name: 'Eventus',
	description: 'Simple RSVP for Crypto Events',
	url: 'https://example.com', // origin must match your domain & subdomain
	icons: ['https://avatars.githubusercontent.com/u/179229932']
};

export const modal = createAppKit({
	adapters: [wagmiAdapter],
	networks: [mainnet],
	metadata,
	projectId
});
