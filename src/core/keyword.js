import { EVALUATOR, KEYWORD } from './defines'

export default function keyword(name, evaluator) {
  return {
    [EVALUATOR]: evaluator,
    [KEYWORD]: true,
    keyword: name
  }
}
