import {
  PixIcon,
  CreditCardIcon,
  BoletoIcon
} from '~/app/presentation/components/icons';

import { PaymentMethodType } from '../enums/payment-methods';

export const PaymentMethods = [
  {
    id: PaymentMethodType.CREDIT_CARD,
    name: 'Cartão de Crédito',
    icon: CreditCardIcon
  },
  {
    id: PaymentMethodType.PIX,
    name: 'Pix',
    icon: PixIcon
  },
  {
    id: PaymentMethodType.BANK_SLIP,
    name: 'Boleto Bancario',
    icon: BoletoIcon
  }
];
