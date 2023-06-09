import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { BaseService } from '~/app/core/services/base.service';

export const resetPasswordService: ServiceCommand<PasswordReset.Response> =
  new BaseService<PasswordReset.Params, PasswordReset.Response>(
    AUTH_API_ROUTES.RESET_PASSWORD,
    HttpMethod.POST
  );

export namespace PasswordReset {
  export type Params = {
    token: string;
    password: string;
  };

  export type Response = void;
}
