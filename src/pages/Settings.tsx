import { useNavigate } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import AuthStore from '../lib/state/authStore'

export default function Settings() {
	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

	const logout = AuthStore(state => state.logout)
	const redirect = useNavigate()
	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Settings</h1>
			<div className='grid grid-cols-3'>
				<div className='col-span-1'>
					<ThemeSwitch />
					<button
						type='button'
						className='btn btn-primary'
						onClick={() => {
							logout()
							redirect('/')
						}}
					>
						Logout
					</button>
				</div>

				<div className='col-span-2'>
					<div className='grid grid-cols-4 gap-5 p-5'>
						<button type='button' className='btn btn-primary'>
							Primary
						</button>

						<button type='button' className='btn btn-secondary'>
							Secondary
						</button>

						<button type='button' className='btn btn-accent'>
							Accent
						</button>

						<button type='button' className='btn btn-success'>
							Success
						</button>

						<button type='button' className='btn btn-error'>
							Error
						</button>

						<button type='button' className='btn btn-ghost'>
							Ghost
						</button>

						<button type='button' className='btn btn-link'>
							Link
						</button>

						<button type='button' className='btn btn-outline'>
							Outline
						</button>

						<button type='button' className='btn glass'>
							Glass
						</button>

						<button type='button' className='btn loading'>
							Loading
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
