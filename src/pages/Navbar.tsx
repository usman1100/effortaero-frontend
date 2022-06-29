import Avatar from 'react-avatar'
import { Link, useNavigate } from 'react-router-dom'
import useMyDetails from '../lib/hooks/user/useMyDetails'
import AuthStore from '../lib/state/authStore'

export default function Navbar() {
	const { data, isLoading } = useMyDetails()
	const logout = AuthStore(state => state.logout)
	const redirect = useNavigate()

	return (
		<div className='navbar bg-primary drop-shadow-lg'>
			<div className='flex-1'>
				<p className='btn btn-ghost normal-case text-xl text-slate-50'>
					{isLoading
						? 'Loading ...'
						: `Welcome, ${data?.data?.data?.name}` ||
						  'Unauthorized'}
				</p>
			</div>
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='avatar'>
						<div className='rounded-full'>
							<Avatar
								name={data?.data?.data?.name}
								className='text-slate-50'
								size='50'
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link to='/dashboard/profile'>
								<p className='justify-between'>Profile</p>
							</Link>
						</li>
						<li>
							<Link to='/dashboard/setting'>
								<button type='button'>Settings</button>
							</Link>
						</li>
						<li>
							<button
								onClick={() => {
									logout()
									redirect('/')
								}}
								type='button'
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
