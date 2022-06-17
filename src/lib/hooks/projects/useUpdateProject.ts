import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useUpdateProject = (projectId: string, info: any) => {
	const projectAPI = new ProjectServiec()
	const queryClient = useQueryClient()
	return useMutation(() => projectAPI.updateOne(projectId, info), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['project', projectId])
			toast.success('Project updated successfully')
		},
		onError: () => {
			toast.error('Some error has occured, check logs')
		},
	})
}

export default useUpdateProject
