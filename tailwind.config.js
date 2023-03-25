/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"]
			},
			colors: {
				"primary": "#505050",
				"secondary": "#888888",
				"accent": "#19C0D7"
			}
		}
	},
	plugins: []
};
