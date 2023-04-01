import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { configurateApp, AppConfigs } from './helpers';
import { ElectronWindow } from './window';

export class ElectronApp {
  constructor() {}

  use(instance) {
    return this;
  }

  launch() {
    const appConfigs: AppConfigs = configurateApp();
    let win: ElectronWindow | null = null;

    app.on('ready', () => win = new ElectronWindow(appConfigs))

    app.on('window-all-closed', () => {
      win.instance = null;
      process.platform !== 'darwin' && app.quit();
    });

    app.on('second-instance', () => {
      if (win.instance) return;

      // Focus on the main window if the user tried to open another
      win.instance.isMinimized() && win.instance.restore();
      win.instance.focus();
    });

    app.on('activate', () => {
      const allWindows = BrowserWindow.getAllWindows();
      allWindows.length
        ? allWindows[0].focus()
        : win = new ElectronWindow(appConfigs);
    });
    return this;
  }
}
