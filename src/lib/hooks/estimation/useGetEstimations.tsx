import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'
import { EstimationEnum } from './useCreateEstimation'

const useGetEstimations = (projectId: string, estType: EstimationEnum) => {
	const estAPI = new EstimationService()
	return useQuery(
		['estimation', projectId, estType],
		() => estAPI.getEstimations(projectId, estType),
		{}
	)
}

export default useGetEstimations
