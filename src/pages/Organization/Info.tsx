import { Link, useParams } from 'react-router-dom'
import AddMember from '../../components/AddMember'
import BackButton from '../../components/BackButton'
import MemberCard from '../../components/MemberCard'
import Navigator from '../../components/Navigator'
import ProjectCard from '../../components/ProjectCard'
import useGetOrgInfo from '../../lib/hooks/organizations/useGetOrgInfo'
import useGetProjectByOrg from '../../lib/hooks/projects/useGetProjectByOrg'
import AuthStore from '../../lib/state/authStore'
import { formatDate } from '../../utils/datetime'

export default function Info() {
	const { id } = useParams()

	const role = AuthStore(state => state.role)

	const { data: _projects } = useGetProjectByOrg(id as string)
	const projects = _projects?.data?.data

	const { data, isLoading } = useGetOrgInfo(id as string)
	const org = data?.data?.data?.org
	const members: any[] = data?.data?.data?.members

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton className='my-5' />
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

					<div className='grid grid-cols-1 gap-10'>
						{members.map(e => (
							<MemberCard {...e} key={e?._id} />
						))}
					</div>

					{role === 'owner' && <AddMember members={members} />}

					<h1 className='font-bold mt-5'>Organization Projects</h1>

					{projects?.length > 0 ? (
						<>
							{projects.map((e: any) => (
								<Link
									to={`/dashboard/projects/${e?._id}/delphi`}
								>
									<ProjectCard
										{...e}
										showOptions={role === 'owner'}
									/>
								</Link>
							))}
						</>
					) : (
						<h1>No projects have been created yet</h1>
					)}
				</>
			)}
		</div>
	)
}
