import { BaseService } from "./base";
import { LoginDetails } from "./types";

export class AuthService extends BaseService {
  private prefix = `${this.baseURL}/auth`;

  login = async (loginDetails: LoginDetails) => {
    try {
      return this.post(`${this.prefix}/login`, loginDetails);
    } catch (error:any) {
      throw error?.response?.data;
    }
  };
}
