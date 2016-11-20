import { PAYLOAD } from './defines'

export default function makeAst(keyword, payload) {
  return {
    ...keyword,
    payload
  }
}
