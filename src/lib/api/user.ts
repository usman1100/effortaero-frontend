import BaseService from './base'

export default class UserService extends BaseService {
	private prefix = `${this.baseURL}/users`

	me = () => this.get(`${this.prefix}/me`)
}
