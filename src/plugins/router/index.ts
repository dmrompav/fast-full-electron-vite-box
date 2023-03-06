import { createWebHashHistory, createRouter } from 'vue-router';
import { createRoutesCollection } from './helpers';
import Views from '@/views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Views.HomeView,
  },
  ...createRoutesCollection(Views),
  {
    path: '/:pathMatch(.*)*',
    name: '_NotFound',
    component: Views._NotFound,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
