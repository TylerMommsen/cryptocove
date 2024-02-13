import React from 'react';
import Card from '../Card';
import Image from 'next/image';

export default function Section1() {
	return (
		<section className="px-4 pb-16 pt-32 flex flex-col gap-12 bg-primary justify-center items-center min-h-screen w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 h-full">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-4xl">The Only Free Crypto Portfolio Tracker Worth Using</h1>
					<p className="text-secondary">
						Connect all your wallets and exchanges in a few clicks. Start effectively managing your
						entire portfolio, crypto, DeFi, and NFTs, directly from CryptoCove. Track, buy, swap,
						and earn on your assets from a unified dashboard.
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Track holdings in real-time</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Connect to 300+ wallets & exchanges</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Customize your dashboard</p>
						</div>
					</div>

					<button className="primary-btn px-6 py-4 rounded-full self-start mb-4">
						Connect Portfolio Now
					</button>

					<p className="self-start">
						See our <span className="font-bold">8,762</span> reviews on Trustpilot
					</p>
				</div>
				<Image
					src="/PNG/section1-img.png"
					width={500}
					height={500}
					alt="section 1 image"
					className="mt-[-32px] scale-[125%]"
				/>
			</div>

			<div className="mx-auto max-w-4xl flex flex-col gap-4 items-center">
				<h1 className="font-bold text-2xl text-center">
					Seamlessly Connect Your Entire Crypto Portfolio
				</h1>
				<p className="text-secondary text-center mb-2">
					No matter where you keep your assets, you can track and manage them on CryptoCove
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
					<Card CardTitle={'Binance'} CardImage="binance-icon.png" />
					<Card CardTitle={'MetaMask'} CardImage="metamask-icon.png" />
					<Card CardTitle={'Coinbase'} CardImage="coinbase-icon.png" />
					<Card CardTitle={'More'} CardImage="allwallets-icon.svg" />
				</div>
			</div>
		</section>
	);
}
