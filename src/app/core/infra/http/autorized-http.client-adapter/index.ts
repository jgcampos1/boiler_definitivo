import { HttpClient } from '~/app/core/application/protocols/http-client';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter/';

import { AuthorizedHttpClient } from './authorized-http-client';

export const httpAuthorizedClient: HttpClient = new AuthorizedHttpClient(
  httpClient
);
