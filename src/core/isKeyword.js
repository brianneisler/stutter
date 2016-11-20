import { KEYWORD } from './defines'
export default function isKeyword(node) {
  return _.has(node, KEYWORD)
}
