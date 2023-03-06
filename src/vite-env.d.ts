/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'view-ui-plus/dist/locale/en-US.js';
declare module 'view-ui-plus/dist/locale/ru-RU.js';
