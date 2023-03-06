import { DefineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

interface ViewsObject {
  [key: string]: DefineComponent<{}, {}, any>
}

export function createRoutesCollection(viewsObject: ViewsObject): RouteRecordRaw[] {
  const arr: RouteRecordRaw[] = [];

  for (const [viewName, view] of Object.entries(viewsObject)) {
    arr.push({
      path: `/${viewName}`,
      name: viewName,
      component: view
    },)
  }

  return arr;
}
