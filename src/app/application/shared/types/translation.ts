import { type TOptions } from 'i18next';

export type TFunction<T extends string | string[], U, V> = (
  text: T,
  defaultValue?: U,
  options?: V
) => string;

export interface Translation {
  translate: TFunction<
    string | string[],
    undefined,
    string | TOptions<string[]> | undefined
  >;
  language: string;
  updateLanguage: (language: AvailableLanguages) => void;
}

export type AvailableLanguages = 'en-US' | 'pt-BR';
