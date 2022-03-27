import { BaseService } from './base';
import { LoginDetails, RegisterDetails } from './types';

export class AuthService extends BaseService {
	private prefix = `${this.baseURL}/auth`;

	login = async (loginDetails: LoginDetails) => {
		try {
			return this.post(`${this.prefix}/login`, loginDetails);
		} catch (error: any) {
			throw error?.response?.data;
		}
	};

	register = async (registerDetails: RegisterDetails) => {
		try {
			return this.post(`${this.prefix}/register`, {
				...registerDetails,
				password: registerDetails.newPassword,
			});
		} catch (error: any) {
			throw error?.response?.data;
		}
	};
}
