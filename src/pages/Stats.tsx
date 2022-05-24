import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import ProjectCard from '../components/ProjectCard'
import useGetCreatedProjects from '../lib/hooks/projects/useGetCreatedProjects'

export default function Stats() {
	const { data, isLoading } = useGetCreatedProjects()

	if (isLoading) {
		return <h1>Loading</h1>
	}

	return (
		<div className='p-4'>
			<h1 className='text-5xl'>Projects</h1>

			<div className='my-5'>
				<Link to='/dashboard/projects/new'>
					<button type='button' className='btn btn-primary'>
						+ Create New
					</button>
				</Link>
			</div>

			<div className='grid grid-cols-3 gap-1'>
				{data &&
					data?.data?.data?.map((pro: any) => (
						<Link to={`/dashboard/stats/${pro?._id}`}>
							<ProjectCard
								key={pro._id}
								{...pro}
								showOptions={false}
							/>
						</Link>
					))}
			</div>

			{data?.data?.data?.length === 0 && (
				<h1 className='text-3xl font-bold'>No Project Created</h1>
			)}
		</div>
	)
}
