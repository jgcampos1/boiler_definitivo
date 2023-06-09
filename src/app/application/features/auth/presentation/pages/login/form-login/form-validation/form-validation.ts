import * as z from 'zod';

export const LoginFormValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Deve ser um Email válido' })
    .min(1, { message: 'Campo obrigatorio' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
    .max(50)
});
