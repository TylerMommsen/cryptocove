import React from 'react';

export default function Header() {
	return (
		<header className="bg-background2 shadow-md shadow-background2 fixed top-0 w-screen p-4">
			<section className="max-w-7xl text-white flex justify-between items-center mx-auto">
				<h1 className="font-bold text-xl">CryptoCove</h1>
				<div>
					<button id="mobile-open-button" className="text-3xl md:hidden focus:outline-none">
						&#9776;
					</button>
					<nav className="hidden md:block space-x-8 text-xl" aria-label="main">
						<a href="#home" className="hover:opacity-90 font-bold">
							Home
						</a>
						<a href="#market" className="hover:opacity-90 font-bold">
							Market
						</a>
						<a href="#how-it-works" className="hover:opacity-90 font-bold">
							How It Works
						</a>
						<a href="#why-us" className="hover:opacity-90 font-bold">
							Why Us
						</a>
						<a href="#download" className="hover:opacity-90 font-bold">
							Download
						</a>
					</nav>
				</div>
			</section>
		</header>
	);
}
