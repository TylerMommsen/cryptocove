"use client";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "../common/SignUpForm";
import LoginForm from "../common/LoginForm";
import Hero3DModel from "../common/Hero3DModel";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Hero() {
	const [canvasSize, setCanvasSize] = useState({ width: "250px", height: "300px" });

	// change canvas size based on viewport
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 992) {
				setCanvasSize({ width: "400px", height: "600px" });
			} else if (window.innerWidth >= 768) {
				setCanvasSize({ width: "300px", height: "350px" });
			} else {
				setCanvasSize({ width: "250px", height: "300px" });
			}
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section
			id="hero"
			className="relative p-4 flex justify-center items-center min-h-screen w-screen bg-primary"
		>
			{/* purple background blobs */}
			<div className="hidden md:block absolute top-0 -left-[35rem] w-[50rem] h-[50rem] opacity-20 filter blur-3xl bg-accent rounded-full" />
			<div className="hidden md:block absolute -bottom-96 left-80 w-[40rem] h-[40rem] opacity-20 filter blur-3xl bg-accent rounded-full" />

			<div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row md:justify-between items-center">
				<div id="hero-text" className="flex flex-col gap-8 z-40">
					<h1 className="font-[800] text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-[4rem] lg:leading-[6rem]">
						Manage All Your Digital Assets From One Place
					</h1>
					<p className="text-secondary text-base md:text-xl">
						Connect your entire portfolio, track, buy, convert and stake your assets with CryptoCove
					</p>
					<Dialog>
						<DialogTrigger className="font-bold text-xl primary-btn pl-6 pr-6 pt-4 pb-4 rounded-full self-start">
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
								<TabsContent value="login">
									<LoginForm />
								</TabsContent>
								<TabsContent value="sign-up">
									<SignUpForm />
								</TabsContent>
							</Tabs>
						</DialogContent>
					</Dialog>

					<div className="flex gap-20">
						<div className="flex flex-col">
							<h3 className="md:text-2xl font-bold">1,000,000+</h3>
							<p className="text-secondary">Traders</p>
						</div>
						<div className="flex flex-col">
							<h3 className="md:text-2xl font-bold">19+</h3>
							<p className="text-secondary">Awards</p>
						</div>
						<div className="flex flex-col">
							<h3 className="md:text-2xl font-bold">$1 Billion</h3>
							<p className="text-secondary">Transactions processed</p>
						</div>
					</div>
				</div>

				{/* 3d model of ethereum crypto coin */}
				<div className="relative animate-bounce-slow">
					<Canvas
						camera={{ position: [0, 0, 500], fov: 90 }}
						style={{ width: canvasSize.width, height: canvasSize.height }}
					>
						<Suspense fallback={null}>
							<ambientLight intensity={1} />
							<directionalLight color={"#FFF"} position={[-20, 0, 25]} intensity={3} />
							<EffectComposer>
								<Bloom
									luminanceThreshold={0} // Areas brighter than this value will be bloomed
									luminanceSmoothing={0.9} // Transition between bloomed and non-bloomed areas
									intensity={3} // Strength of the bloom effect
									kernelSize={5} // The blur kernel size, can affect performance and appearance
									height={500} // Lower values can improve performance with less quality
								/>
							</EffectComposer>
							<Hero3DModel
								modelPath="/ethereum3d/scene.gltf"
								texturePath="/ethereum3d/textures/default_specularGlossiness.png"
							/>
						</Suspense>
					</Canvas>
					<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] opacity-20 filter blur-3xl bg-accent rounded-full" />
					{/* <Image src="/PNG/Ethereum.png" width={600} height={600} alt="IDO hero image" /> */}
				</div>
			</div>
		</section>
	);
}
