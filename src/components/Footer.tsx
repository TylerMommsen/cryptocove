import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-background2 my-auto pt-20 pb-20 pl-4 pr-4">
			<div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between">
				<div id="footer-contact" className="flex flex-col gap-4">
					<h2 className="font-bold text-2xl">Let&apos;s talk!</h2>
					<p className="text-textGray">+1 123 456 7899</p>
					<p className="text-textGray hover:underline cursor-pointer">contact@cryptocove.com</p>
					<div>
						<p className="text-textGray">1234 Tech Lane</p>
						<p className="text-textGray">Silicon City, SV 98765</p>
						<p className="text-textGray">United States</p>
					</div>
				</div>
				<section id="footer-products" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Products</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer hover:underline">Spot</li>
						<li className="text-textGray cursor-pointer hover:underline">Inverse Perpetual</li>
						<li className="text-textGray cursor-pointer hover:underline">USDT Perpetual</li>
						<li className="text-textGray cursor-pointer hover:underline">Exchange</li>
						<li className="text-textGray cursor-pointer hover:underline">Launchpad</li>
						<li className="text-textGray cursor-pointer hover:underline">Binance Pay</li>
					</ul>
				</section>

				<section id="footer-services" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Services</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer hover:underline">Buy Crypto</li>
						<li className="text-textGray cursor-pointer hover:underline">Markets</li>
						<li className="text-textGray cursor-pointer hover:underline">Trading Fee</li>
						<li className="text-textGray cursor-pointer hover:underline">Affiliate Program</li>
						<li className="text-textGray cursor-pointer hover:underline">Referrel Program</li>
						<li className="text-textGray cursor-pointer hover:underline">API</li>
					</ul>
				</section>

				<section id="footer-support" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Support</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer hover:underline">CryptoCove Learn</li>
						<li className="text-textGray cursor-pointer hover:underline">Help Center</li>
						<li className="text-textGray cursor-pointer hover:underline">User Feedback</li>
						<li className="text-textGray cursor-pointer hover:underline">Submit a Request</li>
						<li className="text-textGray cursor-pointer hover:underline">API Documentation</li>
						<li className="text-textGray cursor-pointer hover:underline">Trading Rules</li>
					</ul>
				</section>

				<section id="footer-about-us" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">About Us</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer hover:underline">About CryptoCove</li>
						<li className="text-textGray cursor-pointer hover:underline">Authenticity Check</li>
						<li className="text-textGray cursor-pointer hover:underline">Careers</li>
						<li className="text-textGray cursor-pointer hover:underline">Business Contracts</li>
						<li className="text-textGray cursor-pointer hover:underline">Blog</li>
					</ul>
				</section>
			</div>
		</footer>
	);
}
