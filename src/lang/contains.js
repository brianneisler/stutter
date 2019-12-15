import Any from './types/Any'
import Boolean from './types/Boolean'
import Function from './types/Function'
import defn from './defn'
import equals from './equals'
import iterate from './iterate'
import pipe from './pipe'

const baseContainsWith = (predicate, value, collection) =>
  iterate(
    (next) =>
      pipe(
        (pNext) => {
          if (pNext.done) {
            return false
          }
          return predicate(value, pNext.value)
        },
        (result) => {
          if (result || next.done) {
            return {
              ...next,
              done: true,
              value: result
            }
          }
          return next
        }
      )(next),
    collection
  )

/**
 * Returns `true` if the specified value is equal, in [`equals`](#equals) terms, to at least one value of the given collection; `false` otherwise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {*} value The value to compare against.
 * @param {array|object|string} collection The collection to consider.
 * @returns {boolean} `true` if an equivalent value is in the collection, `false` otherwise.
 * @example
 *
 * contains(3, [1, 2, 3])
 * //=> true
 * contains(4, [1, 2, 3]) //=> false
 * contains({ name: 'Fred' }, [{ name: 'Fred' }]) //=> true
 * contains([42], [[42]]) //=> true
 */
const contains = defn(
  'contains',
  'Returns `true` if the specified value is equal to at least one value of the given collection, otherwise returns `false`. Predicate defaults to `equals`',

  [Any, Any, () => Boolean],
  (value, collection) => baseContainsWith(equals, value, collection),

  [Function, Any, Any, () => Boolean],
  (predicate, value, collection) => baseContainsWith(predicate, value, collection),

  [Any, Any, Function, () => Boolean],
  (value, collection, predicate) => baseContainsWith(predicate, value, collection)
)

export default contains
