import { authApi } from './api';

export const {
  useEmailLoginMutation,
  useConfirmationTokenMutation,
  useSendConfirmationEmailMutation,
  useRecoveryPasswordMutation,
  useResetPasswordMutation
} = authApi;
