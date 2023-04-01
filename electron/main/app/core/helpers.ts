import { join } from 'node:path';
import { release } from 'node:os';
import { app } from 'electron';

export type AppConfigs = {
  URL: string,
  preloadPath: string,
  indexPath: string,
  publicPath: string
}

export function configurateApp(): AppConfigs {
  process.env.DIST_ELECTRON = join(__dirname, '..');
  process.env.DIST = join(process.env.DIST_ELECTRON, '../dist');
  process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? join(process.env.DIST_ELECTRON, '../public')
    : process.env.DIST;

  // Disable GPU Acceleration for Windows 7
  if (release().startsWith('6.1')) app.disableHardwareAcceleration();
  // Set application name for Windows 10+ notifications
  if (process.platform === 'win32') app.setAppUserModelId(app.getName());

  if (!app.requestSingleInstanceLock()) {
    app.quit();
    process.exit(0);
  }

  // Remove electron security warnings
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

  return {
    URL: process.env.VITE_DEV_SERVER_URL,
    preloadPath: join(__dirname, '../preload/index.js'),
    indexPath: join(process.env.DIST, 'index.html'),
    publicPath: process.env.PUBLIC
  }
}
