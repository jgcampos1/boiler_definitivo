import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { RecoveryPassword } from './recovery-password';

export const recoveryPasswordService: ServiceCommand<RecoveryPassword.Response> =
  new RecoveryPassword(httpClient, AUTH_API_ROUTES.REQUEST_RESET_PASSWORD);

export type { RecoveryPassword };
