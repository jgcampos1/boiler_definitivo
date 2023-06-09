export interface Translation<T> {
  translate: T;
  language: AvailableLanguages;
  updateLanguage: (language: AvailableLanguages) => void;
}

export type AvailableLanguages = 'en' | 'pt-BR';
