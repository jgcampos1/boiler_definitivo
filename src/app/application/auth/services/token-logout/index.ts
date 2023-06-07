import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { AUTH_STORAGE_TOKENS } from '~/app/application/auth/domain/entities';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { cacheStorage } from '~/app/core/infra';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { TokenLogout } from './token-logout';

export const tokenLogoutService: ServiceCommand<TokenLogout.Response> =
  new TokenLogout(
    httpClient,
    cacheStorage,
    AUTH_STORAGE_TOKENS.AUTH,
    AUTH_API_ROUTES.LOGOUT
  );

export type { TokenLogout };
