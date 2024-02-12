import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GitHubFooter from '../components/layout/GitHubFooter';

const roboto = Roboto({ weight: '400', style: ['normal'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CryptoCove',
	description: 'A crypto exchange website.',
	icons: {
		icon: '/PNG/icon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} text-white bg-black antialiased max-w-screen min-h-screen flex flex-col overflow-x-hidden`}
			>
				<Header />
				{children}
				<Footer />
				<GitHubFooter />
			</body>
		</html>
	);
}
