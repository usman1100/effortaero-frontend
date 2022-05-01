import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useDeleteProject = (id: string) => {
	const projectAPI = new ProjectServiec()
	const queryClient = useQueryClient()

	return useMutation(() => projectAPI.deleteOne(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(['projects', 'created']).then(() => {
				toast.success('Project deleted')
			})
		},
		onError: error => {
			console.log(error)
		},
	})
}

export default useDeleteProject
