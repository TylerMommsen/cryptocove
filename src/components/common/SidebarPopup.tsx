'use client';

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
				<button className="flex justify-between bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4">
						<p>Placeholder</p>
						<p>Binance</p>
					</div>
					<p>{'>'}</p>
				</button>

				<button className="flex justify-between bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4">
						<p>Placeholder</p>
						<p>MetaMask</p>
					</div>
					<p>{'>'}</p>
				</button>

				<button className="flex justify-between bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4">
						<p>Placeholder</p>
						<p>Coinbase</p>
					</div>
					<p>{'>'}</p>
				</button>

				<button className="flex justify-between bg-input hover:bg-inputHover rounded-2xl px-4 py-4">
					<div className="flex gap-4">
						<p>Placeholder</p>
						<p>Connect Other</p>
					</div>
					<p>{'>'}</p>
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
