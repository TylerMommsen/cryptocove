'use client';

import React, { useEffect, useState } from 'react';

export default function HeroBG() {
	const [gridRows, setGridRows] = useState(0);
	const [gridCols, setGridCols] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setGridRows(Math.floor(window.innerHeight / 120));
			setGridCols(Math.floor(window.innerWidth / 120));
		};

		if (typeof window !== 'undefined') {
			setGridRows(Math.floor(window.innerHeight / 120));
			setGridCols(Math.floor(window.innerWidth / 120));
			window.addEventListener('resize', handleResize);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, []);

	const createTile = () => {
		return (
			<div className="tile border opacity-5 relative before:bg-background2 before:content-[''] before:absolute before:inset-[0.5px]"></div>
		);
	};

	const createTiles = (quantity: number) => {
		const tiles = [];
		for (let i = 0; i < quantity; i++) {
			tiles.push(createTile());
		}
		return tiles;
	};

	return (
		<>
			<div
				className={`hero-bg absolute top-0 left-0 h-screen w-screen grid`}
				style={{
					gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
					gridTemplateRows: `repeat(${gridRows}, 1fr)`,
				}}
			>
				{Array.from(Array(gridRows)).map((_, rowIndex) => (
					<React.Fragment key={rowIndex}>{createTiles(gridCols)}</React.Fragment>
				))}
			</div>
		</>
	);
}
