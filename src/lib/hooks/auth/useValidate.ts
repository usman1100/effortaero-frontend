import { useQuery } from 'react-query'
import AuthService from '../../api/auth'

export default function useValidate() {
	const authAPI = new AuthService()

	return useQuery('validate', authAPI.validate, {
		refetchInterval: 1000 * 60 * 15,
		refetchOnWindowFocus: false,
		retry: 1,
	})
}
