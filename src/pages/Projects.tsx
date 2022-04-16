import ProjectCard from '../components/ProjectCard'
import useGetCreatedProjects from '../lib/hooks/projects/useGetCreatedProjects'

export default function Projects() {
	const { data, isLoading } = useGetCreatedProjects()

	return (
		<div className='p-4'>
			<h1 className='text-5xl'>Projects</h1>

			<div className='my-5'>
				<button type='button' className='btn btn-primary'>
					+ Create New
				</button>
			</div>

			{!isLoading &&
				data?.data?.data?.map((pro: any) => <ProjectCard {...pro} />)}
		</div>
	)
}
