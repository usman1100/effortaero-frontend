import { useState } from 'react'

const getTheme = (): string => {
	const theme = localStorage.getItem('theme')
	if (theme) {
		return theme
	}

	localStorage.setItem('theme', 'light')
	return 'light'
}

export default function ThemeSwitch() {
	const [theme, setTheme] = useState(getTheme())
	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
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
	]

	return (
		<div className='my-5'>
			<h1 className='text-xl font-bold my-2'>Select Theme</h1>
			<select
				className='select w-1/3'
				onChange={event => {
					setTheme(event.target.value)
				}}
			>
				<option value={theme}>{theme.toUpperCase()}</option>
				{themes.map(e => (
					<option value={e}>{e.toUpperCase()}</option>
				))}
			</select>
		</div>
	)
}
