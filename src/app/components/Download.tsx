import React from 'react';
import Image from 'next/image';

export default function Download() {
	return (
		<section
			id="download"
			className="bg-background1 flex flex-col justify-center items-center pt-12 pb-12 pl-4 pr-4"
		>
			<div className="mx-auto gap-8 max-w-7xl flex flex-col lg:flex-row justify-center items-center">
				<div className="flex flex-col">
					<h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6 text-center">
						Download
					</h1>

					<section className="flex flex-col gap-1 mb-8">
						<h3 className="font-bold text-xl text-center">Buy & Sell On The Go</h3>
						<p className="text-textGray text-center">
							Manage your holdings from your mobile device.
						</p>
					</section>

					<div className="self-center flex justify-center items-center w-2/5">
						<Image src="/PNG/downloadbadges.svg" width={600} height={200} alt="download badges" />
					</div>
				</div>
				<div className="w-4/5 md:w-1/2">
					<Image src="/PNG/cryptophone.png" width={2500} height={2222} alt="download-app image" />
				</div>
			</div>
		</section>
	);
}
