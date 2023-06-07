import { makeApiUrl } from '~/app/presentation/hooks/make-api-url';

export const USER_API_ROUTES = {
  REGISTER: makeApiUrl('register'),
  PROFILE: makeApiUrl('account/profile'),
  UPDATE_PASSWORD: makeApiUrl('account/update-password')
};
