import { useQuery } from 'react-query'
import EstimationService from '../../api/estimation.service'

const useGetDelphiRounds = (projectID: string) => {
	const estAPI = new EstimationService()

	return useQuery(
		['delphi', 'project', projectID],
		() => estAPI.getProjectDelphiRounds(projectID),
		{}
	)
}

export default useGetDelphiRounds
