import Boolean from '../types/Boolean'
import fnGetMeta from './fnGetMeta'

/**
 * Returns a complemented equivalent of the provided `Fn`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to curry.
 * @return {Fn} A new, curried Fn.
 * @example
 *
 * const truthy = buildFn(() => true)
 * const falsey = fnComplement(truthy)
 *
 * truthy()
 * //=> true
 *
 * falsey()
 * //=> false
 */
const fnComplement = (fn) => {
  const complement = fnGetMeta(fn).complement || 0
  return fn.update({
    complement: complement + 1,
    returns: Boolean
  })
}

export default fnComplement
