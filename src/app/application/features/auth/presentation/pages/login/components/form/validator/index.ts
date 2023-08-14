import { zodResolver } from '@hookform/resolvers/zod';

import { FormLoginValidator } from './form-login-validator';
export const resolver = zodResolver(FormLoginValidator);
