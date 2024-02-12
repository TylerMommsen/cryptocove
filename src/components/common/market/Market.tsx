'use client';

import React, { useEffect, useState } from 'react';
import PageButtons from '../PageButtons';
import ResourceLoader from '../../../lib/ResourceLoader';
import CoinsMarket from './CoinsMarket';
import ExchangesMarket from './ExchangesMarket';
import CategoriesMarket from './CategoriesMarket';

interface MarketProps {
	isHomePage: boolean;
}

export default function Market({ isHomePage }: MarketProps) {
	const [currentMarketSelection, setCurrentMarketSelection] = useState('cryptocurrencies');
	const [selectedPage, setSelectedPage] = useState<number>(1);
	const [coins, setCoins] = useState<MarketCoin[]>([]);
	const [exchanges, setExchanges] = useState<Exchange[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const fetchData = async (page: number) => {
			try {
				if (currentMarketSelection === 'cryptocurrencies') {
					const data = await ResourceLoader(
						`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}`
					);
					setCoins(data);
				} else if (currentMarketSelection === 'exchanges') {
					const data = await ResourceLoader(
						`https://api.coingecko.com/api/v3/exchanges?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}`
					);
					setExchanges(data);
				} else if (currentMarketSelection === 'categories') {
					const data = await ResourceLoader(
						`https://api.coingecko.com/api/v3/coins/categories?vs_currency=usd&order=market_cap_desc`
					);
					setCategories(data);
				}
			} catch (error) {
				console.error('Failed to fetch market data', error);
			}
		};

		fetchData(selectedPage);
	}, [selectedPage, currentMarketSelection]);

	useEffect(() => {
		setSelectedPage(1);
	}, [currentMarketSelection]);

	const updatecurrentMarketSelection = (selection: string) => {
		setCurrentMarketSelection(selection.toLowerCase());
	};

	const content = (
		<>
			{currentMarketSelection === 'cryptocurrencies' ? (
				<>
					<CoinsMarket
						coins={coins}
						selectedPage={selectedPage}
						pageItemCount={100}
						isHomePage={isHomePage}
					/>
				</>
			) : null}

			{currentMarketSelection === 'exchanges' ? (
				<>
					<ExchangesMarket
						exchanges={exchanges}
						selectedPage={selectedPage}
						pageItemCount={100}
						isHomePage={isHomePage}
					/>
				</>
			) : null}

			{currentMarketSelection === 'categories' ? (
				<>
					<CategoriesMarket
						categories={categories}
						selectedPage={selectedPage}
						pageItemCount={100}
						isHomePage={isHomePage}
					/>
				</>
			) : null}
		</>
	);

	return (
		<section
			id="market"
			className={`relative pt-16 pb-16 pl-4 pr-4 bg-primary z-40 w-full ${
				isHomePage ? 'shadow-marketShadow' : null
			}`}
		>
			<div
				className={`mx-auto gap-16 ${
					isHomePage ? 'max-w-7xl' : 'max-w-[1920px]'
				} max-w-7xl flex flex-col`}
			>
				<div
					id="market-btns"
					className="flex pageItemCount-center justify-center gap-6 md:gap-12 text-secondary"
				>
					<button
						onClick={(e) => updatecurrentMarketSelection(e.currentTarget.innerText)}
						className="relative"
					>
						Cryptocurrencies
						<div
							className={`absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent ${
								currentMarketSelection === 'cryptocurrencies' ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-100`}
						></div>
					</button>

					<button
						onClick={(e) => updatecurrentMarketSelection(e.currentTarget.innerText)}
						className="relative"
					>
						Exchanges
						<div
							className={`absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent ${
								currentMarketSelection === 'exchanges' ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-100`}
						></div>
					</button>

					<button
						onClick={(e) => updatecurrentMarketSelection(e.currentTarget.innerText)}
						className="relative"
					>
						Categories
						<div
							className={`absolute bottom-0 top-[34px] left-0 w-full h-1 bg-accent ${
								currentMarketSelection === 'categories' ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-100`}
						></div>
					</button>
				</div>

				<div id="crypto-list" className="flex flex-col gap-4 w-full">
					{content}
				</div>

				<PageButtons
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					currentMarketSelection={currentMarketSelection}
				/>
			</div>
		</section>
	);
}
