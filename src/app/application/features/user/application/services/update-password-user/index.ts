import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpAuthorizedClient } from '~/app/core/infra/http/autorized-http.client-adapter';

import { USER_API_ROUTES } from '../../api/routes';
import { UpdatePasswordUser } from './update-password-user';

export const updatePasswordUserService: ServiceCommand<UpdatePasswordUser.Response> =
  new UpdatePasswordUser(httpAuthorizedClient, USER_API_ROUTES.UPDATE_PASSWORD);

export type { UpdatePasswordUser };
