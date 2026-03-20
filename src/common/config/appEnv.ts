/**
 * @license
 * Copyright 2025 VeraUI (veraui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { app } from 'electron';

/**
 * Returns baseName unchanged in release builds, or baseName + '-dev' in dev builds.
 * Used to isolate symlink and directory names between environments.
 *
 * @example
 * getEnvAwareName('.veraui')        // release → '.veraui',        dev → '.veraui-dev'
 * getEnvAwareName('.veraui-config') // release → '.veraui-config', dev → '.veraui-config-dev'
 */
export function getEnvAwareName(baseName: string): string {
  return app?.isPackaged === true ? baseName : `${baseName}-dev`;
}
