import { AUTH_API_ROUTES } from '~/app/application/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter/';

import { Register } from './register';

export const registerService: ServiceCommand<Register.Response> = new Register(
  httpClient,
  AUTH_API_ROUTES.REGISTER
);

export type { Register };
