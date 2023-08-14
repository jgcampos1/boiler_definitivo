import * as z from 'zod';

export const FormResetPasswordValidator = z
  .object({
    password: z
      .string()
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(value),
        {
          message: 'validator.passwordInvalid'
        }
      ),

    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'validator.missMatchField',
    path: ['confirmPassword']
  });
