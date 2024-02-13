import React from 'react';

interface CardProps {
	CardTitle: string;
}

export default function Card({ CardTitle }: CardProps) {
	return (
		<div className="flex flex-col gap-2 items-center bg-input rounded-2xl py-2 px-4">
			<p>Image</p>
			<p className="text-secondary text-sm">{CardTitle}</p>
			<p className="text-secondary text-xs text-center mb-4">{`Connect your ${CardTitle} account to start tracking your portfolio automatically.`}</p>
			<p className="font-bold mt-auto">Connect Now</p>
		</div>
	);
}
