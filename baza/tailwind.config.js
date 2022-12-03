/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			mobil: '450px',
			tablet: '768px',
			tabl: '769px',
			smFooScr: '600px',
			fooScr: '960px',
			notebook: '1024px',
			lapt: '1025px',
			timelap: '1180px',
		},
		extend: {
			fontFamily: {
				sans: ['Ubuntu, sans-serif'],
			},
		},
	},
	plugins: [],
};
