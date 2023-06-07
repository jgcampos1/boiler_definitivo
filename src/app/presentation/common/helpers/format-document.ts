import { formatToCNPJ, formatToCPF } from 'brazilian-values';

export const formatDocument = (document: string): string => {
  if (!document) return document;
  if (document.length <= 11) {
    return formatToCPF(document);
  } else {
    return formatToCNPJ(document);
  }
};
