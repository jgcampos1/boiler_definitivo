export const clearCurrencyNumber = (value: string) =>
  Number(value.replace(/\D/g, '')) / 100;
