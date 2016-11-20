import { EVALUATOR, KEYWORD, PAYLOAD } from './defines'

export default function getKeyword(node) {
  return {
    evaluator: node[EVALUATOR],
    keyword: node[KEYWORD],
    payload: node[PAYLOAD]
  }
}
