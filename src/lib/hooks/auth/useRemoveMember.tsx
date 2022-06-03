import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import OrgService from '../../api/org'

const useRemoveMember = (memeberID: string) => {
	const orgAPI = new OrgService()
	return useMutation(() => orgAPI.removeMember(memeberID), {
		onSuccess: () => {
			toast.success('Member removed successfully')
		},
		onError: () => {
			toast.error('Error removing member')
		},
	})
}

export default useRemoveMember
