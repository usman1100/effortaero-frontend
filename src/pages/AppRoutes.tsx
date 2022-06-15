import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthStore from '../lib/state/authStore'
import NotFound from './404'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Delhpi from './Delphi'
import DelhpiRound from './DelphiRound'
import Ensemble from './Ensemble'
import MachineLearning from './MachineLearning'
import NewProject from './NewProject'
import Create from './Organization/Create'
import Info from './Organization/Info'
import JoinedOrgs from './Organization/JoinedOrgs'
import Listing from './Organization/Listing'
import Profile from './Profile'
import Estimate from './Project/Estimate'
import ProjectInfo from './Project/Info'
import ProjectListing from './Project/Listing'
import ProjectStats from './Project/ProjectStats'
import Settings from './Settings'
import Stats from './Stats'
import UCP from './UCP'

export default function AppRoutes() {
	const role = AuthStore(state => state.role)
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/dashboard' element={<Dashboard />}>
					{role === 'owner' ? (
						<>
							<Route
								path='/dashboard/organization'
								element={<Listing />}
							/>

							<Route
								path='/dashboard/organization/create'
								element={<Create />}
							/>

							<Route
								path='/dashboard/projects/:id/estimates'
								element={<Estimate />}
							/>

							<Route
								path='/dashboard/projects/new'
								element={<NewProject />}
							/>
							<Route
								path='/dashboard/projects/:id/ml'
								element={<MachineLearning />}
							/>

							<Route
								path='/dashboard/projects/:id/ucp'
								element={<UCP />}
							/>

							<Route
								path='/dashboard/projects/:id/ensemble'
								element={<Ensemble />}
							/>

							<Route
								path='/dashboard/stats'
								element={<Stats />}
							/>
							<Route
								path='/dashboard/stats/:id'
								element={<ProjectStats />}
							/>

							<Route
								path='/dashboard/projects/:id'
								element={<ProjectInfo />}
							/>
						</>
					) : (
						<Route
							path='/dashboard/organization'
							element={<JoinedOrgs />}
						/>
					)}

					<Route
						path='/dashboard/projects/:id/delphi'
						element={<Delhpi />}
					/>

					<Route
						path='/dashboard/projects/:id/delphi/:roundID'
						element={<DelhpiRound />}
					/>

					<Route
						path='/dashboard/projects'
						element={<ProjectListing />}
					/>
					<Route
						path='/dashboard/organization/:id'
						element={<Info />}
					/>

					<Route path='/dashboard/profile' element={<Profile />} />
					<Route path='/dashboard/setting' element={<Settings />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
