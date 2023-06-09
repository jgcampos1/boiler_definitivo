import { formatToCEP } from 'brazilian-values';

export const formatCep = (cep: string): string => {
  if (!cep) return cep;
  return formatToCEP(cep);
};
