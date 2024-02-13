'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function SidebarPopup() {
	const myPortfolio = (
		<>
			<div>
				<h2 className="font-bold text-2xl">Select Portfolio to Connect</h2>
				<p className="text-secondary">
					Connect your wallets and exchanges to manage all your assets together now.
				</p>
			</div>

			<div className="flex flex-col gap-6">
				<button className="flex justify-between items-center bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4 items-center">
						<Image src="/PNG/binance-icon.png" width={32} height={32} alt="binance icon" />
						<p>Binance</p>
					</div>
					<Image src="/PNG/arrow-icon.png" width={24} height={24} alt="arrow icon" />
				</button>

				<button className="flex justify-between items-center bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4 items-center">
						<Image src="/PNG/metamask-icon.png" width={32} height={32} alt="metamask icon" />
						<p>MetaMask</p>
					</div>
					<Image src="/PNG/arrow-icon.png" width={24} height={24} alt="arrow icon" />
				</button>

				<button className="flex justify-between items-center bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4 items-center">
						<Image src="/PNG/coinbase-icon.png" width={32} height={32} alt="coinbase icon" />
						<p>Coinbase</p>
					</div>
					<Image src="/PNG/arrow-icon.png" width={24} height={24} alt="arrow icon" />
				</button>

				<button className="flex justify-between items-center bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4 items-center">
						<Image src="/PNG/allwallets-icon.svg" width={32} height={32} alt="allwallets icon" />
						<p>Connect Other</p>
					</div>
					<Image src="/PNG/arrow-icon.png" width={24} height={24} alt="arrow icon" />
				</button>
			</div>
		</>
	);

	return (
		<div className="flex flex-col gap-10">
			<button className="self-start text-xl font-bold relative">
				My Portfolio
				<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent opacity-100"></div>
			</button>

			{myPortfolio}
		</div>
	);
}
