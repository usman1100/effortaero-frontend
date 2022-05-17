import Avatar from 'react-avatar'
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
	return (
		<div
			className='my-2 p-5 card w-full bg-base-100 shadow-xl grid grid-cols-8'
			key={_id}
		>
			<div className='col-start-1'>
				<Avatar name={userID.name} className='rounded-full' size='50' />
			</div>

			<div className='col-start-2 col-end-8'>
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
		</div>
	)
}
