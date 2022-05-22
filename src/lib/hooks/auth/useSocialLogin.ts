import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { SocialLoginDetails } from '../../api'
import AuthService from '../../api/auth'
import AuthStore from '../../state/authStore'

const useSocialLogin = (info: SocialLoginDetails) => {
	const authAPI = new AuthService()
	const login = AuthStore(state => state.login)
	const redirect = useNavigate()

	return useMutation(() => authAPI.socialLogin(info), {
		onSuccess: data => {
			const response = data.data.data
			login(response.token, response.user.role)
			toast.success('Login Successful')
			redirect('/dashboard/profile')
		},
	})
}

export default useSocialLogin
