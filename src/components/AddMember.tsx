import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import useGetOrgInfo from '../lib/hooks/organizations/useGetOrgInfo'
import useSearchUsers from '../lib/hooks/user/useSearchUsers'

export default function AddMember({ members }: { members: any[] }) {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: () => {
			refetch()
		},
	})
	const { data: users, refetch } = useSearchUsers({
		name: formik.values.email,
		email: formik.values.email,
	})
	const searchedUsers = users?.data?.data

	const { id } = useParams()

	const { data: orgInfo } = useGetOrgInfo(id as string)
	const membersList = orgInfo?.data?.data?.members

	return (
		<div className='p-3 mt-5'>
			<h1 className='text-2xl'>Add Member</h1>
			<p className='font-bold my-5'>Enter member&apos;s email address</p>
			<form onSubmit={formik.handleSubmit}>
				<input
					type='text'
					className='input input-primary  w-2/5'
					placeholder='Email address'
					id='email'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>

				<button type='submit' className='ml-5 btn btn-info'>
					Search
				</button>
			</form>

			{searchedUsers && membersList && (
				<div>
					{searchedUsers.map((e: any) => {
						if (
							membersList.findIndex(
								(m: any) => m.userID.email === e.email
							) === -1
						) {
							return (
								<div className='flex items-center border-2 p-2 rounded-xl my-2 w-2/5'>
									<p>{e.email}</p>
									<button
										type='button'
										className='btn btn-primary ml-auto'
									>
										Add
									</button>
								</div>
							)
						}

						return null
					})}
				</div>
			)}
		</div>
	)
}
