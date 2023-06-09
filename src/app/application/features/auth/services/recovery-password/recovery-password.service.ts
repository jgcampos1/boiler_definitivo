import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { BaseService } from '~/app/core/services/base.service';

export const recoveryPasswordService: ServiceCommand<RecoveryPassword.Response> =
  new BaseService<RecoveryPassword.Params, RecoveryPassword.Response>(
    AUTH_API_ROUTES.REQUEST_RESET_PASSWORD,
    HttpMethod.POST
  );

export namespace RecoveryPassword {
  export type Params = { email: string };

  export type Response = { success: boolean };
}
