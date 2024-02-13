import React from 'react';

export default function Section6() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Swap With Best Rates</h1>
					<p className="text-secondary">
						Swap your crypto assets without leaving the app and catch all the trending coins. We go
						above and beyond to give you the easiest and most user-centric swapping experience on
						the market. On CoinStats, you&apos;re maximizing liquidity and optimizing your swapping
						automatically.
					</p>

					<p className="text-secondary">
						We aggregate the best swap paths across multiple liquidity sources to optimize your
						swapping. This means that you&apos;ll always access the best swap rates on various
						chains.
					</p>

					<p className="text-secondary">
						The Swap button is right on your portfolio page. You can instantly act on your decision
						to swap one coin for another and maximize convenience of crypto transactions.
					</p>

					<button className="primary-btn px-6 py-4 rounded-full self-start">Start Swapping</button>
				</div>
				<p>Placeholder</p>
			</div>
		</section>
	);
}
