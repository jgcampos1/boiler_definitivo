import axios, { type AxiosInstance } from 'axios';
import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpError
} from '~/app/core/application/protocols';
import { APP_ENV } from '~/env';

export class AxiosHttpClientAdapter implements HttpClient {
  private readonly axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: APP_ENV.API_URL,
      timeout: 30000
    });
  }

  async request({
    method,
    url,
    body,
    headers,
    queryParams
  }: HttpRequest): Promise<HttpResponse> {
    try {
      const axiosResponse = await this.axiosInstance.request({
        url,
        data: body,
        headers,
        method,
        params: queryParams
      });
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      };
    } catch (error: any) {
      return {
        error: error.response?.data,
        statusCode: error.response?.status,
        message: error.response?.statusText
      } as HttpError;
    }
  }
}
