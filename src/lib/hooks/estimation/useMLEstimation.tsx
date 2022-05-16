import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'

export default function useMLEstimation(id: string) {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.ml(id), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['estimation', id, 'ml'])
			toast.success('Estimation done!')
		},
	})
}
