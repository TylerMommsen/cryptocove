import Market from '@/components/common/market/Market';

export default function Cryptocurrencies() {
	return (
		<main className="mx-auto flex-grow w-full">
			<div className="flex flex-col pt-32 bg-primary">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight text-center mb-6">
					Market Update
				</h1>
				<p className="text-center text-secondary">
					With CryptoCove, you can manage all your crypto assets from one interface.
				</p>
				<Market isHomePage={false} />
			</div>
		</main>
	);
}
