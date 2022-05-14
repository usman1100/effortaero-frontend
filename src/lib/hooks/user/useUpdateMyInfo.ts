import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { UpdateUserDetails } from '../../api'
import UserService from '../../api/user'

const useUpdateMyInfo = (info: UpdateUserDetails) => {
	const userAPI = new UserService()
	const queryClient = useQueryClient()

	return useMutation(() => userAPI.update(info), {
		onSuccess: () => {
			queryClient.invalidateQueries(['user', 'my']).then(() => {
				toast.success('Updated successfully')
			})
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message || 'An error has occurred')
		},
	})
}

export default useUpdateMyInfo
