import React from 'react';
import Image from 'next/image';

export default function Section3() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<Image
					src="/PNG/section3-img.svg"
					width={700}
					height={700}
					alt="section 3 image"
					className="scale-[125%]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">One Portfolio Tracker To Rule Them All</h1>
					<p className="text-secondary">
						No matter how diverse your crypto assets and interests are, CryptoCove has got you
						covered. With CryptoCove, you can:
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Connect, track, and manage all your CeFi, DeFi & NFT assets from one platform</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Monitor the crypto market via customizable price alerts</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Connect multiple exchanges and crypto wallets</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Make crypto tax reporting as easy as possible</p>
						</div>
					</div>

					<button className="primary-btn px-6 py-4 rounded-full self-start">
						Connect Portfolio Now
					</button>
				</div>
			</div>
		</section>
	);
}
