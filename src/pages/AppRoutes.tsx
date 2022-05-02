import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './404'
import Auth from './Auth'
import Dashboard from './Dashboard'
import NewProject from './NewProject'
import Info from './Organization/Info'
import Listing from './Organization/Listing'
import ProjectInfo from './ProjectInfo'
import Projects from './Projects'
import Settings from './Settings'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route
						path='/dashboard/organization'
						element={<Listing />}
					/>

					<Route
						path='/dashboard/organization/:id'
						element={<Info />}
					/>

					<Route path='/dashboard/projects' element={<Projects />} />
					<Route
						path='/dashboard/projects/new'
						element={<NewProject />}
					/>
					<Route
						path='/dashboard/projects/:id'
						element={<ProjectInfo />}
					/>

					<Route
						path='/dashboard/projects/:id'
						element={<>Project ID: 123</>}
					/>

					<Route path='/dashboard/setting' element={<Settings />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
