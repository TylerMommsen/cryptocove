import Hero from '../components/home/Hero';
import Market from '../components/common/market/Market';
import HowItWorks from '../components/home/HowItWorks';
import WhyUs from '../components/home/WhyUs';
import Download from '../components/home/Download';

export default function Home() {
	return (
		<main className="mx-auto flex-grow">
			<Hero />
			<Market isHomePage={true} />
			<HowItWorks />
			<WhyUs />
			<Download />
		</main>
	);
}
