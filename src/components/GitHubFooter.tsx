'use client';

import React, { useState, useEffect } from 'react';

export default function GitHubFooter() {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentYear(new Date().getFullYear());
		}, 60000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="bg-black">
			<div className="mx-auto max-w-7xl text-center pt-2 pb-2">
				Copyright &copy; {currentYear} Tyler Mommsen
			</div>
		</div>
	);
}
