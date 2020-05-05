import SYMBOL_FN from '../constants/SYMBOL_FN'
import SYMBOL_META from '../constants/SYMBOL_META'
import anyIsFunction from './anyIsFunction'
import anyIsString from './anyIsString'
import anyToString from './anyToString'

/**
 * Converts `any` to a `Name` for the given `any` value.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Function} Returns the converted `Name`.
 * @example
 *
 * anyToName(function foo() {})
 * //=> 'foo'
 */
const anyToName = (any) => {
  if (any == null) {
    if (any === undefined) {
      return 'undefined'
    }
    return 'null'
  }
  if (anyIsFunction(any.toName)) {
    return any.toName()
  }
  if (any[SYMBOL_META]) {
    return any[SYMBOL_META].name
  }

  // TODO BRN: Need to figure out how to reverse source maps here to get the
  // correct name if it's been obfuscated
  if (anyIsFunction(any)) {
    if (any.prototype && any.prototype.name) {
      return any.prototype.name
    }
    return any.name
  }
  if (anyIsString(any)) {
    return `'${any}'`
  }
  return anyToString(any)
}

export default anyToName
