import * as z from 'zod';

export const FormForgotPasswordValidator = z.object({
  email: z
    .string()
    .min(1, { message: 'validator.requiredField' })
    .email({ message: 'validator.invalidEmail' })
});
