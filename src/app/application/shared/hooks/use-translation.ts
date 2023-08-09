import { useTranslation as i18NextUseTranslation } from 'react-i18next';

import { type TOptionsBase } from 'i18next';

import {
  type TFunction,
  type AvailableLanguages,
  type Translation
} from '../types/translation';

export const useTranslation = (namespace?: string | string[]): Translation => {
  const {
    t,
    i18n: { language, changeLanguage }
  } = i18NextUseTranslation(namespace);

  const translate: TFunction<string | string[], string, TOptionsBase> = (
    text,
    defaultValue,
    options
  ): string => t(text, defaultValue, options);

  const updateLanguage = (newLanguage: AvailableLanguages): void => {
    changeLanguage(newLanguage);
  };

  return {
    translate,
    language,
    updateLanguage
  };
};
