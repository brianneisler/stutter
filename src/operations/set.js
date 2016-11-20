import { SET } from '../defines'

export function resolve(name, value) {
  return {
    op: SET,
    payload: {
      name,
      value
    }
  }
}
