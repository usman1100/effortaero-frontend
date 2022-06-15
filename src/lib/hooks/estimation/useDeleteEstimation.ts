import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'
import { EstimationEnum } from './useCreateEstimation'

const useDeleteEstimation = (id: string, projectID: string) => {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.deleteOne(id), {
		onSuccess: async () => {
			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				EstimationEnum.ML,
			])
			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				EstimationEnum.DELPHI,
			])
			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				EstimationEnum.UCP,
			])

			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				EstimationEnum.ENSEMBLE,
			])
			toast.success('Deleted successfully!')
		},
	})
}
export default useDeleteEstimation
