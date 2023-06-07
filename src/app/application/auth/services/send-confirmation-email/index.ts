import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { SendConfirmationEmail } from './send-confirmation-emai';

export const sendConfirmationService: ServiceCommand<SendConfirmationEmail.Response> =
  new SendConfirmationEmail(
    httpClient,
    AUTH_API_ROUTES.SEND_EMAIL_CONFIRMATION
  );

export type { SendConfirmationEmail };
