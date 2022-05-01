import { useQuery } from 'react-query'
import UserService from '../../api/user'

export default function useMyDetails() {
	const userService = new UserService()

	return useQuery<any, any>(['user', 'my'], () => userService.me())
}
