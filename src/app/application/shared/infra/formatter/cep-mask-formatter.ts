import { MaskFormatter } from '~/app/application/shared/common/protocols/mask-formatter';

export class CepMaskFormatter implements MaskFormatter {
  format(value: string) {
    if (value) {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{5})(\d)/, '$1-$2')
        ?.replace(/(-\d{3})\d+?$/, '$1');
    }
  }
}
