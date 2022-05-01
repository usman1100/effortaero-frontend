import { useQuery } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useGetProjectDetails = (projectId: string) => {
	const projectAPI = new ProjectServiec()
	return useQuery(['project', projectId], () => projectAPI.getOne(projectId))
}

export default useGetProjectDetails
