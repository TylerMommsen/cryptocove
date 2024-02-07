import React from 'react';
import Image from 'next/image';

export default function Hero() {
	return (
		<section id="hero" className="p-4 flex justify-center min-h-screen w-screen bg-background1">
			<div className="mx-auto max-w-7xl flex flex-row justify-between items-center">
				<div id="hero-text" className="flex flex-col gap-8">
					<h1 className="font-bold text-4xl md:text-5xl leading-tight md:leading-snug">
						Buy & Sell Digital Assets With CryptoCove
					</h1>
					<p className="text-textGray">
						CryptoCove is the easiest, safest, and fastest way to buy and sell crypto asset
						exchange.
					</p>
					<button className="font-bold blue-btn pl-6 pr-6 pt-4 pb-4 rounded-full self-start">
						Get Started Now
					</button>
				</div>

				<div className="hidden md:block animate-bounce-slow">
					<Image src="/PNG/Ethereum.png" width={600} height={600} alt="IDO hero image" />
				</div>
			</div>
		</section>
	);
}
