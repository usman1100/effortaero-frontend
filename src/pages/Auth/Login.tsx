import { useFormik } from 'formik'
import useLogin from '../../lib/hooks/auth/useLogin'

interface LoginPageProps {
	setAuthPage: Function
}

function Login({ setAuthPage }: LoginPageProps) {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: () => {
			mutate()
		},
	})

	const { isLoading, mutate } = useLogin(formik.values)
	return (
		<>
			<h1 className='font-bold text-3xl mb-5'>Sign In</h1>

			<form
				className='form-control flex w-2/3 mx-auto'
				onSubmit={formik.handleSubmit}
			>
				<input
					className='input input-bordered input-success'
					placeholder='Enter an email address'
					type='email'
					name='email'
					autoComplete='email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>

				<input
					className='input input-bordered input-success my-5'
					placeholder='Enter your password'
					type='password'
					name='password'
					autoComplete='current-password'
					value={formik.values.password}
					onChange={formik.handleChange}
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

					<button
						type='button'
						onClick={() => {
							setAuthPage('forget')
						}}
						className='mr-auto text-sky-600 mb-5 hover:cursor-pointer'
					>
						Forgot your password ?
					</button>
				</div>

				<button
					type='submit'
					className={`w-1/2 mx-auto btn ${
						isLoading ? 'loading disabled' : 'btn-primary'
					} capitalize`}
				>
					Login
				</button>
			</form>
		</>
	)
}
export default Login
