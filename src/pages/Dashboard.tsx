import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useValidate from '../lib/hooks/auth/useValidate'
import AuthStore from '../lib/state/authStore'
import Navbar from './Navbar'

const items = ['organization', 'projects', 'setting']

export default function Dashboard() {
	const { isError: tokenInvalid, isLoading: validateLoading } = useValidate()

	const [selectedItem, setSelectedItem] = useState(0)

	const isLoggedin = AuthStore(state => state.isLoggedIn)

	const logout = AuthStore(state => state.logout)

	const redirect = useNavigate()

	useEffect(() => {
		if (!isLoggedin) redirect('/')
	}, [])

	useEffect(() => {
		if (!validateLoading && tokenInvalid) {
			toast.error('Session expired, please login again')
			logout()
			redirect('/')
		}
	}, [tokenInvalid])

	return (
		<div>
			<Navbar />
			<div className='grid grid-cols-5 h-screen'>
				<div className='px-3 border-r-2'>
					{items.map((item, index) => (
						<Link to={`/dashboard/${item}`} key={item}>
							<button
								key={item}
								type='button'
								onClick={() => setSelectedItem(index)}
								className={`btn 
							capitalize w-full my-2
							${index === selectedItem ? 'btn-primary' : 'btn-outline'}
							${index === 0 ? 'mt-10' : ''}
							`}
							>
								{item}
							</button>
						</Link>
					))}
				</div>
				<div className=' bg-slate-50 col-span-4'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
