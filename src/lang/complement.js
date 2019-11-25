import Fn from './types/Fn'
import Function from './types/Function'
import defn from './defn'
import fnComplement from './util/fnComplement'
import functionComplement from './util/functionComplement'

/**
 * returns a new function that logically nots the returned value and returns that as the result.
 *
 * Auto-curried for placeholder support
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {Function} fn The function to complement
 * @returns {Function} The complemented function
 * @example
 *
 * const isEven = (value) => value % 2 === 0
 * const isOdd = complement(isEven)
 * isOdd(1) //=> true
 */
const complement = defn(
  'lang.complement',
  'returns a new function that logically nots the returned value and returns that as the result.',

  [Fn, () => Fn],
  (fn) => fnComplement(fn),

  [Function, () => Function],
  (func) => functionComplement(func)
)

export default complement
