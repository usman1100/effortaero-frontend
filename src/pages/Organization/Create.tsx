import { useFormik } from 'formik'
import useCreateNewOrg from '../../lib/hooks/organizations/useCreateNewOrg'

export default function Create() {
	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit: () => {
			mutate()
			formik.resetForm()
		},
	})
	const { mutate } = useCreateNewOrg(formik.values.name)

	return (
		<>
			<h1 className='text-4xl'>Create An Organization</h1>
			<form onSubmit={formik.handleSubmit}>
				<input
					className='input input-bordered input-success'
					type='text'
					name='name'
					id='name'
					placeholder='Name'
					value={formik.values.name}
					onChange={formik.handleChange}
				/>

				<button className='btn btn-primary mx-5' type='submit'>
					Create
				</button>
			</form>
		</>
	)
}
