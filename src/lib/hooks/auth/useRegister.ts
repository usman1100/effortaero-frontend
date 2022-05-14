import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { RegisterDetails } from '../../api'
import AuthService from '../../api/auth'
import AuthStore from '../../state/authStore'

const useRegister = (registerDetails: RegisterDetails) => {
	const authAPI = new AuthService()
	const login = AuthStore(state => state.login)
	const redirect = useNavigate()

	return useMutation(() => authAPI.register(registerDetails), {
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
		onSuccess: (data: any) => {
			const info = data.data.data
			login(info.token, info.user.role)
			toast.success('Login Successful')
			redirect('/dashboard/organization')
		},
	})
}

export default useRegister
