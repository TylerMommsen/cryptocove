import Hero from '../components/Hero';
import Market from '../components/Market';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import Download from '../components/Download';

export default function Home() {
	return (
		<main className="mx-auto flex-grow">
			<Hero />
			<Market />
			<HowItWorks />
			<WhyUs />
			<Download />
		</main>
	);
}
