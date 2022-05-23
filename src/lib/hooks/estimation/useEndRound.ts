import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useEndRound = (roundID: string, projectID: string) => {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.endRound(roundID), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['delphi', projectID])
			await queryClient.invalidateQueries(['delphi', roundID])
			toast.success('Round Ended')
		},
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Error ending round')
		},
	})
}

export default useEndRound
