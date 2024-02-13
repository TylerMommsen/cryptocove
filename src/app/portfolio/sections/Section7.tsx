import React from 'react';
import ReviewCard from '../ReviewCard';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section7() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col gap-6 items-center">
				<h1 className="font-bold text-2xl">Trusted by over 1.8 million users</h1>

				<div className="flex flex-col lg:flex-row gap-6">
					<ReviewCard
						ReviewName="James M."
						ReviewText="Easy access to price across all coins, easy to use and awesome place to stay in touch of all of portfolio across multiple wallets."
					/>

					<ReviewCard
						ReviewName="James M."
						ReviewText="Easy access to price across all coins, easy to use and awesome place to stay in touch of all of portfolio across multiple wallets."
					/>

					<ReviewCard
						ReviewName="James M."
						ReviewText="Easy access to price across all coins, easy to use and awesome place to stay in touch of all of portfolio across multiple wallets."
					/>
				</div>

				<OpenSideBarBtn
					ButtonText="Connect Portfolio"
					ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4 self-center"
				/>
			</div>
		</section>
	);
}
