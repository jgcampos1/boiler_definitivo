export const formatCurrency = (
  value: string | number,
  prefix?: string,
  locale = 'pt-br',
  currency = 'BRL'
) => {
  const prefixValue = prefix ?? '$';
  return (
    (String(Number(value).toFixed(2))?.replace(
      /\D/g,
      ''
    ) as unknown as number) / 100
  )
    .toLocaleString(locale, {
      style: 'currency',
      currency: currency
    })
    ?.replace('$', prefixValue + ' ');
};
