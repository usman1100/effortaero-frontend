import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useGetProjectByOrg = (orgId: string) => {
	const projectAPI = new ProjectServiec()
	return useQuery(
		['projects', 'org', orgId],
		() => projectAPI.findByOrg(orgId),
		{
			onError: (err: any) => {
				toast.error(err?.response?.data?.message || 'Error')
			},
			refetchInterval: Infinity,
		}
	)
}
export default useGetProjectByOrg
