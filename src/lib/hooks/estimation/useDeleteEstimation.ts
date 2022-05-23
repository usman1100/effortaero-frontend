import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useDeleteEstimation = (id: string, projectID: string) => {
	const estAPI = new EstimationService()
	const queryClient = useQueryClient()
	return useMutation(() => estAPI.deleteOne(id), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['estimation', projectID, 'ml'])
			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				'delphi',
			])
			await queryClient.invalidateQueries([
				'estimation',
				projectID,
				'ucp',
			])
			toast.success('Deleted successfully!')
		},
	})
}
export default useDeleteEstimation
