/**
 * @license
 * Copyright 2025 VeraUI (veraui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * VeraUI 基础组件库统一导出 / VeraUI base components unified exports
 *
 * 提供所有基础组件和类型的统一导出入口
 * Provides unified export entry for all base components and types
 */

// ==================== 组件导出 / Component Exports ====================

export { default as VeraModal } from './VeraModal';
export { default as VeraCollapse } from './VeraCollapse';
export { default as VeraSelect } from './VeraSelect';
export { default as VeraScrollArea } from './VeraScrollArea';
export { default as VeraSteps } from './VeraSteps';

// ==================== 类型导出 / Type Exports ====================

// VeraModal 类型 / VeraModal types
export type {
  ModalSize,
  ModalHeaderConfig,
  ModalFooterConfig,
  ModalContentStyleConfig,
  VeraModalProps,
} from './VeraModal';
export { MODAL_SIZES } from './VeraModal';

// VeraCollapse 类型 / VeraCollapse types
export type { VeraCollapseProps, VeraCollapseItemProps } from './VeraCollapse';

// VeraSelect 类型 / VeraSelect types
export type { VeraSelectProps } from './VeraSelect';

// VeraSteps 类型 / VeraSteps types
export type { VeraStepsProps } from './VeraSteps';
