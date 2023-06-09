import { authApi } from './api';

export const {
  useRegisterMutation,
  useEmailLoginMutation,
  useConfirmationTokenMutation,
  useSendConfirmationEmailMutation,
  useRecoveryPasswordMutation,
  useResetPasswordMutation
} = authApi;
