import Image from 'next/image';

interface CategoriesMarketProps {
	categories: Category[];
	selectedPage: number;
	pageItemCount: number;
	isHomePage: boolean;
}

export default function CategoriesMarket({
	categories,
	selectedPage,
	pageItemCount,
	isHomePage,
}: CategoriesMarketProps) {
	return (
		<>
			<div className={`grid grid-cols-twoCols md:grid-cols-fiveCols`}>
				<div className="flex place-self-start h-full pr-4 lg:pl-4 lg:pr-4">
					<p className="text-center text-secondary font-bold">#</p>
				</div>
				<div className="flex place-self-start h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Name</p>
				</div>
				<div className="flex place-self-end h-full lg:pl-4">
					<p className="text-center font-bold">Top 3 Coins</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Volume 24h</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Market Cap</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Market Cap 24h %</p>
				</div>
			</div>

			{categories.map((category, index) => {
				const counter = index + 1 + (selectedPage - 1) * pageItemCount;
				return (
					<>
						<div className="hover:bg-gray-900">
							<div key={category.id} className={`grid grid-cols-twoCols md:grid-cols-fiveCols`}>
								<div className="flex place-self-start items-center h-full pr-4 lg:pl-4 lg:pr-4">
									<p className="text-secondary text-sm lg:text-base">{counter}</p>
								</div>

								<div className="place-self-start flex items-center h-full lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2">
									<p className="text-sm lg:text-base">{category.name}</p>
								</div>

								<div className="flex gap-1 place-self-end items-center h-full lg:pl-4 lg:pr-4">
									{category.top_3_coins.map((coinImg: string, index: number) => {
										const src =
											coinImg.startsWith('/') || coinImg.startsWith('http')
												? coinImg
												: `/${coinImg}`;
										return (
											<Image
												key={index}
												src={src}
												width={40}
												height={40}
												alt="coin image"
												className="lg:mr-[-18px]"
											/>
										);
									})}
								</div>

								<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
									<p className="text-sm lg:text-base">
										{category.volume_24h ? `${category.volume_24h.toLocaleString()}` : 'N/A'}
									</p>
								</div>

								<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
									<p className="text-sm lg:text-base">
										{category.market_cap ? `$${category.market_cap.toLocaleString()}` : 'N/A'}
									</p>
								</div>

								<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
									<div
										className={`flex items-center gap-1 ${
											category.market_cap_change_24h < 0
												? 'text-red-500 bg-red-400 bg-opacity-10 p-2 rounded-lg font-bold'
												: 'text-green-500 bg-green-400 bg-opacity-10 p-2 rounded-lg font-bold'
										}`}
									>
										<p className="hidden lg:block">
											{category.market_cap_change_24h < 0 ? '▼ ' : '▲ '}
										</p>
										<p className="text-sm lg:text-base">
											{category.market_cap_change_24h
												? category.market_cap_change_24h.toFixed(3) + '%'
												: 'N/A'}
											{}
										</p>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
}
