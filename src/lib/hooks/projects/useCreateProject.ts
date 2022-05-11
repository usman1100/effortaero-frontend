import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Actor, UseCase } from '../../../pages/NewProject'
import ProjectServiec from '../../api/project.service'

export interface projectInfo {
	name: string
	orgID: string
	actors: Actor[]
	useCases: UseCase[]
	environmentalFactors: object
	technicalFactors: object
}

const useCreateProject = (info: projectInfo) => {
	const projectAPI = new ProjectServiec()
	const redirect = useNavigate()

	return useMutation(() => projectAPI.create(info), {
		onSuccess: () => {
			redirect('/dashboard/projects')
		},
		onError: (error: Error) => {
			toast.error(error?.message || 'Error in creating project')
		},
	})
}

export default useCreateProject
