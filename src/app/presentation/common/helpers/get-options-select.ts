import { OptionType } from '~/app/presentation/common/types';

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
