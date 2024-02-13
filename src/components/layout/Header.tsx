'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUpForm from '../common/SignUpForm';
import LoginForm from '../common/LoginForm';

import Link from 'next/link';
import BuyCryptoForm from '../common/BuyCryptoForm';
import SidebarPopup from '../common/SidebarPopup';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header id="header" className="bg-primary2 fixed top-0 w-screen z-50">
			<section className="max-w-[1920px] text-secondary2 flex justify-between pt-4 pb-4 pl-6 pr-6 items-center mx-auto">
				<div id="header-left" className="flex items-center gap-8 lg:gap-12">
					<button
						id="hamburger-button"
						className={`text-3xl lg:hidden focus:outline-none relative w-8 h-8 ${
							isMenuOpen ? 'toggle-btn' : ''
						}`}
						onClick={toggleMenu}
					>
						<div className="bg-secondary2 w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-secondary2 before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
					</button>

					<Link href="/" className="text-xl cursor-pointer">
						<span className="font-bold">Crypto</span>Cove
					</Link>

					<nav className="hidden text-secondary lg:block space-x-8 text-xl" aria-label="main">
						<Link href="/portfolio" className="text-sm relative">
							Portfolio Tracker
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent opacity-0 transition-opacity duration-100"></div>
						</Link>

						<Link href="/swap" className="text-sm relative">
							Swap
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent opacity-0 transition-opacity duration-100"></div>
						</Link>

						<Dialog>
							<DialogTrigger className="text-sm relative">
								Buy Crypto
								<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent opacity-0 transition-opacity duration-100"></div>
							</DialogTrigger>
							<DialogContent className="bg-primary2 border-hidden p-10">
								<DialogHeader>
									<BuyCryptoForm />
								</DialogHeader>
							</DialogContent>
						</Dialog>

						<Link href="/cryptocurrencies" className="text-sm relative">
							Cryptocurrencies
							<div className="absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent opacity-0 transition-opacity duration-100"></div>
						</Link>
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

					<Dialog>
						<DialogTrigger className="text-sm hidden lg:block hover:text-accent duration-100">
							Login
						</DialogTrigger>
						<DialogContent className="bg-primary2 border-hidden p-10">
							<Tabs defaultValue="login" className="w-full">
								<TabsList className="flex gap-6 w-full bg-transparent items-center">
									<TabsTrigger value="login" className="text-2xl">
										Login
									</TabsTrigger>
									<TabsTrigger value="sign-up" className="text-2xl">
										Sign Up
									</TabsTrigger>
								</TabsList>
								<TabsContent value="login">
									<LoginForm />
								</TabsContent>
								<TabsContent value="sign-up">
									<SignUpForm />
								</TabsContent>
							</Tabs>
						</DialogContent>
					</Dialog>

					<Dialog>
						<DialogTrigger className="text-sm primary-btn pl-6 pr-6 pt-2 pb-2 rounded-full hidden lg:block">
							Get Started
						</DialogTrigger>
						<DialogContent className="bg-primary2 border-hidden p-10">
							<Tabs defaultValue="sign-up" className="w-full">
								<TabsList className="flex gap-6 w-full bg-transparent items-center">
									<TabsTrigger value="login" className="text-2xl">
										Login
									</TabsTrigger>
									<TabsTrigger value="sign-up" className="text-2xl">
										Sign Up
									</TabsTrigger>
								</TabsList>
								<TabsContent value="login">
									<LoginForm />
								</TabsContent>
								<TabsContent value="sign-up">
									<SignUpForm />
								</TabsContent>
							</Tabs>
						</DialogContent>
					</Dialog>

					<Sheet>
						<SheetTrigger>
							<Image
								src="/PNG/wallet-icon.png"
								width={0}
								height={0}
								alt="wallet icon"
								sizes="100vw"
								style={{ width: '32px', height: '32px' }}
								className="cursor-pointer"
							></Image>
						</SheetTrigger>
						<SheetContent className="border-none">
							<SidebarPopup />
						</SheetContent>
					</Sheet>
				</div>
			</section>

			<section
				id="mobile-menu"
				className={`absolute left-0 top-70 bg-primary origin-top animate-open-menu w-screen text-4xl flex-col justify-center ${
					isMenuOpen ? 'flex' : 'hidden'
				}`}
			>
				<nav
					className="flex flex-col gap-14 min-h-screen w-screen items-center py-16"
					aria-label="mobile"
				>
					<Link
						href="/portfolio"
						className="hover:opacity-90 w-full text-center"
						onClick={toggleMenu}
					>
						Portfolio Tracker
					</Link>

					<Link href="/swap" className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
						Swap
					</Link>

					<Dialog>
						<DialogTrigger className="hover:opacity-90 w-full text-center" onClick={toggleMenu}>
							Buy Crypto
						</DialogTrigger>
						<DialogContent className="bg-primary2 border-hidden p-10">
							<DialogHeader>
								<BuyCryptoForm />
							</DialogHeader>
						</DialogContent>
					</Dialog>

					<Link
						href="/cryptocurrencies"
						className="hover:opacity-90 w-full text-center"
						onClick={toggleMenu}
					>
						Cryptocurrencies
					</Link>
				</nav>
			</section>
		</header>
	);
}
