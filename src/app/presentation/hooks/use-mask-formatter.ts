import { useMemo } from 'react';

import { MaskOptions } from '~/app/presentation/common/types';
import {
  PhoneNumberMaskFormatter,
  CepMaskFormatter,
  DocumentFormatter
} from '~/app/presentation/infra/formatter';

export const useMaskFormatter = (mask: MaskOptions | undefined) => {
  if (!mask) {
    return null;
  }
  const formatters = {
    cep: CepMaskFormatter,
    phoneNumber: PhoneNumberMaskFormatter,
    document: DocumentFormatter
  };

  return useMemo(() => formatters[mask], [mask]);
};
