import { EstimationEnum } from '../hooks/estimation/useCreateEstimation'
import BaseService from './base'
import { AddContributionDTO } from './types'

export default class EstimationService extends BaseService {
	private readonly prefix = `${this.baseURL}/estimations`

	createOne = (id: string, estType: EstimationEnum) =>
		this.post(`${this.prefix}/${id}/${estType}`)

	getEstimations = (id: string, estType: EstimationEnum) =>
		this.get(`${this.prefix}/${id}/${estType}`)

	deleteOne = (id: string) => this.delete(`${this.prefix}/${id}`)

	getProjectDelphiRounds = (projectID: string) =>
		this.get(`${this.prefix}/delphi/project/${projectID}`)

	getDelphiRound = (id: string) =>
		this.get(`${this.prefix}/delphi/round/${id}`)

	createDelphiRound = (projectID: string) =>
		this.post(`${this.prefix}/delphi/`, { projectID })

	endRound = (projectID: string) =>
		this.post(`${this.prefix}/delphi/${projectID}/end`)

	addContirbution = (roundID: string, contribution: AddContributionDTO) =>
		this.put(`${this.prefix}/delphi/${roundID}`, contribution)
}
