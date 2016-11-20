import { RESOLVE } from '../defines'

export function resolve(value) {
  return {
    op: RESOLVE,
    payload: {
      value
    }
  }
}
