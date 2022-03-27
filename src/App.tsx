import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth />} />
				</Routes>
			</BrowserRouter>

			<Toaster />
		</>
	)
}

export default App
