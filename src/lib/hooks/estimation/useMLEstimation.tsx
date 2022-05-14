import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'

export default function useMLEstimation(id: string) {
	const estAPI = new EstimationService()
	return useQuery(['estimation', 'ml', id], () => estAPI.ml(id), {
		enabled: false,
	})
}
