import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useGetOneDelphiRound = (roundId: string) => {
	const estAPI = new EstimationService()
	return useQuery(
		['delphi', roundId],
		() => estAPI.getDelphiRound(roundId),
		{}
	)
}

export default useGetOneDelphiRound
