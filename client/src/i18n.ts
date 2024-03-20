import { createI18n } from 'vue-i18n';
import pl from '@/locales/pl';
import en from '@/locales/en';

export default createI18n({
  legacy: false,
  locale: 'pl',
  messages: {
    en,
    pl
  }
});
