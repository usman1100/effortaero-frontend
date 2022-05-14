import { Formik, useFormik } from 'formik'
import React, { useEffect, useRef } from 'react'
import { UpdateUserDetails } from '../lib/api'
import useMyDetails from '../lib/hooks/user/useMyDetails'
import useUpdateMyInfo from '../lib/hooks/user/useUpdateMyInfo'

export default function Profile() {
	const { data } = useMyDetails()
	const userInfo = data?.data?.data

	const formik = useFormik({
		initialValues: {
			name: userInfo?.name,
			email: userInfo?.email,
		},
		onSubmit: values => {
			mutate()
		},
	})
	const { mutate } = useUpdateMyInfo(formik.values as UpdateUserDetails)

	useEffect(() => {
		formik.setValues({
			name: userInfo?.name,
			email: userInfo?.email,
		})
	}, [data])

	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Profile</h1>

			<form
				onSubmit={formik.handleSubmit}
				className='grid grid-cols-2 gap-5 my-5'
			>
				<div>
					<p className='font-bold my-2'>Name</p>
					<input
						type='text'
						onChange={formik.handleChange}
						value={formik.values.name}
						name='name'
						id='name'
						className='input input-primary w-full'
					/>
				</div>

				<div>
					<p className='font-bold my-2'>Email</p>
					<input
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						name='email'
						id='email'
						className='input input-primary w-full'
					/>
				</div>

				<button className='btn btn-primary w-1/2' type='submit'>
					Update Changes
				</button>
			</form>
		</div>
	)
}
