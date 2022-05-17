import BaseService from './base'

export default class EstimationService extends BaseService {
	private readonly prefix = `${this.baseURL}/estimations`

	ml = (id: string) => this.post(`${this.prefix}/${id}/ml`)

	getEstimations = (id: string, estType: string) =>
		this.get(`${this.prefix}/${id}/${estType}`)

	deleteOne = (id: string) => this.delete(`${this.prefix}/${id}`)
}
