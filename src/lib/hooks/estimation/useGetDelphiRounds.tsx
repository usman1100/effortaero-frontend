import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useGetDelphiRounds = (projectID: string) => {
	const estAPI = new EstimationService()

	return useQuery(
		['delphi', projectID],
		() => estAPI.getDelphiRound(projectID),
		{}
	)
}

export default useGetDelphiRounds
