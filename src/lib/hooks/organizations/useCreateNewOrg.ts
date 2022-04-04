import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import OrgService from '../../api/org'
import useCreatedOrgs from './useCreatedOrgs'

export default function useCreateNewOrg(name: string) {
	const orgAPI = new OrgService()

	const { refetch } = useCreatedOrgs()

	return useMutation(() => orgAPI.create(name), {
		retry: false,

		onSuccess: () => {
			toast.success('Created new organization')
			refetch()
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})
}
