import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background1: '#18191d',
				background2: '#141416',
				textGray: '#B1B5C3',
				tertiary: '#9485fe',
			},
			screens: {
				'lg': '992px',
			},
			keyframes: {
				'open-menu': {
					'0%': { transform: 'scaleY(0)' },
					'100%': { transform: 'scaleY(1)' },
				},
			},
			animation: {
				'open-menu': 'open-menu 0.3s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
export default config;
