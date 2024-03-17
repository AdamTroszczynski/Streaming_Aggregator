import { createI18n } from "vue-i18n";
import pl from '@/locales/pl.js';
import en from '@/locales/en.js';


export default createI18n({
  legacy: false,
  locale: 'pl',
  messages: {
    en,
    pl
  }
});