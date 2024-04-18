import type { Config } from "tailwindcss";

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			gridTemplateColumns: {
				sevenCols: "auto repeat(7, minmax(0, 1fr))",
				sixCols: "auto repeat(6, minmax(0, 1fr))",
				fiveCols: "auto repeat(5, minmax(0, 1fr))",
				fourCols: "auto repeat(4, minmax(0, 1fr))",
				threeCols: "auto repeat(3, minmax(0, 1fr))",
				twoCols: "auto repeat(2, minmax(0, 1fr))",
			},
			boxShadow: {
				inputFocus: "0 0 10px rgba(var(--accent), 1)",
				marketShadow: "0 -40px 50px rgba(20, 20, 22, 1)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "var(--input)",
				inputHover: "var(--inputHover)",
				ring: "var(--ring)",
				background: "var(--primary)",
				purpleBackgroundTint: "var(--purpleBackgroundTint)",
				foreground: "var(--secondary2)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "hsl(var(--primary-foreground))",
				},
				primary2: {
					DEFAULT: "var(--primary2)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "hsl(var(--secondary-foreground))",
				},
				secondaryLowOpacity: {
					DEFAULT: "var(--secondary-low-opacity)",
				},
				secondary2: {
					DEFAULT: "var(--secondary2)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"100%": { transform: "scaleY(1)" },
				},
				bounceAnim: {
					"0%, 100%": { transform: "translateY(0)" }, // Start and end at the original position
					"50%": { transform: "translateY(50px)" }, // Return to the original position in the middle
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"open-menu": "open-menu 0.3s ease-in-out forwards",
				bounceAnim: "bounceAnim 8s ease-in-out infinite",
				fadeIn: "fade-in 2s ease-out forwards",
			},
			screens: {
				lg: "992px",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/aspect-ratio"),
		addVariablesForColors,
	],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
