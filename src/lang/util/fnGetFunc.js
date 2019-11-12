import SYMBOL_FN from '../constants/SYMBOL_FN'

const fnGetFunc = (fn) => {
  if (fn[SYMBOL_FN]) {
    fn = fn[SYMBOL_FN]
  }
  return fn.func
}

export default fnGetFunc
