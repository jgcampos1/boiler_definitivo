import { HttpClient } from '~/app/core/application/protocols/http-client';

import { AxiosHttpClientAdapter } from './axios-http-client-adapter';

export const httpClient: HttpClient = new AxiosHttpClientAdapter();
