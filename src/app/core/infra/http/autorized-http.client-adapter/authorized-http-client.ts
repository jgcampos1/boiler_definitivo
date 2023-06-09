import { AUTH_STORAGE_TOKENS } from '~/app/application/features/auth/domain/entities/auth-tokens';
import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '~/app/core/application/protocols/http-client';

import { cacheStorage } from '../../cache';

export class AuthorizedHttpClient implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const tokenKey = AUTH_STORAGE_TOKENS.AUTH;
    const token = cacheStorage.get(tokenKey);
    if (token) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${token}`
        })
      });
    }
    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
