import SYMBOL_META from '../constants/SYMBOL_META'
import functionDefineTypes from './functionDefineTypes'
import objectDefineProperty from './objectDefineProperty'

/**
 * Copy meta data from the `sourceFunc` to the given `func`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The `Function` to copy meta data to.
 * @param {Function} sourceFunc The `Function` to copy meta data from.
 * @returns {Function} The `func` with the meta data coppied to it
 * @example
 *
 */
const functionCopyMeta = (func, sourceFunc) => {
  sourceFunc = functionDefineTypes(sourceFunc)
  if (sourceFunc[SYMBOL_META] !== undefined && func[SYMBOL_META] !== sourceFunc[SYMBOL_META]) {
    objectDefineProperty(func, SYMBOL_META, { value: sourceFunc[SYMBOL_META], configurable: true })
  }
  if (sourceFunc.parameters !== undefined && func.parameters !== sourceFunc.parameters) {
    objectDefineProperty(func, 'length', { value: sourceFunc.length, configurable: true })
    objectDefineProperty(func, 'parameters', { value: sourceFunc.parameters, configurable: true })
  }
  if (sourceFunc.dispatcher !== undefined && func.dispatcher !== sourceFunc.dispatcher) {
    objectDefineProperty(func, 'dispatcher', { value: sourceFunc.dispatcher, configurable: true })
  }
  if (sourceFunc.curried !== undefined && func.curried !== sourceFunc.curried) {
    objectDefineProperty(func, 'curried', { value: sourceFunc.curried, configurable: true })
  }
  if (sourceFunc.returns !== undefined && func.returns !== sourceFunc.returns) {
    objectDefineProperty(func, 'returns', { value: sourceFunc.returns, configurable: true })
  }
  return func
}

export default functionCopyMeta
