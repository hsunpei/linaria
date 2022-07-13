/**
 * This visitor replaces tag with the generated value
 *
 */

import type { NodePath } from '@babel/traverse';
import type { TaggedTemplateExpression } from '@babel/types';

import type { StrictOptions } from '@linaria/utils';

import type { IPluginState } from '../types';

import getTagProcessor from './getTagProcessor';

export default function replaceTagWithValue(
  path: NodePath<TaggedTemplateExpression>,
  state: IPluginState,
  options: Pick<StrictOptions, 'classNameSlug' | 'displayName' | 'evaluate'>
) {
  const tagProcessor = getTagProcessor(path, state, options);
  if (!tagProcessor) return;

  path.replaceWith(tagProcessor.value);
}