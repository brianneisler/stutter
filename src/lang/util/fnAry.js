import fnArity from './fnArity'

/**
 * Returns a clone of Fn that sets the `ary` to the given `number`. The new Fn
 * will accept exactly `number` parameters. Any extraneous parameters will not
 * be passed to the supplied Fn and any extraneous Parameters will be removed
 * from the Fn's meta data.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to set the ary of.
 * @param {Number} number The desired arity of the new Fn.
 * @returns {Fn} A new `Fn`. The new `Fn` is guaranteed to be of arity `number`.
 * @example
 *
 * const takesTwoArgs = fn((a, b) => [a, b])
 *
 * takesTwoArgs.length
 * //=> 2
 *
 * takesTwoArgs(1, 2)
 * //=> [1, 2]
 *
 * const takesOneArg = fnAry(1, takesTwoArgs)
 * takesOneArg.length
 * //=> 1
 *
 * // Only `number` arguments are passed to the new `Fn`
 * takesOneArg(1, 2)
 * //=> [1, undefined]
 */
const fnAry = (fn, number) =>
  fnArity(fn, number).update({
    ary: number
  })

export default fnAry
