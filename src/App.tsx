import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { getTheme, switchTheme } from './components/ThemeSwitch'
import AppRoutes from './pages/AppRoutes'

function App() {
	useEffect(() => {
		switchTheme(getTheme())
	}, [])

	return (
		<>
			<AppRoutes />

			<Toaster />
		</>
	)
}

export default App
