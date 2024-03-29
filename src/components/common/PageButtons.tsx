import React from 'react';

interface PageButtonsProps {
	selectedPage: number;
	setSelectedPage: (page: number) => void;
	currentMarketSelection: string;
	isHomePage: boolean;
}

export default function PageButtons({
	selectedPage,
	setSelectedPage,
	currentMarketSelection,
	isHomePage,
}: PageButtonsProps) {
	const handlePageClick = (page: number) => {
		setSelectedPage(page);
	};

	let totalPages = 1;
	if (currentMarketSelection === 'cryptocurrencies') totalPages = 10;
	else if (currentMarketSelection === 'exchanges') totalPages = 8;
	else if (currentMarketSelection === 'categories') totalPages = 1;

	if (totalPages > 5 && isHomePage) totalPages = 5;

	return (
		<div id="market-page-numbers" className="flex flex-row justify-center items-center gap-6">
			{Array.from({ length: totalPages || 0 }, (_, index) => index + 1).map((pageNumber) => (
				<button
					key={pageNumber}
					className={`font-bold rounded-full ${
						selectedPage === pageNumber
							? 'primary-btn text-white'
							: 'bg-white hover:bg-gray-200 active:bg-gray-300 text-black'
					}  pt-2 pb-2 pr-4 pl-4`}
					onClick={() => handlePageClick(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
		</div>
	);
}
