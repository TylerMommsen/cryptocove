'use client';

import React, { useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-background2 shadow-md shadow-background2 fixed top-0 w-screen p-4 z-50">
			<section className="max-w-7xl text-white flex justify-between items-center mx-auto">
				<h1 className="font-bold text-xl">CryptoCove</h1>
				<div>
					<button
						id="hamburger-button"
						className={`text-3xl md:hidden focus:outline-none relative w-8 h-8 ${
							isMenuOpen ? 'toggle-btn' : ''
						}`}
						onClick={toggleMenu}
					>
						{/* &#9776; */}
						<div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
					</button>
					<nav className="hidden md:block space-x-8 text-xl" aria-label="main">
						<a href="#hero" className="hover:opacity-90">
							Home
						</a>
						<a href="#market" className="hover:opacity-90">
							Market
						</a>
						<a href="#how-it-works" className="hover:opacity-90">
							How It Works
						</a>
						<a href="#why-us" className="hover:opacity-90">
							Why Us
						</a>
						<a href="#download" className="hover:opacity-90">
							Download
						</a>
					</nav>
				</div>
			</section>
			<section
				id="mobile-menu"
				className={`absolute left-0 top-70 bg-background2 origin-top animate-open-menu w-screen text-4xl flex-col justify-center ${
					isMenuOpen ? 'flex' : 'hidden'
				}`}
			>
				<nav
					className="flex flex-col gap-14 min-h-screen w-screen items-center py-16"
					aria-label="mobile"
				>
					<a href="#hero" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Home
					</a>
					<a href="#market" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Market
					</a>
					<a
						href="#how-it-works"
						className="hover:opacity-90 w-full text-center"
						onClick={toggleMenu}
					>
						How It Works
					</a>
					<a href="#why-us" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Why Us
					</a>
					<a href="#download" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Download
					</a>
				</nav>
			</section>
		</header>
	);
}
