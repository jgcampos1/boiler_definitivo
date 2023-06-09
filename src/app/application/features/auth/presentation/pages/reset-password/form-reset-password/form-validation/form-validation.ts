import * as z from 'zod';

export const ResetPasswordFormValidation = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
  });
