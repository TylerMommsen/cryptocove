'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PageButtons from './PageButtons';
import GetMarketData from '../../../lib/GetMarketData';

export default function Market() {
	const [selectedPage, setSelectedPage] = useState<number>(1);
	const [coins, setCoins] = useState<MarketCoin[]>([]);

	const fetchMarketData = async (page: number) => {
		try {
			const data = await GetMarketData(page);
			setCoins(data);
		} catch (error) {
			console.error('Failed to fetch market data', error);
		}
	};

	useEffect(() => {
		fetchMarketData(selectedPage);
	}, [selectedPage]);

	const content = (
		<>
			<div className="grid grid-cols-4 w-full pr-4 pl-4">
				<div className="flex place-self-start h-full">
					<p className="text-center font-bold">Coin</p>
				</div>
				<div className="flex place-self-center h-full">
					<p className="text-center font-bold">Price</p>
				</div>
				<div className="flex place-self-center h-full">
					<p className="text-center font-bold">24h Change</p>
				</div>
				<div className="flex place-self-end h-full">
					<p className="text-center font-bold">Market Cap</p>
				</div>
			</div>
			{coins.map((coin, index) => {
				const counter = index + 1 + (selectedPage - 1) * 10;
				return (
					<>
						<div className="hover:bg-gray-900">
							<div key={coin.id} className="grid grid-cols-4 w-full">
								<div className="place-self-start flex gap-6 items-center h-full pl-4 pr-4 pt-2 pb-2">
									<p>{counter}</p>
									<Image src={coin.image} width={40} height={40} alt="coin image" />
									<p className="text-center">{coin.name}</p>
									<p className="text-textGray">{coin.symbol.toUpperCase()}</p>
								</div>

								<div className="flex place-self-center items-center h-full pl-4 pr-4 pt-2 pb-2">
									<p className="text-center">{'$' + coin.current_price.toLocaleString()}</p>
								</div>

								<div className="place-self-center flex items-center h-full pl-4 pr-4 pt-2 pb-2">
									<p
										className={
											coin.price_change_percentage_24h < 0
												? 'text-red-500 bg-red-400 bg-opacity-10 p-2 rounded-lg font-bold'
												: 'text-green-500 bg-green-400 bg-opacity-10 p-2 rounded-lg font-bold'
										}
									>
										{coin.price_change_percentage_24h.toLocaleString() + '%'}
									</p>
								</div>
								<div className="place-self-end flex items-center h-full pl-4 pr-4 pt-2 pb-2">
									<p>{'$' + coin.market_cap.toLocaleString()}</p>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);

	return (
		<section id="market" className="pt-16 pb-16 pl-4 pr-4 bg-background2">
			<div className="mx-auto gap-16 max-w-7xl flex flex-col">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight text-center mb-6">
					Market Update
				</h1>

				<div id="crypto-list" className="flex flex-col gap-8 w-full">
					{content}
				</div>

				<PageButtons selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</div>
		</section>
	);
}
