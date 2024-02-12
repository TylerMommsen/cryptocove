const coingeckoApiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export default async function ResourceLoader(resourceUrl: string) {
	const res = await fetch(
		`${resourceUrl}&sparkline=false&locale=en&x_cg_demo_api_key=${coingeckoApiKey}
  `
	);

	if (!res.ok) throw new Error('Failed to fetch data');

	return res.json();
}
