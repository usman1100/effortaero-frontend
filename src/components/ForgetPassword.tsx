import { useFormik } from 'formik'
import useForgetPassword from '../lib/hooks/auth/useForgetPassword'

interface Props {
	setAuthPage: Function
}

export default function ForgetPassword({ setAuthPage }: Props) {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: () => {
			mutate()
		},
	})

	const { isLoading, mutate } = useForgetPassword(formik.values.email)

	return (
		<>
			<h1 className='font-bold text-3xl mb-5'>Forget Password</h1>

			<form
				className='form-control flex w-2/3 mx-auto'
				onSubmit={formik.handleSubmit}
			>
				<input
					className='input input-bordered input-success'
					placeholder='Enter your email address'
					type='email'
					name='email'
					autoComplete='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					required
				/>
				<button
					type='submit'
					className={`mt-5 w-1/2 mx-auto btn ${
						isLoading ? 'loading disabled' : 'btn-primary'
					} `}
				>
					Send Me a Reset Link
				</button>

				<div className='flex mt-5'>
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
							setAuthPage('login')
						}}
						className='ml-auto text-sky-600 mb-5 hover:cursor-pointer'
					>
						Login to existing account
					</button>
				</div>
			</form>
		</>
	)
}
