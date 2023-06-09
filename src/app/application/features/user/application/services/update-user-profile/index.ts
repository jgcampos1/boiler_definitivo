import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpAuthorizedClient } from '~/app/core/infra/http/autorized-http.client-adapter';

import { USER_API_ROUTES } from '../../api/routes';
import { UpdateUserProfile } from './update-user-profile';

export const updateUserProfileService: ServiceCommand<UpdateUserProfile.Response> =
  new UpdateUserProfile(httpAuthorizedClient, USER_API_ROUTES.PROFILE);

export type { UpdateUserProfile };
