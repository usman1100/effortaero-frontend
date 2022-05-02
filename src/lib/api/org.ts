import BaseService from './base'

export default class OrgService extends BaseService {
	private prefix = `${this.baseURL}/organizations`

	my = () => this.get(`${this.prefix}/my`)

	create = (info: any) => this.post(`${this.prefix}/create`, info)

	createdOrgs = () => this.get(`${this.prefix}/created-orgs`)

	getOne = (id: string) => this.get(`${this.prefix}/${id}`)
}
