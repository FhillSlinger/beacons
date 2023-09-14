import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';
import pt from '@/locales/pt.json';

export const i18n = createI18n({
  availableLocales: ['pt', 'en'],
  locale: window.localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  }
});