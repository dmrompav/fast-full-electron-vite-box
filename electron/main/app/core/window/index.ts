import { app, BrowserWindow, shell } from 'electron';
import { join } from 'node:path';
import { AppConfigs } from '../helpers';

const makeDefaultOptions = (appConfigs: AppConfigs) => ({
  title: 'Main window',
  icon: join(appConfigs.publicPath, 'favicon.ico'),
  webPreferences: {
    preload: appConfigs.preloadPath,
    nodeIntegration: true,
    contextIsolation: false,
  }
});

export class ElectronWindow {
  instance: BrowserWindow | null = null;

  private appConfigs: AppConfigs | null = null;

  constructor(appConfigs: AppConfigs, options: Electron.BrowserWindowConstructorOptions = {}) {
    this.appConfigs = appConfigs;
    const defaultOptions = makeDefaultOptions(appConfigs);
    this.instance = new BrowserWindow(Object.assign(defaultOptions, options));

    this.configurateWindow();
  }

  configurateWindow() {
    if (process.env.VITE_DEV_SERVER_URL) {
      this.instance.loadURL(this.appConfigs.URL);
      this.instance.webContents.openDevTools();
    } else {
      this.instance.loadFile(this.appConfigs.indexPath);
    }

    // Test actively push message to the Electron-Renderer
    this.instance.webContents.on('did-finish-load', () => {
      this.instance?.webContents.send('main-process-message', new Date().toLocaleString())
    })

    // Make all links open with the browser, not with the application
    this.instance.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('https:')) shell.openExternal(url)
      return { action: 'deny' }
    })
    // win.webContents.on('will-navigate', (event, url) => { }) #344
  }
}
