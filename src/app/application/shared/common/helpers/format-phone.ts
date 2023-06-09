import { formatToPhone } from 'brazilian-values';

export const formatPhone = (phone: string): string => {
  if (!phone) return phone;
  return formatToPhone(phone);
};
