import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useUpdateProject = (projectId: string, info: any) => {
	const projectAPI = new ProjectServiec()
	const queryClient = useQueryClient()
	return useMutation(() => projectAPI.updateOne(projectId, info), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['projects', projectId])
			toast.success('Project updated successfully')
		},
		onError: error => {
			toast.error('Some error has occured, check logs')
			console.error(error)
		},
	})
}

export default useUpdateProject
