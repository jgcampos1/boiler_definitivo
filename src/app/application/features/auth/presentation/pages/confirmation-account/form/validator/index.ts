import { zodResolver } from '@hookform/resolvers/zod';

import { FormConfirmAccountValidator } from './form-confirm-account-validator';
export const resolver = zodResolver(FormConfirmAccountValidator);
export * from './type';
