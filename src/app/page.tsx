import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="mx-auto flex-grow">
			<section id="hero" className="flex justify-center min-h-screen w-screen bg-background1">
				<div className="max-w-7xl flex flex-row items-center p-6">
					<div id="hero-text" className="flex flex-col gap-8">
						<h1 className="font-bold text-5xl leading-tight antialiased">
							Buy & Sell Digital Assets With CryptoCove
						</h1>
						<p className="text-textGray antialiased">
							CryptoCove is the easiest, safest, and fastest way to buy and sell crypto asset
							exchange.
						</p>
						<button className="font-bold bg-blue-600 pl-6 pr-6 pt-4 pb-4 rounded-full self-start">
							Get Started Now
						</button>
					</div>

					<Image
						src="/PNG/Ethereum.png"
						width={600}
						height={600}
						className="hidden md:block"
						alt="IDO hero image"
					/>
				</div>
			</section>

			<section
				id="market"
				className="flex flex-col justify-center p-10 items-center gap-8 bg-background2"
			>
				<h1>Market Update</h1>
				<div id="crypto-list" className="flex flex-col">
					<p className="border-b-2 border-white">Bitcoin</p>
					<p className="border-b-2 border-white">Eth</p>
					<p className="border-b-2 border-white">Tether</p>
					<p className="border-b-2 border-white">BNB</p>
				</div>
			</section>

			<section id="how-it-works" className="flex flex-col p-6 mb-12 justify-center items-center">
				<h1>How It Works</h1>
				<ul className="flex flex-col gap-10 justify-center items-center p-6">
					<li>Download</li>
					<li>Connect Wallet</li>
					<li>Start Trading</li>
					<li>Earn Money</li>
				</ul>
			</section>

			<section id="choose-us" className="flex flex-col justify-center items-center gap-8 mb-12 p-6">
				<h1>Why Choose Us?</h1>
				<p>
					Experience a variety of trading with CryptoCove. You can use various types of coin
					transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
				</p>
				<h2>View real-time cryptocurrency prices</h2>
				<h2>Buy and sell BTC, ETH, XRP, OKB and hundreds of other coins</h2>
				<button>Explore More</button>
			</section>

			<section id="download" className="flex flex-col justify-center items-center gap-10 p-6">
				<h1>Free Your Money & Invest With Confidence</h1>
				<button>Get It On Google Play</button>
				<button>Download On The App Store</button>
			</section>
		</main>
	);
}
