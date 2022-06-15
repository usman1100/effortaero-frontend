import { useFormik } from 'formik'
import BackButton from '../../components/BackButton'
import Navigator from '../../components/Navigator'
import useCreateNewOrg from '../../lib/hooks/organizations/useCreateNewOrg'

export default function Create() {
	const formik = useFormik({
		initialValues: {
			name: '',
			slogan: '',
		},
		onSubmit: () => {
			mutate()
			formik.resetForm()
		},
	})
	const { mutate } = useCreateNewOrg(formik.values)

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton />
			<h1 className='text-4xl my-5'>Create An Organization</h1>
			<form onSubmit={formik.handleSubmit} className=' p-4 rounded-lg'>
				<p className='mb-3'>Company Name</p>
				<input
					className='input input-bordered input-success w-1/2'
					type='text'
					name='name'
					id='name'
					placeholder='i.e Tesla, Notion'
					required
					value={formik.values.name}
					onChange={formik.handleChange}
				/>

				<p className='mt-10 mb-3'>Company Slogan</p>
				<input
					className='input input-bordered input-success w-1/2'
					type='slogan'
					name='slogan'
					id='slogan'
					placeholder='i.e "We are the future", "Das Auto"'
					maxLength={100}
					value={formik.values.slogan}
					onChange={formik.handleChange}
				/>

				<br />

				<button className='btn btn-primary my-8' type='submit'>
					Create New Organization
				</button>
			</form>
		</div>
	)
}
