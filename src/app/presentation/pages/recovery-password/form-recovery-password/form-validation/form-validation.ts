import * as z from 'zod';

export const FormRecoveryPasswordValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Deve ser um Email válido' })
    .min(1, { message: 'Campo obrigatorio' })
});
