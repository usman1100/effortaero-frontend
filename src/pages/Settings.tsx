import { useNavigate } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import AuthStore from '../lib/state/authStore'

export default function Settings() {
	const buttonTypes = [
		'primary',
		'secondary',
		'info',
		'warning',
		'btn-danger',
		'success',
		'light',
		'btn-dark',
	]

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

				<div className='border-2 col-span-2'>
					<div className=''>
						{buttonTypes.map((e: string) => (
							<button type='button' className={`btn ${e}`}>
								{capitalize(e)}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
