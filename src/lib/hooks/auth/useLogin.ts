import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LoginDetails } from '../../api'
import AuthService from '../../api/auth'
import AuthStore from '../../state/authStore'

export default function useLogin(loginInfo: LoginDetails) {
	const redirect = useNavigate()
	const authAPI = new AuthService()

	const login = AuthStore(state => state.login)

	return useMutation(() => authAPI.login(loginInfo), {
		retry: false,
		onError: (err: any) => {
			toast.error(err?.response?.data?.message || 'An error has occurred')
		},
		onSuccess: (data: any) => {
			const info = data.data.data
			login(info.token, info.user.role)
			toast.success('Login Successful')
			if (info.user.role === 'owner') {
				redirect('/dashboard/organization')
			} else redirect('/dashboard/profile')
		},
	})
}
