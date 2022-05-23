import BaseService from './base'
import {
	ChangePasswordDTO,
	LoginDetails,
	RegisterDetails,
	SocialLoginDetails,
} from './types'

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

	socialLogin = (info: SocialLoginDetails) =>
		this.post(`${this.prefix}/social-login`, info)

	changePassword = (info: ChangePasswordDTO) =>
		this.post(`${this.prefix}/change-password`, info)

	forgetPassword = (email: string) =>
		this.post(`${this.prefix}/forget-password`, { email })
}
