import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { cacheStorage } from '~/app/core/infra/cache';
import { httpAuthorizedClient } from '~/app/core/infra/http/autorized-http.client-adapter';

import { USER_STORAGE_TOKENS } from '../../../domain/entities/user-tokens';
import { USER_API_ROUTES } from '../../api/routes';
import { GetUserProfile } from './get-user-profile';

export const getUserProfileService: ServiceCommand<GetUserProfile.Response> =
  new GetUserProfile(
    httpAuthorizedClient,
    USER_API_ROUTES.PROFILE,
    cacheStorage,
    USER_STORAGE_TOKENS.USER_INFO
  );

export type { GetUserProfile };
