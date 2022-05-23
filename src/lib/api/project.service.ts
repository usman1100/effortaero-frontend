import { projectInfo } from '../hooks/projects/useCreateProject'
import BaseService from './base'

export default class ProjectServiec extends BaseService {
	private readonly prefix = `${this.baseURL}/projects`

	createdProjects = () => this.get(`${this.prefix}`)

	create = (info: projectInfo) => this.post(`${this.prefix}`, info)

	deleteOne = (id: string): any => this.delete(`${this.prefix}/${id}`)

	getOne = (id: string): any => this.get(`${this.prefix}/${id}`)

	updateOne = (id: string, info: projectInfo): any =>
		this.put(`${this.prefix}/${id}`, info)

	findByOrg = (orgId: string): any => this.get(`${this.prefix}/org/${orgId}`)
}
