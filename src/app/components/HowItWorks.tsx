import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="bg-background1 flex pl-4 pr-4 pt-16 pb-16 justify-center">
			<div className="mx-auto max-w-7xl flex flex-col gap-4 justify-center items-center">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight">How It Works</h1>
				<div id="steps" className="flex flex-col md:flex-row justify-center items-center gap-8">
					<div id="step1" className="flex flex-col justify-center items-center">
						<Image src="/PNG/Encryption.png" width={120} height={120} alt="download-icon" />
						<p className="text-textGray mb-1">Step 1</p>
						<h3 className="font-bold text-xl mb-4">Download</h3>
						<p className="text-textGray text-center">
							Download the application on the Play Store or the App Store to have easy access to a
							world of digital assets and trading opportunities.
						</p>
					</div>

					<div id="step2" className="flex flex-col justify-center items-center">
						<Image src="/PNG/Hot wallet.png" width={120} height={120} alt="wallet-icon" />
						<p className="text-textGray mb-1">Step 2</p>
						<h3 className="font-bold text-xl mb-4">Connect Wallet</h3>
						<p className="text-textGray text-center">
							Securely link your digital wallet to the app to store and manage your crypto assets,
							allowing you to seamlessly manage your funds, execute trades, and track your portfolio
							with confidence.
						</p>
					</div>

					<div id="step3" className="flex flex-col justify-center items-center">
						<Image src="/PNG/Peer to Peer.png" width={120} height={120} alt="trading-icon" />
						<p className="text-textGray mb-1">Step 3</p>
						<h3 className="font-bold text-xl mb-4">Start Trading</h3>
						<p className="text-textGray text-center">
							Explore a variety of cryptocurrencies, check real-time market prices, and execute
							trades effortlessly. Whether you&apos;re a seasoned trader or a beginner, we provide
							the tools to make informed decisions.
						</p>
					</div>

					<div id="step4" className="flex flex-col justify-center items-center">
						<Image src="/PNG/IDO.png" width={120} height={120} alt="earn-money-icon" />
						<p className="text-textGray mb-1">Step 4</p>
						<h3 className="font-bold text-xl mb-4">Earn Money</h3>
						<p className="text-textGray text-center">
							Ready to turn your digital assets into tangible rewards? Seamlessly convert your
							crypto holdings into real-world currency in a matter of seconds.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
