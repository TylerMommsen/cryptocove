import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section5() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<Image
					src="/PNG/section5-img.svg"
					width={600}
					height={600}
					alt="section 5 image"
					className="scale-[125%]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Your Portfolio Vs The Market</h1>
					<p className="text-secondary">
						Is your portfolio outperforming the market, matching it, or underperforming? It&apos;s
						time to put your portfolio into perspective by comparing it to the market overall.
					</p>

					<p className="text-secondary">
						Depending on this metric, you can make a decision to diversify more, check how you stack
						up in terms of volatility, or make the necessary changes to enhance performance.
					</p>

					<OpenSideBarBtn
						ButtonText="Check Comparison"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>
				</div>
			</div>
		</section>
	);
}
