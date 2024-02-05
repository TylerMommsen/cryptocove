import React from 'react';
import Image from 'next/image';

export default function WhyUs() {
	return (
		<section
			id="why-us"
			className="bg-background2 flex flex-col justify-center items-center pt-12 pb-12 pl-4 pr-4"
		>
			<div className="mx-auto gap-8 max-w-7xl flex flex-col lg:flex-row justify-center items-center">
				<div className="w-2/4 lg:w-full lg:h-full">
					<Image src="/PNG/Altcoin.png" width={2000} height={2000} alt="coins-icon" />
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6">Why Choose Us?</h1>
					<section className="flex flex-col gap-1 mb-4">
						<h3 className="font-bold text-xl">Low Fees, High Returns</h3>
						<p className="text-textGray">
							Keep more of your profits. We believe in transparent and competitive fee structures,
							ensuring that you maximize your returns. Experience the joy of profitable trading
							without the unnecessary financial burden.
						</p>
					</section>

					<section className="flex flex-col gap-1 mb-4">
						<h3 className="font-bold text-xl">Fort Knox Security</h3>
						<p className="text-textGray">
							Your assets deserve the best protection. Benefit from our Fort Knox security measures,
							including advanced encryption and multi-layered authentication. Trade with peace of
							mind, knowing that your investments are safeguarded against cyber threats.
						</p>
					</section>

					<section className="flex flex-col gap-1 mb-4">
						<h3 className="font-bold text-xl">Extensive Cryptocurrency Options</h3>
						<p className="text-textGray">
							Dive into a diverse pool of cryptocurrencies. From established giants to promising
							newcomers, our platform offers an extensive range of digital assets for you to explore
							and diversify your investment portfolio.
						</p>
					</section>

					<section className="flex flex-col gap-1 mb-8">
						<h3 className="font-bold text-xl">Educational Resources</h3>
						<p className="text-textGray">
							Knowledge is power. Access a wealth of educational resources to empower your trading
							decisions. Stay informed about market trends, strategies, and the latest developments
							in the crypto world. Elevate your understanding and boost your confidence as a trader.
						</p>
					</section>

					<button className="font-bold bg-blue-600 pl-6 pr-6 pt-4 pb-4 rounded-full self-start">
						Explore More
					</button>
				</div>
			</div>
		</section>
	);
}
