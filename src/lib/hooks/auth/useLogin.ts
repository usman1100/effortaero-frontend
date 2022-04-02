import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LoginDetails } from '../../api'
import AuthService from '../../api/auth'

export default function useLogin(loginInfo: LoginDetails) {
	const redirect = useNavigate()
	const authAPI = new AuthService()

	return useQuery('login', () => authAPI.login(loginInfo), {
		enabled: false,
		refetchInterval: Infinity,
		retry: false,
		onError: (err: any) => {
			toast.error(err?.response?.data?.message || 'An error has occurred')
		},
		onSuccess: (data: any) => {
			localStorage.setItem('token', data.token)
			toast.success('Login Successful')
			redirect('/dashboard/organization')
		},
	})
}
