import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { RegisterDetails } from '../../api'
import AuthService from '../../api/auth'

const useRegister = (registerDetails: RegisterDetails) => {
	const authAPI = new AuthService()
	const redirect = useNavigate()

	return useMutation(() => authAPI.register(registerDetails), {
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
		onSuccess: () => {
			toast.success(`An email has been sent to ${registerDetails.email}`)
			redirect('/')
		},
	})
}

export default useRegister
