import { MaskFormatter } from '~/app/application/shared/common/protocols/mask-formatter';

export class DocumentFormatter implements MaskFormatter {
  format(value: string) {
    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{3})(\d)/, '$1.$2')
        ?.replace(/(\d{3})(\d)/, '$1.$2')
        ?.replace(/(\d{3})(\d{1,2})/, '$1-$2')
        ?.replace(/(-\d{2})\d+?$/, '$1');
    } else {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{2})(\d)/, '$1.$2')
        ?.replace(/(\d{3})(\d)/, '$1.$2')
        ?.replace(/(\d{3})(\d)/, '$1/$2')
        ?.replace(/(\d{4})(\d)/, '$1-$2')
        ?.replace(/(-\d{2})\d+?$/, '$1');
    }
  }
}
