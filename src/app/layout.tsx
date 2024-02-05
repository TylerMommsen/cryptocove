import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GitHubFooter from './components/GitHubFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CryptoCove Site',
	description: 'A crypto exchange website.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} text-white bg-black antialiased max-w-screen min-h-screen flex flex-col overflow-x-hidden`}
			>
				<Header />
				{children}
				<Footer />
				<GitHubFooter />
			</body>
		</html>
	);
}
