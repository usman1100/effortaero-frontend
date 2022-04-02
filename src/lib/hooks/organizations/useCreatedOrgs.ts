import { useQuery } from 'react-query'
import OrgService from '../../api/org'

export default function useCreatedOrgs() {
	const orgAPI = new OrgService()

	return useQuery<any, any>(['orgs', 'created'], () => orgAPI.createdOrgs())
}
