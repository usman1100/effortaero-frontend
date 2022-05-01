import { useQuery } from 'react-query'
import OrgService from '../../api/org'

const useGetOrgInfo = (id: string) => {
	const orgAPI = new OrgService()
	return useQuery(['orgs', id], () => orgAPI.getOne(id))
}

export default useGetOrgInfo
