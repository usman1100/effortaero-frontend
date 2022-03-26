import axios from "axios";

export class BaseService {
  protected baseURL = "http://localhost:3000/api";

  protected get = (url: string) => axios.get(url);
  protected post = (url: string, data: object) => axios.post(url, data);
  protected put = (url: string, data: object) => axios.put(url, data);
  protected delete = (url: string) => axios.delete(url);
}
