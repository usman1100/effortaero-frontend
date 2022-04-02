import BaseService from './base'

export default class OrgService extends BaseService {
	private prefix = `${this.baseURL}/organizations`

	my = () => this.get(`${this.prefix}/my`)
}
