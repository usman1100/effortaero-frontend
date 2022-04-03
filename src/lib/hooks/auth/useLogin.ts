import axios from 'axios'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LoginDetails } from '../../api'
import AuthService from '../../api/auth'
import AuthStore from '../../state/authStore'

export default function useLogin(loginInfo: LoginDetails) {
	const redirect = useNavigate()
	const authAPI = new AuthService()

	const login = AuthStore(state => state.login)

	return useQuery('login', () => authAPI.login(loginInfo), {
		enabled: false,
		refetchInterval: Infinity,
		retry: false,
		onError: (err: any) => {
			toast.error(err?.response?.data?.message || 'An error has occurred')
		},
		onSuccess: (data: any) => {
			const info = data.data.data
			login(info.token, info.user.role)
			toast.success('Login Successful')
			redirect('/dashboard/organization')
		},
	})
}
