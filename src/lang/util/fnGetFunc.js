import { FN } from '../constants/Symbol'

const fnGetFunc = (fn) => {
  if (fn[FN]) {
    fn = fn[FN]
  }
  return fn.func
}

export default fnGetFunc
