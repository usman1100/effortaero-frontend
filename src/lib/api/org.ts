import BaseService from './base'

export default class OrgService extends BaseService {
	private prefix = `${this.baseURL}/organizations`

	my = () => this.get(`${this.prefix}/my`)

	create = (name: string) => this.post(`${this.prefix}/create`, { name })

	createdOrgs = () => this.get(`${this.prefix}/created-orgs`)
}
