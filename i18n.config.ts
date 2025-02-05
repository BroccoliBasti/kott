import en from 'i18n/locales/en-US.json';
import sv from 'i18n/locales/sv-FI.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['sv', 'en'],
    globalInjection: true,
    fallbackLocale: 'en',
    file: '/locales',
    messages: {
      en: en,
      sv: sv,
    }
  }))
  