import SYMBOL_FN from '../constants/SYMBOL_FN'

const fnGetMeta = (fn) => {
  if (fn[SYMBOL_FN]) {
    fn = fn[SYMBOL_FN]
  }
  return fn.meta
}

export default fnGetMeta
