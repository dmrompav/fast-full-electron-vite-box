// STYLES
import 'tailwindcss/tailwind.css';

// PLUGINS, LIBS
import { pinia } from '@/plugins/pinia';
import { router } from '@/plugins/router';
import viewUi from '@/plugins/view-ui';
import i18n from '@/plugins/i18n';

import { createApp } from 'vue';
import App from '@/App.vue';

// CREATE VUE APP
const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(viewUi)

  .mount('#app');
