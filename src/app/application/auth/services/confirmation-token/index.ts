import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { ConfirmationToken } from './confirmation-token';

export const confirmationTokenService: ServiceCommand<ConfirmationToken.Response> =
  new ConfirmationToken(httpClient, AUTH_API_ROUTES.CONFIRMATION_TOKEN);

export type { ConfirmationToken };
