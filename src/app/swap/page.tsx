import SidebarPopup from '@/components/common/SidebarPopup';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Swap() {
	return (
		<main className="mx-auto flex-grow w-full">
			<div className="flex flex-col justify-center items-center pt-32 pb-16 bg-primary">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight text-center mb-6">Swap</h1>
				<div className="flex flex-col gap-8 w-[340px] md:w-[460px] bg-primary2 p-8 rounded-2xl">
					<button className="flex text-secondary justify-between items-center w-full rounded-2xl border-input bg-background px-4 py-3 text-sm">
						Connect Your Wallet
						<Sheet>
							<SheetTrigger className="primary-btn px-6 py-2 rounded-full text-secondary2">
								Connect
							</SheetTrigger>
							<SheetContent className="border-none">
								<SidebarPopup />
							</SheetContent>
						</Sheet>
					</button>

					<div className="w-full bg-primary flex flex-col px-4 py-3 rounded-2xl">
						<div className="flex flex-col gap-2">
							<p className="text-secondary">Pay</p>
							<div className="flex justify-between items-center">
								<button className="flex justify-between items-center gap-2 bg-primary2 rounded-2xl px-4 py-2 h-auto">
									Select Coin
									<p className="text-2xl">&#x2193;</p>
								</button>
								<div className="flex flex-col gap-2 items-end">
									<p className="text-2xl">0</p>
									<p className="text-secondary">USD0</p>
								</div>
							</div>
						</div>

						<div className="flex items-center">
							<hr className="w-full" />
							<p className="px-3 py-1 border rounded-full">&#x2193;</p>
							<hr className="w-full" />
						</div>

						<div className="flex flex-col gap-2">
							<p className="text-secondary">Receive</p>
							<div className="flex justify-between items-center">
								<button className="flex justify-between items-center gap-2 bg-primary2 rounded-2xl py-2 px-4">
									Select Coin
									<p className="text-2xl">&#x2193;</p>
								</button>
								<div className="flex flex-col gap-2 items-end">
									<p className="text-2xl">0</p>
									<p className="text-secondary">USD0</p>
								</div>
							</div>
						</div>
					</div>

					<button className="text-center primary-btn py-4 px-6 rounded-full">
						Select Pay Coin
					</button>
				</div>
			</div>
		</main>
	);
}
