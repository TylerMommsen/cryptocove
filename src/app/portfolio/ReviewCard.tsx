import React from 'react';
import Image from 'next/image';

interface CardProps {
	ReviewName: string;
	ReviewText: string;
}

export default function ReviewCard({ ReviewName, ReviewText }: CardProps) {
	return (
		<div className="flex flex-col gap-2 items-center bg-input rounded-2xl py-4 px-6">
			<p className="self-start text-sm lg:text-base">{ReviewName}</p>
			<p className="text-secondary self-start text-xs lg:text-sm mb-4">{`Connect your ${ReviewText} account to start tracking your portfolio automatically.`}</p>
			<div className="flex gap-4 items-center">
				<p className="font-bold mt-auto">See on Trustpilot</p>
				<Image src="/PNG/arrow-icon.png" width={16} height={16} alt="arrow icon" />
			</div>
		</div>
	);
}
