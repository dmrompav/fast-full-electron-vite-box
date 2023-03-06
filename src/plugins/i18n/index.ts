import { createI18n } from 'vue-i18n';

import en from 'view-ui-plus/dist/locale/en-US.js';
import ru from 'view-ui-plus/dist/locale/ru-RU.js';

const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: 'en-EN',
  messages: { 'en-EN': en, 'ru-RU': ru }
});

export default i18n;
