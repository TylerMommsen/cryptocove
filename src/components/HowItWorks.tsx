import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="bg-primary2 flex pl-4 pr-4 pt-16 pb-16 justify-center">
			<div className="mx-auto max-w-7xl flex flex-col gap-4 justify-center items-center">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight">How It Works</h1>
				<div
					id="steps"
					className="flex flex-col md:flex-row justify-between items-start gap-8 w-full"
				>
					<div id="step1" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Encryption.png" width={120} height={120} alt="download-icon" />
						<p className="text-secondary mb-1">Step 1</p>
						<h3 className="font-bold text-xl mb-4 text-center">Download</h3>
						<p className="text-secondary text-center">
							Download the application on the Play Store or the App Store.
						</p>
					</div>
					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step2" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Hot wallet.png" width={120} height={120} alt="wallet-icon" />
						<p className="text-secondary mb-1">Step 2</p>
						<h3 className="font-bold text-xl mb-4 text-center">Connect Wallet</h3>
						<p className="text-secondary text-center">
							Link your digital wallet to the app to store and manage your crypto assets.
						</p>
					</div>
					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step3" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Peer to Peer.png" width={120} height={120} alt="trading-icon" />
						<p className="text-secondary mb-1">Step 3</p>
						<h3 className="font-bold text-xl mb-4 text-center">Start Trading</h3>
						<p className="text-secondary text-center">
							Explore a variety of cryptocurrencies, check real-time market prices, and execute
							trades effortlessly.
						</p>
					</div>

					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step4" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/IDO.png" width={120} height={120} alt="earn-money-icon" />
						<p className="text-secondary mb-1">Step 4</p>
						<h3 className="font-bold text-xl mb-4 text-center">Earn Money</h3>
						<p className="text-secondary text-center">
							Seamlessly convert your crypto holdings into real-world currency in a matter of
							seconds.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
