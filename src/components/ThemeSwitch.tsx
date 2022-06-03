import { useEffect, useState } from 'react'

export const getTheme = (): string => {
	const theme = localStorage.getItem('theme')
	if (theme) {
		return theme
	}

	localStorage.setItem('theme', 'light')
	return 'light'
}

export function switchTheme(newTheme: string) {
	const html = document.getElementsByTagName('html')[0]
	html.setAttribute('data-theme', newTheme)
	localStorage.setItem('theme', newTheme)
}

export default function ThemeSwitch() {
	const [theme, setTheme] = useState(getTheme())
	const themes = [
		'candy',
		'rad',
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
	]
	useEffect(() => {
		switchTheme(theme)
	}, [theme])

	return (
		<div className='my-5'>
			<h1 className='text-xl font-bold my-2'>Select Theme</h1>
			<select
				className='select select-success  w-1/3'
				onChange={event => {
					setTheme(event.target.value)
				}}
			>
				<option value={theme}>{theme.toUpperCase()}</option>
				{themes.map(e => (
					<option key={e} value={e}>
						{e.toUpperCase()}
					</option>
				))}
			</select>
		</div>
	)
}
