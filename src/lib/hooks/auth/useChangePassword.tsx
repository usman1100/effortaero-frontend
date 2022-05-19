import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { ChangePasswordDTO } from '../../api'
import AuthService from '../../api/auth'

const useChangePassword = (info: ChangePasswordDTO) => {
	const authAPI = new AuthService()

	return useMutation(() => authAPI.changePassword(info), {
		onSuccess: () => {
			toast.success('Password updated successfully')
		},
		onError: (error: any) => {
			toast.error(
				error?.response?.data?.message || 'Something went wrong'
			)
		},
	})
}

export default useChangePassword
