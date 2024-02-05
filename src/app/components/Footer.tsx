import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-background2 my-auto pt-20 pb-20 pl-4 pr-4">
			<div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between">
				<div id="footer-contact" className="flex flex-col gap-4">
					<h2 className="font-bold text-2xl">Let&apos;s talk!</h2>
					<p className="text-textGray">+1 123 456 7899</p>
					<p className="text-textGray">contact@cryptocove.com</p>
					<div>
						<p className="text-textGray">1234 Tech Lane</p>
						<p className="text-textGray">Silicon City, SV 98765</p>
						<p className="text-textGray">United States</p>
					</div>
				</div>
				<section id="footer-products" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Products</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer">Spot</li>
						<li className="text-textGray cursor-pointer">Inverse Perpetual</li>
						<li className="text-textGray cursor-pointer">USDT Perpetual</li>
						<li className="text-textGray cursor-pointer">Exchange</li>
						<li className="text-textGray cursor-pointer">Launchpad</li>
						<li className="text-textGray cursor-pointer">Binance Pay</li>
					</ul>
				</section>

				<section id="footer-services" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Services</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer">Buy Crypto</li>
						<li className="text-textGray cursor-pointer">Markets</li>
						<li className="text-textGray cursor-pointer">Trading Fee</li>
						<li className="text-textGray cursor-pointer">Affiliate Program</li>
						<li className="text-textGray cursor-pointer">Referrel Program</li>
						<li className="text-textGray cursor-pointer">API</li>
					</ul>
				</section>

				<section id="footer-support" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">Support</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer">CryptoCove Learn</li>
						<li className="text-textGray cursor-pointer">Help Center</li>
						<li className="text-textGray cursor-pointer">User Feedback</li>
						<li className="text-textGray cursor-pointer">Submit a Request</li>
						<li className="text-textGray cursor-pointer">API Documentation</li>
						<li className="text-textGray cursor-pointer">Trading Rules</li>
					</ul>
				</section>

				<section id="footer-about-us" className="flex flex-col gap-4">
					<h3 className="font-bold text-lg">About Us</h3>
					<ul className="flex flex-col gap-2">
						<li className="text-textGray cursor-pointer">About CryptoCove</li>
						<li className="text-textGray cursor-pointer">Authenticity Check</li>
						<li className="text-textGray cursor-pointer">Careers</li>
						<li className="text-textGray cursor-pointer">Business Contracts</li>
						<li className="text-textGray cursor-pointer">Blog</li>
					</ul>
				</section>
			</div>
		</footer>
	);
}
