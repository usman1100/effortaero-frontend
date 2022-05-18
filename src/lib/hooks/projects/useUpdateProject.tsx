import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import ProjectServiec from '../../api/project.service'

const useUpdateProject = (projectId: string, info: any) => {
	const projectAPI = new ProjectServiec()
	return useMutation(() => projectAPI.updateOne(projectId, info), {
		onSuccess: () => {
			toast.success('Project updated successfully')
		},
		onError: error => {
			console.log(error)
		},
	})
}

export default useUpdateProject
