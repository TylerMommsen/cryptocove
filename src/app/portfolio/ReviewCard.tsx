import React from 'react';

interface CardProps {
	ReviewName: string;
	ReviewText: string;
}

export default function ReviewCard({ ReviewName, ReviewText }: CardProps) {
	return (
		<div className="flex flex-col gap-2 items-center bg-input rounded-2xl py-2 px-4">
			<p className="self-start text-sm">{ReviewName}</p>
			<p className="text-secondary self-start text-xs mb-4">{`Connect your ${ReviewText} account to start tracking your portfolio automatically.`}</p>
			<p className="font-bold mt-auto">See on Trustpilot</p>
		</div>
	);
}
