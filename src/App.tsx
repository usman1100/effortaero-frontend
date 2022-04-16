import React from 'react'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './pages/AppRoutes'

function App() {
	return (
		<>
			<AppRoutes />

			<Toaster />
		</>
	)
}

export default App
