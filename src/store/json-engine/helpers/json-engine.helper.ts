import {arrayToEntities, Entities} from '../../../utils/array.util';
import {JsonParserOptions, JsonTree} from '../json-engine.store';
import {SeaNode} from '../types/sea-node.type';
import {jsonParser} from './json-parser.helper';
import {getLayoutedSeaNodes} from './sea-node-position.helper';

export const convertJsonTree = (json: object | unknown[], options?: JsonParserOptions): JsonTree => {
  // Pass options to jsonParser
  const {seaNodes, edges} = jsonParser(json, options);
  const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
  const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

  return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
};