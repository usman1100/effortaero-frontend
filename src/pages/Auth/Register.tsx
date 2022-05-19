import { useFormik } from 'formik'
import { useState } from 'react'
import useRegister from '../../lib/hooks/auth/useRegister'

interface RegisterPageProps {
	setAuthPage: Function
}

function Register({ setAuthPage }: RegisterPageProps) {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			newPassword: '',
			confirmPassword: '',
			role: false,
		},
		validate,
		onSubmit: () => {
			mutate()
		},
	})

	const { mutate, isLoading } = useRegister({
		...formik.values,
		role: formik.values.role ? 'owner' : 'user',
	})
	function validate({
		name,
		newPassword,
		confirmPassword,
		orgName,
		role,
	}: any) {
		const errors: any = {}
		if (!name || name.length < 3) errors.name = 'Name is required'
		if (!newPassword || newPassword.length < 10)
			errors.newPassword = 'Password is required'
		if (!confirmPassword || confirmPassword !== newPassword) {
			errors.confirmPassword = 'Confirm Password is required'
			errors.newPassword = 'Confirm Password is required'
		}
		return errors
	}

	return (
		<>
			<h1 className='font-bold text-3xl mb-5'>Register</h1>

			<form
				id='register-form'
				className='form-control flex w-2/3 mx-auto'
				onSubmit={formik.handleSubmit}
			>
				<div className='grid grid-cols-2 items-center gap-5'>
					<input
						required
						className={`input input-bordered 
              ${
					formik.touched.name && formik.errors.name
						? 'input-error'
						: 'input-success'
				}`}
						placeholder='Enter your full name'
						type='text'
						name='name'
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					<input
						required
						className={`input input-bordered 
              ${
					formik.touched.email && formik.errors.email
						? 'input-error'
						: 'input-success'
				}`}
						placeholder='Enter an email address'
						type='email'
						name='email'
						autoComplete='email'
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<input
						required
						className={`input input-bordered 
              ${
					formik.touched.newPassword && formik.errors.newPassword
						? 'input-error'
						: 'input-success'
				}`}
						placeholder='Create a password'
						type='password'
						name='newPassword'
						autoComplete='new-password'
						id='newPassword'
						value={formik.values.newPassword}
						onChange={formik.handleChange}
					/>
					<input
						required
						className={`input input-bordered 
              ${
					formik.touched.confirmPassword &&
					formik.errors.confirmPassword
						? 'input-error'
						: 'input-success'
				}`}
						placeholder='Confirm your password'
						type='password'
						name='confirmPassword'
						id='confirmPassword'
						autoComplete='new-password'
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
					/>
					<div className='form-control'>
						<label
							form='register-form'
							htmlFor='role'
							className='label cursor-pointer'
						>
							<span className='label-text'>
								I am creating a new organization
							</span>
							<input
								type='checkbox'
								className='toggle'
								id='role'
								name='role'
								checked={formik.values.role}
								onChange={formik.handleChange}
							/>
						</label>
					</div>
				</div>

				<button
					type='button'
					className='hover:cursor-pointer my-5'
					onClick={() => {
						setAuthPage('login')
					}}
				>
					Already have an account ?
				</button>

				<button
					type='submit'
					className={`w-1/2 mx-auto btn ${
						isLoading ? 'loading' : 'btn-primary'
					} capitalize`}
					disabled={isLoading}
				>
					Register
				</button>
			</form>
		</>
	)
}
export default Register
