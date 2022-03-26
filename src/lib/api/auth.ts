import { BaseService } from "./base";
import { LoginDetails } from "./types";

export class AuthService extends BaseService {
  private prefix = `${this.baseURL}/auth`;

  login = (loginDetails: LoginDetails) => {
    try {
      this.post(`${this.prefix}/login`, loginDetails);
    } catch (error) {
      throw error;
    }
  };
}
