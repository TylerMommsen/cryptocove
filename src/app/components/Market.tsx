import React from 'react';

export default function Market() {
	return (
		<section
			id="market"
			className="flex flex-col justify-center p-10 items-center gap-8 bg-background2"
		>
			<h1 className="font-bold text-4xl md:text-5xl leading-tight">Market Update</h1>
			<div id="crypto-list" className="flex flex-col">
				<p className="border-b-2 border-white">Bitcoin</p>
				<p className="border-b-2 border-white">Eth</p>
				<p className="border-b-2 border-white">Tether</p>
				<p className="border-b-2 border-white">BNB</p>
			</div>
		</section>
	);
}
