import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { AddContributionDTO } from '../../api'
import EstimationService from '../../api/estimation.service'

const useAddContribution = (roundID: string, data: AddContributionDTO) => {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.addContirbution(roundID, data), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['delphi', roundID])
			toast.success('Contribution added')
		},
		onError: (error: any) => {
			toast.error(
				error?.response?.data?.message || 'Something went wrong'
			)
		},
	})
}

export default useAddContribution
