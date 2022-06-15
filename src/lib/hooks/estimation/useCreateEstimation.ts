import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'

export enum EstimationEnum {
	ML = 'ml',
	UCP = 'ucp',
	DELPHI = 'delphi',
	ENSEMBLE = 'ensemble',
}

export default function useCreateEstimation(
	id: string,
	estimationType: EstimationEnum
) {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.createOne(id, estimationType), {
		onSuccess: async () => {
			await queryClient.invalidateQueries([
				'estimation',
				id,
				estimationType,
			])
			toast.success('Estimation done!')
		},
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Error')
		},
	})
}
