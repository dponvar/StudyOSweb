import {getRequestConfig} from 'next-intl/server';
import {routing} from '../i18n';

export default getRequestConfig(async ({locale}) => {
  // Fallback to defaultLocale if locale is undefined
  if (!locale) {
    locale = routing.defaultLocale;
  }
  if (!routing.locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
