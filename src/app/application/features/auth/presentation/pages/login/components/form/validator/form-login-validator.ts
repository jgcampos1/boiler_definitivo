import * as z from 'zod';

export const FormLoginValidator = z.object({
  email: z.string().email({ message: 'validator.invalidEmail' }),
  password: z.string().min(1, { message: 'validator.requiredField' })
});
