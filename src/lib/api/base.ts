import axios from 'axios'
import getAuthStore from '../state/authStore'

export default class BaseService {
	token = getAuthStore(state => state.token)

	constructor() {
		axios.defaults.headers.common = {
			Authorization: `Bearer ${this.token}`,
		}
	}

	protected baseURL = 'http://localhost:3000/api'

	protected get = (url: string, params?: any) =>
		axios.get(url, {
			params,
		})

	protected post = (url: string, data?: object) => axios.post(url, data)

	protected put = (url: string, data: object) => axios.put(url, data)

	protected delete = (url: string) => axios.delete(url)
}
