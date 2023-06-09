import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { BaseService } from '~/app/core/services/base.service';

export const confirmationTokenService: ServiceCommand<ConfirmationToken.Response> =
  new BaseService<ConfirmationToken.Params, ConfirmationToken.Response>(
    AUTH_API_ROUTES.CONFIRMATION_TOKEN,
    HttpMethod.POST
  );

export namespace ConfirmationToken {
  export type Params = {
    token: string;
  };
  export type Response = {
    success: boolean;
  };
}
