import { ipcMain } from 'electron';

export class Router {
  constructor() {}

  on(event: string, cb: () => any) {
    ipcMain.on(event, cb);
    return this;
  }
}


