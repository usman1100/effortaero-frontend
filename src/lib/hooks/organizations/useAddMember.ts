import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import OrgService from '../../api/org'

const useAddMember = (organizationId: string, memberID: string) => {
	const orgAPI = new OrgService()

	const queryClient = useQueryClient()

	return useMutation(() => orgAPI.addMember(organizationId, memberID), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(['orgs', organizationId])
			toast.success('Member added successfully')
			await queryClient.resetQueries(['users'])
		},
		onError: (error: any) => {
			toast.error(
				error?.response?.data?.message || 'Something went wrong'
			)
		},
	})
}

export default useAddMember
