import { Link } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard'
import useGetCreatedProjects from '../../lib/hooks/projects/useGetCreatedProjects'

export default function Listing() {
	const { data, isLoading } = useGetCreatedProjects()

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

			{!isLoading &&
				data?.data?.data?.map((pro: any) => (
					<ProjectCard key={pro._id} {...pro} showOptions />
				))}

			{data?.data?.data?.length === 0 && (
				<h1 className='text-3xl font-bold'>No Project Created</h1>
			)}
		</div>
	)
}
