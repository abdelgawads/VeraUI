/**
 * @license
 * Copyright 2025 VeraUI (veraui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Custom protocol for serving local extension assets in Electron.
 *
 * In dev mode, the renderer loads from http://localhost:5173/ (Vite dev server),
 * which blocks file:// URLs due to browser security policy.
 * The vera-asset:// protocol serves local files through Electron's net module,
 * bypassing this restriction.
 *
 * URL format: vera-asset://asset/C:/path/to/file.svg
 * - Uses `standard: true` so the URL parser correctly separates host and pathname.
 * - Fixed hostname "asset" prevents Windows drive letters (e.g. C:) from being
 *   misinterpreted as host:port by the URL parser.
 * - The handler uses Node's `pathToFileURL` for correct file:// URL construction.
 */
export const VERA_ASSET_PROTOCOL = 'vera-asset';

/** Fixed hostname used in vera-asset:// URLs. */
export const VERA_ASSET_HOST = 'asset';

/**
 * Convert an absolute file path to an vera-asset:// URL.
 * Normalizes backslashes to forward slashes for cross-platform compatibility.
 */
export function toAssetUrl(absPath: string): string {
  const normalized = absPath.replace(/\\/g, '/');
  return `${VERA_ASSET_PROTOCOL}://${VERA_ASSET_HOST}/${normalized}`;
}
