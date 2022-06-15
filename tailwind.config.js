module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'monospace', 'Raleway'],
		},
	},
	safelist: ['bg-amber-400'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			{
				rad: {
					primary: '#c40b90',

					secondary: '#91f2ab',

					accent: '#eddc80',

					neutral: '#191D24',

					'base-100': '#3C3C53',

					info: '#586FD5',

					success: '#1DC37E',

					warning: '#FAD014',

					error: '#EE1B5E',
				},
			},

			{
				candy: {
					primary: '#f9d6b3',

					secondary: '#eaa6e1',

					accent: '#1da5b7',

					neutral: '#1B1B22',

					'base-100': '#F4EAF6',

					info: '#4894DB',

					success: '#6DE9AB',

					warning: '#F5950F',

					error: '#E95D77',
				},
			},
		],
	},
}
