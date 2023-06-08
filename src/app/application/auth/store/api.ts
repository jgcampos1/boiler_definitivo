import { apiSlice } from '~/app/core/store/apiSlice';

import {
  ConfirmationToken,
  confirmationTokenService
} from '../services/confirmation-token';
import { EmailLogin, emailLoginService } from '../services/email-login';
import {
  PasswordReset,
  resetPasswordService
} from '../services/password-reset';
import {
  RecoveryPassword,
  recoveryPasswordService
} from '../services/recovery-password';
import { Register, registerService } from '../services/register';
import {
  SendConfirmationEmail,
  sendConfirmationService
} from '../services/send-confirmation-email';
import { TokenLogout, tokenLogoutService } from '../services/token-logout';

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
