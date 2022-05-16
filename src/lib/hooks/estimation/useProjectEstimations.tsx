import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useProjectEstimations = (projectId: string, estType: string) => {
	const estAPI = new EstimationService()
	return useQuery(
		['estimation', projectId, estType],
		() => estAPI.getEstimations(projectId, estType),
		{}
	)
}

export default useProjectEstimations
