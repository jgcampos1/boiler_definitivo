import { useMemo } from 'react';

import { MaskOptions } from '../common/types/mask-options-type';
import { CepMaskFormatter } from '../infra/formatter/cep-mask-formatter';
import { DocumentFormatter } from '../infra/formatter/document-mask-formatter';
import { PhoneNumberMaskFormatter } from '../infra/formatter/phone-number-mask-formatter';

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
