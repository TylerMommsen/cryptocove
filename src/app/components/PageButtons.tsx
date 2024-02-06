import React from 'react';

export default function PageButtons({ selectedPage, setSelectedPage }) {
	const handlePageClick = (page: number) => {
		setSelectedPage(page);
	};

	return (
		<div id="market-page-numbers" className="flex flex-row justify-center items-center gap-6">
			{[1, 2, 3, 4, 5].map((pageNumber) => (
				<button
					key={pageNumber}
					className={`font-bold rounded-full ${
						selectedPage === pageNumber
							? 'blue-btn text-white'
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
