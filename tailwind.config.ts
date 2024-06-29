/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-smooth-light": "#F9FBFF",
				"blue-brand-light": "#3D59A4",
				"blue-brand": "#0C1D5A",
				"light-gray": "#E3E3E3",
				"medium-gray": "#ECECEC",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				btn: {
					background: "hsl(var(--btn-background))",
					"background-hover": "hsl(var(--btn-background-hover))",
				},
			},
		},
	},
	plugins: [],
};
