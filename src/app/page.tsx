import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="max-w-4xl mx-auto flex-grow">
			<section id="hero" className="flex flex-col justify-center p-6 items-center gap-8 mb-12">
				<h1>Track And Trade Crypto Currencies</h1>
				<div id="top-cryptos" className="flex gap-8 p-6 justify-center items-center">
					<p>Bitcoin</p>
					<p>Eth</p>
					<p>Tether</p>
					<p>BNB</p>
				</div>
			</section>

			<section id="market" className="flex flex-col justify-center p-6 items-center gap-8 mb-12">
				<h1>Market Update</h1>
				<div id="crypto-list" className="flex flex-col">
					<p className="border-b-2 border-white">Bitcoin</p>
					<p className="border-b-2 border-white">Eth</p>
					<p className="border-b-2 border-white">Tether</p>
					<p className="border-b-2 border-white">BNB</p>
				</div>
			</section>

			<section id="choose-us" className="flex flex-col justify-center items-center gap-8 mb-12 p-6">
				<h1>Why Choose Us?</h1>
				<p>Some description here</p>
			</section>

			<section id="join" className="flex flex-col justify-center items-center gap-8 mb-12 p-6">
				<h1>Join Our Discord</h1>
				<p>Some other description here</p>
			</section>
		</main>
	);
}
