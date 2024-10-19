import { signMessage } from '@wagmi/core';
import { modal, wagmiAdapter } from '../reown';

export async function handleSignMessage(message: string) {
	try {
		const address = modal.getAddress();
		if (!address) {
			await modal.open();
			const updatedAddress = modal.getAddress();
			if (!updatedAddress) {
				throw new Error('No account connected');
			}
		}
		const signature = await signMessage(wagmiAdapter.wagmiConfig, { message });
		return signature;
	} catch (error) {
		console.error('Error signing message:', error);
	}
}
