/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					50: '#f0f9ff',
					600: '#2563eb',
					700: '#1d4ed8',
					950: '#172554',
				},
				slate: {
					600: '#475569',
				},
				background: '#0A0F1E',
				card: '#151B30',
				border: '#252B45',
			},
			boxShadow: {
				'xl': '0 0 50px -12px rgba(0, 0, 0, 0.8)',
			},
		},
	},
	plugins: [],
}