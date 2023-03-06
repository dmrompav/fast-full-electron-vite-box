import { App } from 'vue';

import {
  Button,
  Table
} from 'view-ui-plus';

export default {
  install(app: App<Element>) {
    app.component('Button', Button);
    app.component('Table', Table);
  }
};
