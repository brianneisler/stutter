import { FN } from '../constants/Symbol'
import objectDefineProperty from './objectDefineProperty'

/**
 * Defines `length` for the given `func`
 *
 * Note: This mutates `func`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to define the length of.
 * @param {Number} length The length of the function parameters.
 * @return {Function} The `func` function.
 * @example
 *
 * const result = functionDefineLength(function(abc) {}, 2)
 * result.length
 * //=> 2
 */
const functionDefineSymbolFn = (func, fn) => {
  objectDefineProperty(func, FN, {
    configurable: true,
    value: fn
  })

  return func
}

export default functionDefineSymbolFn
