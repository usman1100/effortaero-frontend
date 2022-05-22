import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useCreateDelphiRounds = (projectID: string) => {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()

	return useMutation(() => estAPI.createDelphiRound(projectID), {
		onSuccess: async () => {
			await queryClient.invalidateQueries([
				'delphi',
				'project',
				projectID,
			])
			toast.success('Round Created')
		},
		onError: (error: any) => {
			toast.error(
				error?.response?.data?.message || 'Something went wrong'
			)
		},
	})
}

export default useCreateDelphiRounds
