import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/404'
import Auth from './pages/Auth'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster />
		</>
	)
}

export default App
