import React from 'react';
import Image from 'next/image';

export default function Section4() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Analyze Your Strategy</h1>
					<p className="text-secondary">
						CryptoCove has a single easy-to-access dash for all your transactions across all the
						wallets, exchanges, and blockchains. Switching between tabs, you can check on your
						crypto, DeFi & NFT holdings, put them in chart form, check the full transaction history,
						and monitor your open orders.
					</p>

					<p className="text-secondary">You can check:</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Profit and Loss analysis that shows the overall performance in a given period</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Average buy and sell price of your investments</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>The most/least profitable coins, the total value of deposits and withdrawals</p>
						</div>
					</div>

					<button className="primary-btn px-6 py-4 rounded-full self-start">Start Analyzing</button>
				</div>
				<Image
					src="/PNG/section4-img.svg"
					width={800}
					height={800}
					alt="section 4 image"
					className="scale-[125%]"
				/>
			</div>
		</section>
	);
}
