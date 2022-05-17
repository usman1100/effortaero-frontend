import { useParams } from 'react-router-dom'
import AddMember from '../../components/AddMember'
import MemberCard from '../../components/MemberCard'
import useGetOrgInfo from '../../lib/hooks/organizations/useGetOrgInfo'
import AuthStore from '../../lib/state/authStore'
import { formatDate } from '../../utils/datetime'

export default function Info() {
	const { id } = useParams()

	const role = AuthStore(state => state.role)

	const { data, isLoading } = useGetOrgInfo(id as string)
	const org = data?.data?.data?.org
	const members: any[] = data?.data?.data?.members

	return (
		<div className='p-5'>
			<button
				className='btn btn-secondary'
				type='button'
				onClick={() => {
					window.history.back()
				}}
			>
				Back
			</button>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<>
					<h1 className='font-bold text-5xl mt-5'>{org?.name}</h1>

					<h1 className='my-5'>
						Date of creation:{' '}
						<p className='font-bold'>{formatDate(org.createdAt)}</p>
					</h1>

					<h1 className='font-bold'>
						{members.length === 0 ? 'No Members' : 'Members'}
					</h1>

					<div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
						{members.map(e => (
							<MemberCard {...e} />
						))}
					</div>

					{role === 'owner' && <AddMember members={members} />}
				</>
			)}
		</div>
	)
}
