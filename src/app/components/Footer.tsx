import React from 'react';

export default function Footer() {
	return (
		<footer className="my-auto p-6">
			<section id="footer-products" className="flex flex-col gap-6 p-6">
				<h3>Products</h3>
				<ul className="flex flex-col gap-2">
					<li>Spot</li>
					<li>Inverse Perpetual</li>
					<li>USDT Perpetual</li>
					<li>Exchange</li>
					<li>Launchpad</li>
					<li>Binance Pay</li>
				</ul>
			</section>

			<section id="footer-services" className="flex flex-col gap-6 p-6">
				<h3>Services</h3>
				<ul className="flex flex-col gap-2">
					<li>Buy Crypto</li>
					<li>Markets</li>
					<li>Trading Fee</li>
					<li>Affiliate Program</li>
					<li>Referrel Program</li>
					<li>API</li>
				</ul>
			</section>

			<section id="footer-support" className="flex flex-col gap-6 p-6">
				<h3>Support</h3>
				<ul className="flex flex-col gap-2">
					<li>CryptoCove Learn</li>
					<li>Help Center</li>
					<li>User Feedback</li>
					<li>Submit a Request</li>
					<li>API Documentation</li>
					<li>Trading Rules</li>
				</ul>
			</section>

			<section id="footer-about-us" className="flex flex-col gap-6 p-6">
				<h3>About Us</h3>
				<ul className="flex flex-col gap-2">
					<li>About CryptoCove</li>
					<li>Authenticity Check</li>
					<li>Careers</li>
					<li>Business Contracts</li>
					<li>Blog</li>
				</ul>
			</section>
		</footer>
	);
}
