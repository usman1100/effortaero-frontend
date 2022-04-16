import BaseService from './base'

export default class ProjectServiec extends BaseService {
	private readonly prefix = `${this.baseURL}/projects`

	createdProjects = () => this.get(`${this.prefix}`)
}
