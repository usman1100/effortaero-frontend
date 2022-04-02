import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LoginDetails } from '../../lib/api'
import AuthService from '../../lib/api/auth'

interface LoginPageProps {
	setAuthPage: Function
}

function Login({ setAuthPage }: LoginPageProps) {
	const authAPI = new AuthService()
	const [loginInfo, setLoginInfo] = useState<LoginDetails>({
		email: '',
		password: '',
	})
	const redirect = useNavigate()

	const { refetch, isLoading, isFetching } = useQuery(
		'login',
		() => authAPI.login(loginInfo),
		{
			enabled: false,
			refetchInterval: Infinity,
			retry: false,
			onError: (err: any) => {
				toast.error(err.response.data.message)
			},
			onSuccess: (data: any) => {
				localStorage.setItem('token', data.token)
				toast.success('Login Successful')
				redirect('/dashboard')
			},
		}
	)

	return (
		<>
			<h1 className='font-bold text-3xl mb-5'>Sign In</h1>

			<form
				className='form-control flex w-2/3 mx-auto'
				onSubmit={e => {
					e.preventDefault()
					refetch()
				}}
			>
				<input
					className='input input-bordered input-success'
					placeholder='Enter an email address'
					type='email'
					name='email'
					autoComplete='email'
					value={loginInfo.email}
					onChange={e =>
						setLoginInfo({ ...loginInfo, email: e.target.value })
					}
				/>

				<input
					className='input input-bordered input-success my-5'
					placeholder='Enter your password'
					type='password'
					name='password'
					autoComplete='current-password'
					value={loginInfo.password}
					onChange={e =>
						setLoginInfo({ ...loginInfo, password: e.target.value })
					}
				/>

				<div className='flex'>
					<button
						type='button'
						onClick={() => {
							setAuthPage('register')
						}}
						className='mr-auto text-sky-600 mb-5 hover:cursor-pointer'
					>
						Create a new account
					</button>
					<p className='ml-auto mb-5 hover:cursor-pointer'>
						Forgot password ? 😕
					</p>
				</div>

				<button
					type='submit'
					className={`w-1/2 mx-auto btn ${
						isLoading || isFetching
							? 'loading disabled'
							: 'btn-primary'
					} capitalize`}
				>
					Login
				</button>
			</form>
		</>
	)
}
export default Login