import { useNavigate } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import AuthStore from '../lib/state/authStore'

export default function Settings() {
	const logout = AuthStore(state => state.logout)
	const redirect = useNavigate()
	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Settings</h1>
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
	)
}
