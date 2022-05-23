import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { useNavigate } from 'react-router-dom'
import FacebookLogo from '../../assets/images/icons/icons8-facebook.svg'
import { SocialLoginDetails } from '../../lib/api'
import useSocialLogin from '../../lib/hooks/auth/useSocialLogin'
import AuthStore from '../../lib/state/authStore'
import Login from './Login'
import Register from './Register'
import ForgetPassword from '../../components/ForgetPassword'

export default function Auth() {
	const [authPage, setAuthPage] = useState('login')

	const redirect = useNavigate()

	const isLoggedIn = AuthStore(state => state.isLoggedIn)
	React.useEffect(() => {
		if (isLoggedIn) redirect('/dashboard/organization')
	}, [])

	const [socilInfo, setSocialInfo] = useState<SocialLoginDetails>({
		email: '',
		name: '',
		authProvider: 'google',
	})

	const responseGoogle = (e: any) => {
		if (!e.error) {
			setSocialInfo({
				name: e.profileObj.name,
				email: e.profileObj.email,
				authProvider: 'google',
			})
		}
	}

	const facebookResponse = (e: any) => {
		if (!e.error) {
			setSocialInfo({
				name: e.name,
				email: e.email,
				authProvider: 'facebook',
			})
		}
	}

	useEffect(() => {
		if (socilInfo.email) {
			mutate()
		}
	}, [socilInfo])

	const googleID =
		'286738020826-n2caknvf798tq323kppbrqneiqoj4r0s.apps.googleusercontent.com'
	const facebookID = '366745742092139'

	const { mutate } = useSocialLogin(socilInfo)

	const renderAuthPage = () => {
		switch (authPage) {
			case 'login':
				return <Login setAuthPage={setAuthPage} />
			case 'register':
				return <Register setAuthPage={setAuthPage} />
			case 'forget':
				return <ForgetPassword setAuthPage={setAuthPage} />
			default:
				return <Login setAuthPage={setAuthPage} />
		}
	}

	return (
		<div className='flex'>
			<div className='h-screen w-2/3 flex bg-blue-400 p-5'>
				<div className='m-auto w-full text-center'>
					<h1 className='text-xl font-bold'>
						Save some clicks, use OAuth
					</h1>

					<GoogleLogin
						autoLoad={false}
						clientId={googleID}
						buttonText='Login'
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy='single_host_origin'
						className='btn btn-primary w-4/5 my-3'
					>
						Continue with Google
					</GoogleLogin>

					<FacebookLogin
						appId={facebookID}
						autoLoad={false}
						fields='name,email,picture'
						callback={facebookResponse}
						textButton='Continue with Facebook'
						icon={
							<img
								className='mr-2'
								src={FacebookLogo}
								height={30}
								width={30}
								alt='facebook logo'
							/>
						}
						cssClass='btn btn-warning w-4/5'
					/>
				</div>
			</div>

			<div className='p-5 w-full text-center'>
				<h1 className='text-5xl my-20 font-semibold'>
					Effort Aero
					<p className='text-2xl my-5 font-light capitalize'>
						software cost estimation redefined 🚀
					</p>
				</h1>

				{renderAuthPage()}
			</div>
		</div>
	)
}
