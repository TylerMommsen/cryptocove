import Image from "next/image";

interface CoinMarketProps {
	coins: MarketCoin[];
	selectedPage: number;
	pageItemCount: number;
	isHomePage: boolean;
}

export default function CoinsMarket({ coins, selectedPage, pageItemCount }: CoinMarketProps) {
	return (
		<>
			<div className={`grid grid-cols-twoCols md:grid-cols-fiveCols lg:grid-cols-sixCols`}>
				<div className="flex place-self-start h-full pr-4 lg:pl-4 lg:pr-4">
					<p className="text-center text-secondary font-bold">#</p>
				</div>
				<div className="flex place-self-start h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Name</p>
				</div>
				<div className="hidden lg:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Price</p>
				</div>
				<div className="flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">24h %</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Total Volume</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Market Cap</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Market Cap 24h %</p>
				</div>
			</div>

			{coins.map((coin, index) => {
				const counter = index + 1 + (selectedPage - 1) * pageItemCount;
				return (
					<div key={index} className="hover:bg-gray-900">
						<div
							key={coin.id}
							className={`grid grid-cols-twoCols md:grid-cols-fiveCols lg:grid-cols-sixCols`}
						>
							<div className="flex place-self-start items-center h-full pr-4 lg:pl-4 lg:pr-4">
								<p className="text-secondary text-sm lg:text-base">{counter}</p>
							</div>

							<div className="place-self-start flex gap-2 lg:gap-6 items-center h-full lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2">
								<Image src={coin.image} width={40} height={40} alt="coin image" />
								<p className="text-center hidden lg:block">{coin.name}</p>

								<div className="flex lg:hidden flex-col gap-1">
									<p className="text-xs">{coin.name}</p>
									<p className="text-xs lg:hidden">{"$" + coin.current_price.toLocaleString()}</p>
								</div>

								<p className="text-secondary text-xs lg:text-base hidden lg:block">
									{coin.symbol.toUpperCase()}
								</p>
							</div>

							<div className="hidden lg:flex place-self-end items-center h-full lg:pl-4 lg:pr-4">
								<p className="text-center text-xs lg:text-base">
									{"$" + coin.current_price.toLocaleString()}
								</p>
							</div>

							<div className="place-self-end flex items-center h-full lg:pl-4 lg:pr-4">
								<div
									className={`flex items-center gap-1 ${
										coin.price_change_percentage_24h < 0
											? "text-red-500 bg-red-400 bg-opacity-10 p-2 rounded-lg font-bold"
											: "text-green-500 bg-green-400 bg-opacity-10 p-2 rounded-lg font-bold"
									}`}
								>
									<p className="hidden lg:block">
										{coin.price_change_percentage_24h < 0 ? "▼ " : "▲ "}
									</p>
									<p className="text-sm lg:text-base">
										{coin.price_change_percentage_24h
											? coin.price_change_percentage_24h.toLocaleString() + "%"
											: "N/A"}
										{}
									</p>
								</div>
							</div>

							<div className="place-self-end text-sm hidden md:flex lg:text-base items-center h-full lg:pl-4 lg:pr-4">
								<p>{coin.total_volume.toLocaleString()}</p>
							</div>

							<div className="text-sm lg:text-base place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
								<p>{"$" + coin.market_cap.toLocaleString()}</p>
							</div>

							<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2">
								<div
									className={`flex items-center gap-1 ${
										coin.price_change_percentage_24h < 0
											? "text-red-500 bg-red-400 bg-opacity-10 p-2 rounded-lg font-bold"
											: "text-green-500 bg-green-400 bg-opacity-10 p-2 rounded-lg font-bold"
									}`}
								>
									<p className="hidden lg:block">
										{coin.price_change_percentage_24h < 0 ? "▼ " : "▲ "}
									</p>
									<p className="text-sm lg:text-base">
										{coin.market_cap_change_percentage_24h
											? coin.market_cap_change_percentage_24h.toLocaleString() + "%"
											: "N/A"}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
