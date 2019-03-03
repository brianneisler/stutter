import { Function } from './types'
import { Iterable, Keyed } from './protocols'
import defn from './defn'
import reduceBy from './reduceBy'

const reducer = (accum, item) => {
  if (accum == null) {
    accum = []
  }
  accum.push(item)
  return accum
}

/**
 * Splits an `Iterable` into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array} arrayLike The ArrayLike list of values to group
 * @param {Function} keyFunc The function responsibile for returning the key to
 * group the value by
 * @return {Object} An object with the values grouped by key
 * @example
 */
const groupBy = defn(
  'groupBy',

  [Iterable, Function, () => Keyed],
  reduceBy(reducer, null),

  [Function, Iterable, () => Keyed],
  (keyFunc, iterable) => groupBy(keyFunc)
)

export default groupBy
