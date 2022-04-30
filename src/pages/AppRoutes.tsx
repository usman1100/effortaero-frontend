import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './404'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Members from './Members'
import NewProject from './NewProject'
import Organization from './Organizations'
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
						element={<Organization />}
					/>

					<Route
						path='/dashboard/organization/:orgId'
						element={<>hello</>}
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

					<Route path='/dashboard/members' element={<Members />} />

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
