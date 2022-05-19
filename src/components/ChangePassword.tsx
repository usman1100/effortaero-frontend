import { useFormik } from 'formik'
import useChangePassword from '../lib/hooks/auth/useChangePassword'

export default function ChangePassword() {
	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
		},
		onSubmit: () => {
			mutate()
		},
	})
	const { mutate, isLoading } = useChangePassword(formik.values)

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='grid grid-cols-2 gap-5 my-5'
		>
			<div>
				<p className='font-bold my-2'>Old Password</p>
				<input
					type='password'
					onChange={formik.handleChange}
					value={formik.values.oldPassword}
					name='oldPassword'
					id='oldPassword'
					className='input input-primary w-full'
					required
					minLength={8}
				/>
			</div>

			<div>
				<p className='font-bold my-2'>New Password</p>
				<input
					type='password'
					onChange={formik.handleChange}
					value={formik.values.newPassword}
					name='newPassword'
					id='newPassword'
					className='input input-primary w-full'
					required
					minLength={8}
				/>
			</div>

			<button
				disabled={isLoading}
				className='btn btn-secondary w-1/2'
				type='submit'
			>
				Update Changes
			</button>
		</form>
	)
}
