import { clearCurrencyNumber } from '../common/constants/general';

type CurrencyMaskFormatterProps = {
  value: string;
  formatBasedOnSymbol?: string;
  shouldShowSymbol?: boolean;
};

export const useFormatValues = () => {
  const handleIntlNumberFormat = (value: number) =>
    new Intl.NumberFormat().format(value);

  const handleFormatMinMaxValue = (
    event,
    minValue: number,
    maxValue?: number
  ) => {
    const regexNumber = /^[0-9]/;
    const value = event?.key;

    const asciiTable = {
      zero: 48
    };

    const currentValue =
      // eslint-disable-next-line
      event?.target?.value?.toString() + event?.key?.toString();

    if (!regexNumber.test(value)) return event?.preventDefault();

    if (currentValue < minValue) return event?.preventDefault();

    if (maxValue && currentValue > maxValue) return event?.preventDefault();

    const hasDigitZero =
      event?.which === asciiTable.zero || event?.keyCode === asciiTable.zero;

    if (
      value !== '' &&
      currentValue?.length <= 1 &&
      hasDigitZero &&
      minValue !== 0
    )
      return event.preventDefault();
  };

  const handleCurrencyValue = ({ value = '' }: CurrencyMaskFormatterProps) => {
    const newValue = value === '' ? 0 : clearCurrencyNumber(value);

    const formattedValue = newValue.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });

    return formattedValue;
  };

  return {
    handleFormatMinMaxValue,
    handleIntlNumberFormat,
    handleCurrencyValue
  };
};
