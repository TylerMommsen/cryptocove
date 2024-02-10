'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header id="header" className="bg-background1 fixed top-0 w-screen z-50">
			<section className="max-w-[1920px] text-white flex justify-between pt-4 pb-4 pl-6 pr-6 items-center mx-auto">
				<div id="header-left" className="flex items-center gap-8 lg:gap-12">
					<button
						id="hamburger-button"
						className={`text-3xl lg:hidden focus:outline-none relative w-8 h-8 ${
							isMenuOpen ? 'toggle-btn' : ''
						}`}
						onClick={toggleMenu}
					>
						<div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
					</button>

					<h1 className="text-xl cursor-pointer">
						<span className="font-bold">Crypto</span>Cove
					</h1>

					<nav className="hidden lg:block space-x-8 text-xl" aria-label="main">
						<a href="#hero" className="text-sm text-textGray relative">
							Portfolio Tracker
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-tertiary opacity-0 transition-opacity duration-100"></div>
						</a>
						<a href="#market" className="text-sm text-textGray relative">
							Swap
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-tertiary opacity-0 transition-opacity duration-100"></div>
						</a>
						<a href="#how-it-works" className="text-sm text-textGray relative">
							Buy Crypto
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-tertiary opacity-0 transition-opacity duration-100"></div>
						</a>
						<a href="#why-us" className="text-sm text-textGray relative">
							Cryptocurrencies
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-tertiary opacity-0 transition-opacity duration-100"></div>
						</a>
					</nav>
				</div>

				<div id="header-right" className="flex items-center gap-8 lg:gap-12">
					<Image
						src="/PNG/user-icon.svg"
						width={28}
						height={28}
						alt="user"
						className="block lg:hidden"
					/>
					<Image
						src="/PNG/cog-icon.svg"
						width={24}
						height={24}
						alt="settings"
						className="cursor-pointer hidden lg:block hover:rotate-[15deg] duration-100 ease-in-out"
					/>
					<button className="text-sm hidden lg:block hover:text-tertiary duration-100">
						Login
					</button>
					<button className="text-sm primary-btn pl-6 pr-6 pt-2 pb-2 rounded-full hidden lg:block">
						Get Started
					</button>
					<Image
						src="/PNG/wallet-icon.png"
						width={0}
						height={0}
						alt="wallet icon"
						sizes="100vw"
						style={{ width: '32px', height: '32px' }}
						className="cursor-pointer"
					></Image>
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
						Portfolio Tracker
					</a>
					<a href="#market" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Swap
					</a>
					<a
						href="#how-it-works"
						className="hover:opacity-90 w-full text-center"
						onClick={toggleMenu}
					>
						Buy Crypto
					</a>
					<a href="#why-us" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Cryptocurrencies
					</a>
				</nav>
			</section>
		</header>
	);
}