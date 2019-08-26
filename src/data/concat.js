import { arrayMap } from '../lang/util'
import curryN from '../lang/curryN'
import defn from '../lang/defn'
import isArray from '../lang/isArray'
import isString from '../lang/isString'
import toSeq from '../lang/toSeq'

const baseConcat = (firstList, ...lists) => {
  const seq = toSeq(firstList).concat(...arrayMap(lists, toSeq))

  if (isString(firstList)) {
    return seq.join('')
  }
  if (isArray(firstList)) {
    return seq.toArray()
  }
  return seq
}

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `concat` expects both arguments to be of the same type, unlike the native `Array.prototype.concat` method. It will throw an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * Supports Promises. If a Promise is received for either parameter than the entire method will upgrade to async and return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {*} firstList The first list
 * @param {...*} lists Lists to concat to the first
 * @returns {*} A list consisting of the elements of `firstList` followed by the elements of `lists`.
 *
 * @example
 *
 * concat('ABC', 'DEF')
 * //=> 'ABCDEF'
 *
 * concat([4, 5, 6], [1, 2, 3])
 * //=> [4, 5, 6, 1, 2, 3]
 *
 * concat([], [])
 * //=> []
 *
 * await concat(Promise.resolve([4, 5, 6]), Promise.resolve([1, 2, 3]))
 * //=> [4, 5, 6, 1, 2, 3]
 */
const concat = curryN(2, defn('concat', baseConcat))

export default concat

export { baseConcat }
