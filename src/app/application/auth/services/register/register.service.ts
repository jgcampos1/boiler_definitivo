import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { ServiceCommand } from '~/app/core/domain/command/service-command';
import { BaseService } from '~/app/core/services/base.service';

import { RegisterForm } from '../../domain/models/register-models';

export const registerService: ServiceCommand<Register.Response> =
  new BaseService<Register.Params, Register.Response>(
    AUTH_API_ROUTES.REGISTER,
    HttpMethod.POST
  );

export namespace Register {
  export type Params = Omit<RegisterForm, 'passwordConfirmation'>;

  export type Response = void;
}
