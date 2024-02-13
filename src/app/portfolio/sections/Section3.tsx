import React from 'react';

export default function Section3() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">
				<p>Placeholder</p>
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">One Portfolio Tracker To Rule Them All</h1>
					<p className="text-secondary">
						No matter how diverse your crypto assets and interests are, CryptoCove has got you
						covered. With CryptoCove, you can:
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<p>Connect, track, and manage all your CeFi, DeFi & NFT assets from one platform</p>
						<p>Monitor the crypto market via customizable price alerts</p>
						<p>Connect multiple exchanges and crypto wallets</p>
						<p>Make crypto tax reporting as easy as possible</p>
					</div>

					<button className="primary-btn px-6 py-4 rounded-full self-start">
						Connect Portfolio Now
					</button>
				</div>
			</div>
		</section>
	);
}
