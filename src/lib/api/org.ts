import BaseService from './base'

export default class OrgService extends BaseService {
	private prefix = `${this.baseURL}/organizations`

	my = () => this.get(`${this.prefix}/my`)

	create = (info: any) => this.post(`${this.prefix}/create`, info)

	createdOrgs = () => this.get(`${this.prefix}/created-orgs`)

	joinedOrgs = () => this.get(`${this.prefix}/joined`)

	getOne = (id: string) => this.get(`${this.prefix}/${id}`)

	addMember = (orgID: string, userID: string) =>
		this.post(`${this.prefix}/${orgID}/member`, { userID })

	removeMember = (memberID: string) =>
		this.delete(`${this.prefix}/member/${memberID}`)
}
