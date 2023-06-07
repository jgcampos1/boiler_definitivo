import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { PasswordReset } from './password-reset';

export const resetPasswordService: ServiceCommand<PasswordReset.Response> =
  new PasswordReset(httpClient, AUTH_API_ROUTES.RESET_PASSWORD);

export type { PasswordReset };
