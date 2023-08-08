import { PaymentMethodType } from '../enums/payment-methods';

export const PaymentMethods = [
  {
    id: PaymentMethodType.CREDIT_CARD,
    name: 'Cartão de Crédito'
  },
  {
    id: PaymentMethodType.PIX,
    name: 'Pix'
  },
  {
    id: PaymentMethodType.BANK_SLIP,
    name: 'Boleto Bancario'
  }
];
