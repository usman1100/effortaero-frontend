import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import OrgService from '../../api/org'

export default function useCreateNewOrg(info: {
	name: string
	slogan: string
}) {
	const orgAPI = new OrgService()
	const redirect = useNavigate()
	const queryClient = useQueryClient()

	return useMutation(() => orgAPI.create(info), {
		retry: false,

		onSuccess: async () => {
			toast.success('Created new organization')
			await queryClient.invalidateQueries(['orgs', 'created'])
			redirect('/dashboard/organization')
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})
}
