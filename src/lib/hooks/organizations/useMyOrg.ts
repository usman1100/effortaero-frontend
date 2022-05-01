import { useQuery } from 'react-query'
import OrgService from '../../api/org'

export default function useMyOrgs() {
	const orgAPI = new OrgService()

	return useQuery<any, any>(['orgs', 'my'], () => orgAPI.my(), {})
}
