import fnGetMeta from './fnGetMeta'

/**
 * Returns a curried equivalent of the provided `Fn`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to curry.
 * @return {Fn} A new, curried Fn.
 * @example
 *
 * const add = buildFn((a, b) => a + b)
 *
 * const addFourNumbers = fnCurry(addNumbers, 4)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const fnCurry = (fn) => {
  // NOTE BRN: The update method does a shallow comparison on the updated
  // options. If they are the same, the same fn instance will be returned, which
  // is what we want for currying.
  return fn.update({ curry: true })
}

export default fnCurry
