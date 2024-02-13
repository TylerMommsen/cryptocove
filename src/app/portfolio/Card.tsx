import React from 'react';
import Image from 'next/image';

interface CardProps {
	CardTitle: string;
	CardImage: string;
}

export default function Card({ CardTitle, CardImage }: CardProps) {
	return (
		<div className="flex flex-col gap-2 items-center bg-input rounded-2xl p-4 cursor-pointer border border-transparent hover:border-accent">
			<Image src={`/PNG/${CardImage}`} width={72} height={72} alt={'coin icon'} />
			<p className="text-secondary text-sm">{CardTitle}</p>
			<p className="text-secondary text-xs text-center mb-4">{`Connect your ${CardTitle} account to start tracking your portfolio automatically.`}</p>
			<p className="font-bold mt-auto">Connect Now</p>
		</div>
	);
}
