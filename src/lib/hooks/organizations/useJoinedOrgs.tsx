import { useQuery } from 'react-query'
import OrgService from '../../api/org'

const useJoinedOrgs = () => {
	const orgAPI = new OrgService()
	return useQuery(['orgs', 'joined'], () => orgAPI.joinedOrgs(), {})
}

export default useJoinedOrgs
