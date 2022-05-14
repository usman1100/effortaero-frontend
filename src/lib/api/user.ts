import BaseService from './base'
import { UpdateUserDetails } from './types'

export default class UserService extends BaseService {
	private prefix = `${this.baseURL}/users`

	me = () => this.get(`${this.prefix}/me`)

	update = (data: UpdateUserDetails) => this.put(`${this.prefix}/me`, data)

	search = (params: UpdateUserDetails) => this.get(`${this.prefix}/`, params)
}
