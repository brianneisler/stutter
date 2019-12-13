import Any from '../lang/types/Any'
import Function from '../lang/types/Function'
import complement from '../lang/complement'
import defn from '../lang/defn'
import filter from './filter'

/**
 * The complement of [`filter`](#filter).
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} predicate
 * @param {*} filterable
 * @returns {*}
 * @example
 *
 * isOdd = (n) => n % 2 === 1
 *
 * remove(isOdd, [1, 2, 3, 4])
 * //=> [2, 4]
 *
 * remove(isOdd, {a: 1, b: 2, c: 3, d: 4})
 * //=> {b: 2, d: 4}
 */
const remove = defn(
  'data.remove',
  'The complement of [`filter`](#filter).',

  [Function, Any, () => Any],
  (predicate, filterable) => filter(complement(predicate), filterable),

  [Any, Function, () => Any],
  (filterable, predicate) => filter(complement(predicate), filterable)
)

export default remove
