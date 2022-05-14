import BaseService from './base'

export default class EstimationService extends BaseService {
	private readonly prefix = `${this.baseURL}/estimations`

	ml = (id: string) => this.get(`${this.prefix}/${id}/ml`)
}
