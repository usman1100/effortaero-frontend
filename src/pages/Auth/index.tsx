import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import FacebookLogo from '../../assets/images/icons/icons8-facebook.svg'
import GoogleLogo from '../../assets/images/icons/icons8-google.svg'
import GitHubIcon from '../../assets/images/icons/icons8-octocat.svg'
import AuthStore from '../../lib/state/authStore'
import Login from './Login'
import Register from './Register'

export default function Auth() {
	const logoSize = 30
	const [authPage, setAuthPage] = useState('login')

	const redirect = useNavigate()

	const isLoggedIn = AuthStore(state => state.isLoggedIn)
	React.useEffect(() => {
		toast.success('Redirected')
		if (isLoggedIn) redirect('/dashboard')
	}, [])

	return (
		<div className='flex'>
			<div className='h-screen w-2/3 flex bg-blue-400 p-5'>
				<div className='m-auto w-full text-center'>
					<h1 className='text-xl font-bold'>
						Save some clicks, use OAuth
					</h1>

					<button type='button' className='btn bg-sky-900 w-4/5 mt-5'>
						<img
							alt='GitHub'
							className='mr-5 hidden lg:block'
							src={GitHubIcon}
							width={logoSize}
							height={logoSize}
						/>
						Continue with Github
					</button>

					<button
						type='button'
						className='btn btn-warning bg-amber-400 text-slate-900 w-4/5 my-3'
					>
						<img
							alt='Google'
							className='mr-5 hidden lg:block'
							src={GoogleLogo}
							width={logoSize}
							height={logoSize}
						/>
						Continue with Google
					</button>

					<button
						type='button'
						className='btn btn-info bg-sky-400 text-slate-900 w-4/5'
					>
						<img
							alt='Facebook'
							className='mr-5 hidden lg:block'
							src={FacebookLogo}
							width={logoSize}
							height={logoSize}
						/>
						Continue with Facebook
					</button>
				</div>
			</div>

			<div className='p-5 w-full text-center'>
				<h1 className='text-5xl my-20 font-semibold'>
					Effort Aero
					<p className='text-2xl my-5 font-light capitalize'>
						software cost estimation redefined 🚀
					</p>
				</h1>

				{authPage === 'login' ? (
					<Login setAuthPage={setAuthPage} />
				) : (
					<Register setAuthPage={setAuthPage} />
				)}
			</div>
		</div>
	)
}
