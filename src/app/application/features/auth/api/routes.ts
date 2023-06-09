import { makeApiUrl } from '~/app/application//shared/hooks/make-api-url';

export const AUTH_API_ROUTES = {
  REGISTER: makeApiUrl('users'),
  LOGIN: makeApiUrl('account/login'),
  LOGOUT: makeApiUrl('logout'),
  RESET_PASSWORD: makeApiUrl('account/reset-password'),
  CONFIRMATION_TOKEN: makeApiUrl('account/confirm-account'),
  SEND_EMAIL_CONFIRMATION: makeApiUrl('account/send-email-confirmation'),
  REQUEST_RESET_PASSWORD: makeApiUrl('account/request-reset-password')
};
