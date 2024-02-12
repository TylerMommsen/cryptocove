import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			gridTemplateColumns: {
				sevenCols: 'auto repeat(7, minmax(0, 1fr))',
				sixCols: 'auto repeat(6, minmax(0, 1fr))',
				fiveCols: 'auto repeat(5, minmax(0, 1fr))',
				fourCols: 'auto repeat(4, minmax(0, 1fr))',
				threeCols: 'auto repeat(3, minmax(0, 1fr))',
				twoCols: 'auto repeat(2, minmax(0, 1fr))',
			},
			boxShadow: {
				inputFocus: '0 0 10px rgba(var(--accent), 1)',
				marketShadow: '0 -40px 40px rgba(20, 20, 22, 1)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'var(--input)',
				inputHover: 'var(--inputHover)',
				ring: 'var(--ring)',
				background: 'var(--primary)',
				foreground: 'var(--secondary2)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'hsl(var(--primary-foreground))',
				},
				primary2: {
					DEFAULT: 'var(--primary2)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				secondaryLowOpacity: {
					DEFAULT: 'var(--secondary-low-opacity)',
				},
				secondary2: {
					DEFAULT: 'var(--secondary2)',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'open-menu': {
					'0%': { transform: 'scaleY(0)' },
					'100%': { transform: 'scaleY(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'open-menu': 'open-menu 0.3s ease-in-out forwards',
			},
			screens: {
				'lg': '992px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
