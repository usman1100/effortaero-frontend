import Avatar from 'react-avatar'
import toast from 'react-hot-toast'
import useRemoveMember from '../lib/hooks/auth/useRemoveMember'
import AuthStore from '../lib/state/authStore'
import { formatDate } from '../utils/datetime'

interface props {
	createdAt: string
	userID: user
	_id: string
}

interface user {
	email: string
	name: string
	role: string
	__v: 0
	_id: string
}

export default function MemberCard({ userID, createdAt, _id }: props) {
	const role = AuthStore(state => state.role)
	const { mutate } = useRemoveMember(_id)
	const removeMember = () => {
		const email = prompt(
			`Enter member email to confirm removal: ${userID.email}`
		)
		if (email === null) {
			return
		}

		if (email !== userID.email) {
			toast.error('Email does not match')
			return
		}
		mutate()
	}
	return (
		<div
			className='my-2 p-5 card w-full bg-base-100 shadow-xl grid grid-cols-8'
			key={_id}
		>
			<div className='col-span-1'>
				<Avatar name={userID.name} className='rounded-full' size='50' />
			</div>

			<div className='col-start-2 col-span-6'>
				<h1 className='my-1'>
					Name: <span className='ml-3 font-bold'>{userID.name}</span>
				</h1>
				<h1 className='my-1'>
					Email:
					<span className='ml-3 font-bold'>{userID.email}</span>
				</h1>
				<h1 className='my-1'>
					Added on:
					<span className='ml-3 font-bold'>
						{formatDate(createdAt)}
					</span>
				</h1>
			</div>

			{role === 'owner' ? (
				<div className='col-span-1'>
					<button
						type='button'
						className='btn btn-warning'
						onClick={removeMember}
					>
						Remove
					</button>
				</div>
			) : null}
		</div>
	)
}
