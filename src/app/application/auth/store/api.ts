import {
  emailLoginService,
  tokenLogoutService,
  resetPasswordService,
  registerService,
  confirmationTokenService,
  sendConfirmationService,
  type EmailLogin,
  type TokenLogout,
  type PasswordReset,
  type Register,
  type ConfirmationToken,
  type SendConfirmationEmail,
  type RecoveryPassword,
  recoveryPasswordService
} from '~/app/application/auth/services';
import { apiSlice } from '~/app/core/store/apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<Register.Response, Register.Params>({
      query: (params) => ({
        service: registerService,
        params
      })
    }),
    emailLogin: builder.mutation<EmailLogin.Response, EmailLogin.Params>({
      query: (params) => ({
        service: emailLoginService,
        params
      })
    }),
    confirmationToken: builder.mutation<
      ConfirmationToken.Response,
      ConfirmationToken.Params
    >({
      query: (params) => ({
        service: confirmationTokenService,
        params
      })
    }),
    sendConfirmationEmail: builder.mutation<
      SendConfirmationEmail.Response,
      SendConfirmationEmail.Params
    >({
      query: (params) => ({
        service: sendConfirmationService,
        params
      })
    }),
    recoveryPassword: builder.mutation<
      RecoveryPassword.Response,
      RecoveryPassword.Params
    >({
      query: (params) => ({
        service: recoveryPasswordService,
        params
      })
    }),
    tokenLogout: builder.mutation<TokenLogout.Response, TokenLogout.Params>({
      query: (params) => ({
        service: tokenLogoutService,
        params
      })
    }),
    resetPassword: builder.mutation<
      PasswordReset.Response,
      PasswordReset.Params
    >({
      query: (params) => ({
        service: resetPasswordService,
        params
      })
    })
  })
});
