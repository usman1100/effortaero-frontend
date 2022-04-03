import BaseService from './base'
import { LoginDetails, RegisterDetails } from './types'

export default class AuthService extends BaseService {
	private prefix = `${this.baseURL}/auth`

	validate = () => this.get(`${this.prefix}`)

	login = (loginDetails: LoginDetails) => {
		try {
			return this.post(`${this.prefix}/login`, loginDetails)
		} catch (error: any) {
			throw error?.response?.data
		}
	}

	register = (registerDetails: RegisterDetails) => {
		try {
			return this.post(`${this.prefix}/register`, {
				...registerDetails,
				password: registerDetails.newPassword,
			})
		} catch (error: any) {
			throw error?.response?.data
		}
	}
}
