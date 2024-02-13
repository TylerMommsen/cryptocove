import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import React from 'react';
import SidebarPopup from './SidebarPopup';
import OpenSideBarBtn from './OpenSideBarBtn';

export default function BuyCryptoForm() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-center mb-4">Buy Crypto</h1>
			<p className="text-secondary">Deposit to</p>
			<button className="mb-4 flex text-secondary justify-between items-center rounded-2xl border-input bg-background px-4 py-3 text-sm">
				Connect Your Wallet
				<OpenSideBarBtn
					ButtonText="Connect"
					ClassNames="primary-btn px-6 py-2 rounded-full text-secondary2"
				/>
			</button>
			<button className="primary-btn self-center px-6 py-4 rounded-full">Submit</button>
		</div>
	);
}
