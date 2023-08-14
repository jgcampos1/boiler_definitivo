import { zodResolver } from '@hookform/resolvers/zod';

import { FormResetPasswordValidator } from './form-reset-password-validator';
export const resolver = zodResolver(FormResetPasswordValidator);
export * from './type';
