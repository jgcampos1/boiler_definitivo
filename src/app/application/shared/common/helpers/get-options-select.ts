import { OptionType } from '../types/option-type';

export const getOptions = (
  options: Array<{
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
  }>
): OptionType[] =>
  options?.map((type) => ({
    id: type.id,
    label: type.name,
    disabled: type.disabled
  })) ?? [];
