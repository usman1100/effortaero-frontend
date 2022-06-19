import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsBuilding } from 'react-icons/bs'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AiFillProject, AiFillSetting } from 'react-icons/ai'
import { IoMdPerson } from 'react-icons/io'
import useValidate from '../lib/hooks/auth/useValidate'
import AuthStore from '../lib/state/authStore'
import Navbar from './Navbar'

const iconSize = 25
const ownerItems = [
	{
		url: 'organization',
		icon: <BsBuilding className='mr-2' size={iconSize} />,
	},
	{
		url: 'projects',
		icon: <AiFillProject className='mr-2' size={iconSize} />,
	},
	{
		url: 'stats',
		icon: <AiFillProject className='mr-2' size={iconSize} />,
	},
	{
		url: 'Profile',
		icon: <IoMdPerson className='mr-2' size={iconSize} />,
	},
	{
		url: 'setting',
		icon: <AiFillSetting className='mr-2' size={iconSize} />,
	},
]

const userItems = [
	{
		url: 'Profile',
		icon: <BsBuilding className='mr-2' size={iconSize} />,
	},
	{
		url: 'organization',
		icon: <BsBuilding className='mr-2' size={iconSize} />,
	},
	{
		url: 'setting',
		icon: <AiFillSetting className='mr-2' size={iconSize} />,
	},
]

export default function Dashboard() {
	const { isError: tokenInvalid } = useValidate()

	const [selectedItem, setSelectedItem] = useState(0)

	const isLoggedin = AuthStore(state => state.isLoggedIn)
	const role = AuthStore(state => state.role)
	const logout = AuthStore(state => state.logout)

	const redirect = useNavigate()

	const [routeItems, setRouteItems] = useState<any[]>([])

	useEffect(() => {
		if (!isLoggedin) redirect('/')

		if (tokenInvalid) {
			logout()
			toast.error('Session expired, please login again')
			redirect('/')
		}

		if (role === 'owner') {
			setRouteItems(ownerItems)
		} else {
			setRouteItems(userItems)
		}
	}, [])

	useEffect(() => {
		if (tokenInvalid) {
			logout()
			toast.error('Session expired, please login again')
			redirect('/')
		}
	}, [tokenInvalid])

	return (
		<div>
			<Navbar />
			<div className='grid grid-cols-5 h-screen'>
				<div className='px-3 border-r-2 bg-slate-200'>
					{routeItems.length &&
						routeItems.map(({ url, icon }, index) => (
							<Link to={`/dashboard/${url}`} key={url}>
								<button
									key={url}
									type='button'
									onClick={() => setSelectedItem(index)}
									className={`btn 
							capitalize w-full my-2 rounded-none
							${index === selectedItem ? 'btn-primary' : `btn-outline bg-slate-50`}
							${index === 0 ? 'mt-10' : ''}
							`}
								>
									{icon}
									{url}
								</button>
							</Link>
						))}
				</div>
				<div className='col-span-4'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
