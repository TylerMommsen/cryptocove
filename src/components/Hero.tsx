import React from 'react';
import Image from 'next/image';
import HeroBG from './HeroBG';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUpForm from './SignUpForm';

export default function Hero() {
	return (
		<section id="hero" className="p-4 flex justify-center min-h-screen w-screen bg-primary">
			<HeroBG />
			<div className="mx-auto max-w-7xl flex flex-row justify-between items-center">
				<div id="hero-text" className="flex flex-col gap-8 z-40">
					<h1 className="font-[800] text-4xl md:text-[46px] leading-tight md:leading-[60px]">
						Manage All Your Digital Assets From One Place
					</h1>
					<p className="text-secondary">
						Connect your entire portfolio, track, buy, convert and stake your assets with CryptoCove
					</p>
					<Dialog>
						<DialogTrigger className="font-bold primary-btn pl-6 pr-6 pt-4 pb-4 rounded-full self-start">
							Get Started Now
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
								<TabsContent value="login">Make changes to your account here.</TabsContent>
								<TabsContent value="sign-up">
									<SignUpForm />
								</TabsContent>
							</Tabs>
						</DialogContent>
					</Dialog>
				</div>

				<div className="hidden md:block animate-bounce-slow">
					<Image src="/PNG/Ethereum.png" width={600} height={600} alt="IDO hero image" />
				</div>
			</div>
		</section>
	);
}
