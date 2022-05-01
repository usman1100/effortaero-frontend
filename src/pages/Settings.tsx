import { useNavigate } from 'react-router-dom'
import AuthStore from '../lib/state/authStore'

export default function Settings() {
	const logout = AuthStore(state => state.logout)
	const redirect = useNavigate()
	return (
		<>
			<h1 className='text-5xl'>Settings</h1>
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
		</>
	)
}
