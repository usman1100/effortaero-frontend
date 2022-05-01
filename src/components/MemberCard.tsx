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
		<div className='my-2 p-5 card w-96 bg-base-100 shadow-xl' key={_id}>
			<h1 className='my-1'>
				Name: <span className='font-bold'>{userID.name}</span>
			</h1>
			<h1 className='my-1'>
				Email:
				<span className='font-bold'>{userID.email}</span>
			</h1>
			<h1 className='my-1'>
				Added on:
				<span className='font-bold'>{formatDate(createdAt)}</span>
			</h1>
		</div>
	)
}
