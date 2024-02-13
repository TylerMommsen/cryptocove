import React from 'react';

export default function Section2() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Track Your Crypto Across 300+ Platforms</h1>
					<p className="text-secondary">
						Get all your investments in one place to see the bigger picture! CoinStats supports over
						300 different wallets, exchanges, and blockchains. In fact, we support the highest
						number of integrations out of all crypto portfolio tracking apps on the market, so you
						can explore the crypto ecosystem in its entirety.
					</p>

					<p>
						Connect your hardware wallet, Binance, Coinbase, Trust Wallet, Kraken & any other crypto
						platforms to CoinStats in just a few clicks. Taking a look at your whole portfolio and
						using our advanced toolset, you can get key market insights, improve your
						decision-making and grow your crypto faster.
					</p>

					<button className="primary-btn px-6 py-4 rounded-full self-start">
						Connect Portfolio Now
					</button>
				</div>
				<p>Placeholder</p>
			</div>
		</section>
	);
}
