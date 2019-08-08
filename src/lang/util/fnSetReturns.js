import Fn from './js/Fn'

/**
 * Sets `returns` for the given `fn`
 *
 * Note: This method is immutable. A new copy of `Fn` will be returned
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to set the `returns` property on.
 * @param {Type} returns A `Type` to set the `returns` property to.
 * @return {Fn} A new Fn with the `returns` property set.
 * @example
 *
 * const result = fnSetReturns(new Fn(() => {}), String)
 * result.returns
 * //=> String
 */
const fnSetReturns = (fn, returns) => {
  return new Fn(fn.func, {
    ...fn.meta,
    returns
  })
}

export default fnSetReturns
