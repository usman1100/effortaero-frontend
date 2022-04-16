import { useQuery } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useGetCreatedProjects = () => {
	const projectsAPI = new ProjectServiec()
	return useQuery(['projected', 'created'], () =>
		projectsAPI.createdProjects()
	)
}

export default useGetCreatedProjects
