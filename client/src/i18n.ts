import { createI18n } from "vue-i18n";
import pl from '@/locales/pl.json';
import en from '@/locales/en.json';


export default createI18n({
  legacy: false,
  locale: 'pl',
  messages: {
    en,
    pl
  }
});