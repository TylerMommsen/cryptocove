import Image from 'next/image';

interface ExchangeMarketProps {
	exchanges: Exchange[];
	selectedPage: number;
	pageItemCount: number;
	isHomePage: boolean;
}

export default function ExchangesMarket({
	exchanges,
	selectedPage,
	pageItemCount,
}: ExchangeMarketProps) {
	return (
		<>
			<div className={`grid grid-cols-twoCols md:grid-cols-fourCols w-full`}>
				<div className="flex place-self-start h-full pr-4 lg:pl-4">
					<p className="text-center text-secondary font-bold">#</p>
				</div>
				<div className="flex place-self-start h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Name</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Trust Score</p>
				</div>
				<div className="flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Volume 24h BTC</p>
				</div>
				<div className="hidden md:flex place-self-end h-full lg:pl-4 lg:pr-4">
					<p className="text-center font-bold">Launched</p>
				</div>
			</div>

			{exchanges.map((exchange, index) => {
				const counter = index + 1 + (selectedPage - 1) * pageItemCount;
				return (
					<>
						<div className="hover:bg-gray-900">
							<div key={exchange.id} className={`grid grid-cols-twoCols md:grid-cols-fourCols`}>
								<div className="flex place-self-start items-center h-full pr-4 lg:pl-4 lg:pr-4">
									<p className="text-secondary text-sm lg:text-base">{counter}</p>
								</div>

								<div className="place-self-start flex gap-2 lg:gap-6 items-center h-full lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2">
									<Image
										src={exchange.image.startsWith('http') ? exchange.image : ''}
										width={40}
										height={40}
										alt="coin image"
									/>
									<p className="text-sm lg:text-base">{exchange.name}</p>
								</div>

								<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
									<p className="text-sm lg:text-base">{exchange.trust_score}</p>
								</div>

								<div className="place-self-end flex items-center h-full lg:pl-4 lg:pr-4">
									<p className="text-sm lg:text-base">{exchange.trade_volume_24h_btc.toFixed(3)}</p>
								</div>

								<div className="place-self-end hidden md:flex items-center h-full lg:pl-4 lg:pr-4">
									<p className="text-sm lg:text-base">
										{exchange.year_established ? exchange.year_established : 'N/A'}
									</p>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
}
