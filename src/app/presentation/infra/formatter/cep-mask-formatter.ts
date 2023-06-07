import { MaskFormatter } from '~/app/presentation/common/protocols';

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
