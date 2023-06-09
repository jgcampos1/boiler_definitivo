import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { cacheStorage } from '~/app/core/infra/cache';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { AUTH_STORAGE_TOKENS } from '../../domain/entities/auth-tokens';
import { TokenLogout } from './token-logout';

export const tokenLogoutService: ServiceCommand<TokenLogout.Response> =
  new TokenLogout(
    httpClient,
    cacheStorage,
    AUTH_STORAGE_TOKENS.AUTH,
    AUTH_API_ROUTES.LOGOUT
  );

export type { TokenLogout };
