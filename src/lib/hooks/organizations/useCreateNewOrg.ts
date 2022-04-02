import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import OrgService from '../../api/org'
import useCreatedOrgs from './useCreatedOrgs'

export default function useCreateNewOrg(name: string) {
	const orgAPI = new OrgService()

	return useQuery(['org', 'new'], () => orgAPI.create(name), {
		enabled: false,
		refetchInterval: Infinity,
		retry: false,

		onSuccess: () => {
			toast.success('Created new organization')
			useCreatedOrgs()
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})
}
