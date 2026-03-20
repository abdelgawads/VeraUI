/**
 * @license
 * Copyright 2025 VeraUI (veraui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import * as path from 'path';
import * as os from 'os';
import { app } from 'electron';
import { getEnvAwareName } from '@/common/config/appEnv';

export const VERAUI_EXTENSIONS_PATH_ENV = 'VERAUI_EXTENSIONS_PATH';
export const VERAUI_STRICT_ENV_ENV = 'VERAUI_STRICT_ENV';
export const EXTENSION_MANIFEST_FILE = 'vera-extension.json';
export const EXTENSIONS_DIR_NAME = 'extensions';
export const PATH_SEPARATOR = process.platform === 'win32' ? ';' : ':';

export function getUserExtensionsDir(): string {
  return path.join(os.homedir(), getEnvAwareName('.veraui'), EXTENSIONS_DIR_NAME);
}

export function getAppDataExtensionsDir(): string {
  try {
    return path.join(app.getPath('userData'), EXTENSIONS_DIR_NAME);
  } catch {
    const appData = process.env.APPDATA || path.join(os.homedir(), '.config');
    return path.join(appData, 'VeraUI', EXTENSIONS_DIR_NAME);
  }
}

export function getEnvExtensionsDirs(): string[] {
  const envPath = process.env[VERAUI_EXTENSIONS_PATH_ENV];
  if (!envPath) return [];
  return envPath.split(PATH_SEPARATOR).filter(Boolean);
}
