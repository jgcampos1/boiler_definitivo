import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { AUTH_STORAGE_TOKENS } from '~/app/application/features/auth/domain/entities/auth-tokens';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { cacheStorage } from '~/app/core/infra/cache';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { EmailLogin } from './email-login.service';

export const emailLoginService: ServiceCommand<EmailLogin.Response> =
  new EmailLogin(
    httpClient,
    cacheStorage,
    AUTH_STORAGE_TOKENS.AUTH,
    AUTH_API_ROUTES.LOGIN
  );

export type { EmailLogin };
