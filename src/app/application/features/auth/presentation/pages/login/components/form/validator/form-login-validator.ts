import * as z from 'zod';

export const FormLoginValidator = z.object({
  email: z
    .string()
    .min(1, { message: 'validator.requiredField' })
    .email({ message: 'validator.invalidEmail' }),
  password: z.string().min(1, { message: 'validator.requiredField' })
});
