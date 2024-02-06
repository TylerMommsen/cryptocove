const coingeckoApiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export default async function GetMarketData(page: number) {
	const res = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${coingeckoApiKey}
  `
	);

	if (!res.ok) throw new Error('Failed to fetch data');

	return res.json();
}
