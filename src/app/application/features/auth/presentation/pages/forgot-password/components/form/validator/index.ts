import { zodResolver } from '@hookform/resolvers/zod';

import { FormForgotPasswordValidator } from './form-forgot-password-validator';
export const resolver = zodResolver(FormForgotPasswordValidator);
