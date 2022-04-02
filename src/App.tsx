import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/404'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Organization from './pages/OwnerPage/Organization'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth />} />
					<Route path='/dashboard' element={<Dashboard />}>
						<Route
							path='/dashboard/organization'
							element={<Organization />}
						/>

						<Route
							path='/dashboard/projects'
							element={<>Projects</>}
						/>

						<Route
							path='/dashboard/setting'
							element={<>Settings</>}
						/>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster />
		</>
	)
}

export default App
