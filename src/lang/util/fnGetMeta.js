import { FN } from '../constants/Symbol'

const fnGetMeta = (fn) => {
  if (fn[FN]) {
    fn = fn[FN]
  }
  return fn.meta
}

export default fnGetMeta
