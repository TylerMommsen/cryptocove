import React from 'react';
import Card from '../Card';

export default function Section1() {
	return (
		<section className="px-4 py-16 flex flex-col gap-32 bg-primary justify-center w-screen pt-24">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">The Only Free Crypto Portfolio Tracker Worth Using</h1>
					<p className="text-secondary">
						Connect all your wallets and exchanges in a few clicks. Start effectively managing your
						entire portfolio, crypto, DeFi, and NFTs, directly from CryptoCove. Track, buy, swap,
						and earn on your assets from a unified dashboard.
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<p>Track holdings in real-time</p>
						<p>Connect to 300+ wallets & exchanges</p>
						<p>Customize your dashboard</p>
					</div>

					<button className="primary-btn px-6 py-4 rounded-full self-start">
						Connect Portfolio Now
					</button>

					<p className="self-start">
						See our <span className="font-bold">8,762</span> reviews on Trustpilot
					</p>
				</div>
				<p>Placeholder</p>
			</div>

			<div className="mx-auto max-w-5xl flex flex-col gap-6 items-center">
				<h1 className="font-bold text-2xl text-center">
					Seamlessly Connect Your Entire Crypto Portfolio
				</h1>
				<p className="text-secondary text-center">
					No matter where you keep your assets, you can track and manage them on CryptoCove
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8">
					<Card CardTitle={'Binance'} />
					<Card CardTitle={'MetaMask'} />
					<Card CardTitle={'Coinbase'} />
					<Card CardTitle={'More'} />
				</div>
			</div>
		</section>
	);
}
