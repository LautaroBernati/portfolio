/**
 * 'es' or 'en' variants of the same piece of information.
 */
export type TranslatedDocument<T> = {
  en: T;
  es: T;
}

/**
 * Document that contains translations.
 */
export type TranslatedDocWithId<T> = {
  UID: string;
} & TranslatedDocument<T>;
