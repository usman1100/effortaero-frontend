import { useQuery } from 'react-query'
import { SearchUsersType } from '../../api'
import UserService from '../../api/user'

const useSearchUsers = (params: SearchUsersType) => {
	const userAPI = new UserService()
	return useQuery(['users'], () => userAPI.search(params), {
		enabled: false,
		refetchOnWindowFocus: false,
	})
}
export default useSearchUsers
