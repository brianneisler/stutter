import Function from './types/Function'
import Iterable from './types/Iterable'
import defn from './defn'
import iterate from './iterate'
import pipe from './pipe'

const iterableFindKdx = (iterable, func) =>
  iterate(
    (next) =>
      pipe(
        (pNext) => {
          if (pNext.done) {
            return pNext
          }
          return func(pNext.value, pNext.kdx)
        },
        (result) => {
          if (result) {
            return {
              ...next,
              done: true,
              value: next.kdx
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
 * findKdx(
 *   (value, index) => value[index] == 2,
 *   [{a: 1}, {a: 2}, {a: 3}]
 * )
 * //=> 1
 *
 * findKdx(
 *   (value, key) => value[key] == 2,
 *   { a: 1, b: 2, c: 3 }
 * )
 * //=> 'b'
 */
const findKdx = defn(
  'lang.findKdx',
  'Returns the kdx of the first element of the collection which matches the predicate, or `undefined` if no element matches.',

  [Function, Iterable, () => Index],
  (func, iterable) => iterableFindKdx(iterable, func),

  [Iterable, Function, () => Index],
  (iterable, func) => iterableFindKdx(iterable, func)[(Iterable, Function, () => Index)],
  (iterable, func) => iterableFindKdx(iterable, func)

  // TODO BRN: Iterable only matches values with [Symbol.iterator]. Need to
  // match basic objects and other objects
)

export default findKdx
