import * as z from 'zod';
import { passwordRegex } from '~/app/application/shared/common/constants/password-reges';

export const RegisterUserFormValidation = z
  .object({
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
    newPassword: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
      .regex(passwordRegex, {
        message: 'A senha deve ter letras maiúsculas, minúsculas e números.'
      }),
    newPasswordConfirmation: z.string().min(8)
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
  });
