import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import AuthService from '../../api/auth'

const useForgetPassword = (email: string) => {
	const authAPI = new AuthService()
	return useMutation(() => authAPI.forgetPassword(email), {
		onSuccess: () => {
			toast.success('Password reset email sent')
		},
		onError: (err: any) => {
			toast.error(err?.response?.data?.message || 'Something went wrong')
		},
	})
}

export default useForgetPassword
