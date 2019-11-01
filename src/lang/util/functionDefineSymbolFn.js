import SYMBOL_FN from '../constants/SYMBOL_FN'
import objectDefineProperty from './objectDefineProperty'

const functionDefineSymbolFn = (func, fn) => {
  objectDefineProperty(func, SYMBOL_FN, {
    value: fn,
    configurable: true
  })

  return func
}

export default functionDefineSymbolFn
