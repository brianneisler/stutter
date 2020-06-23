import Function from './types/Function'
import Iterable from './types/Iterable'
import defn from './defn'
import iterate from './iterate'
import pipe from './pipe'

const iterableFindPik = (iterable, func) =>
  iterate(
    (next) =>
      pipe(
        (pNext) => {
          if (pNext.done) {
            return pNext
          }
          return func(pNext.value, pNext.pik)
        },
        (result) => {
          if (result) {
            return {
              ...next,
              done: true,
              value: next.pik
            }
          }
          return next
        }
      )(next),
    iterable
  )

/**
 * @since v0.1.0
 * @param {Function} fn The predicate function used to determine if the element is the desired one.
 * @param {Array} collection The collection to consider.
 * @returns {*|Promise} The key or index found, or `undefined`.
 * @example
 *
 * findPik(
 *   (value, index) => value[index] == 2,
 *   [{a: 1}, {a: 2}, {a: 3}]
 * )
 * //=> 1
 *
 * findPik(
 *   (value, key) => value[key] == 2,
 *   { a: 1, b: 2, c: 3 }
 * )
 * //=> 'b'
 */
const findPik = defn(
  'lang.findPik',
  'Returns the pik of the first element of the collection which matches the predicate, or `undefined` if no element matches.',

  [Function, Iterable, () => Index],
  (func, iterable) => iterableFindPik(iterable, func),

  [Iterable, Function, () => Index],
  (iterable, func) =>
    iterableFindPik(iterable, func)[(Iterable, Function, () => Index)],
  (iterable, func) => iterableFindPik(iterable, func)

  // TODO BRN: Iterable only matches values with [Symbol.iterator]. Need to
  // match basic objects and other objects
)

export default findPik
