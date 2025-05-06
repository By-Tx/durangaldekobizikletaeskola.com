import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type AppLocale = 'eus' | 'es';

function isAppLocale(value: string): value is AppLocale {
  return routing.locales.includes(value as AppLocale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;

  const locale: AppLocale = isAppLocale(resolvedLocale ?? '')
    ? resolvedLocale as AppLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: {} 
  };
});
