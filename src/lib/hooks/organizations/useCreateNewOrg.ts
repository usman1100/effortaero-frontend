import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import OrgService from '../../api/org'

export default function useCreateNewOrg(name: string) {
	const orgAPI = new OrgService()

	const queryClient = useQueryClient()

	return useMutation(() => orgAPI.create(name), {
		retry: false,

		onSuccess: () => {
			toast.success('Created new organization')
			queryClient.invalidateQueries(['orgs', 'created'])
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})
}
