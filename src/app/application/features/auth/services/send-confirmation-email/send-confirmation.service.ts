import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { BaseService } from '~/app/core/services/base.service';

export const sendConfirmationService: ServiceCommand<SendConfirmationEmail.Response> =
  new BaseService<SendConfirmationEmail.Params, SendConfirmationEmail.Response>(
    AUTH_API_ROUTES.SEND_EMAIL_CONFIRMATION,
    HttpMethod.POST
  );
export namespace SendConfirmationEmail {
  export type Params = { email: string };

  export type Response = { success: boolean };
}
