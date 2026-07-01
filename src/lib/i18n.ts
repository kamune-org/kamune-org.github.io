import en from '../i18n/en.json';
import fa from '../i18n/fa.json';

export type Locale = 'en' | 'fa';

const translations: Record<Locale, Record<string, string>> = { en, fa };

export function t(lang: Locale, key: string): string {
  const dict = translations[lang] || translations.en;
  return dict[key] || key;
}
