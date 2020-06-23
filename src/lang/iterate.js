import Any from './types/Any'
import Function from './types/Function'
import anyIterate from './util/anyIterate'
import defn from './defn'

/**
 * This method iterates over the given collection or iterator in **series**. If the `iteratee` method returns `{ done: true }` then the iteration will complete.
 *
 * This method automatically upgrades to async. If the `iteratee` returns a Promise or a generator, this method will return a Promise or a generator. Values are iterated in order and if the iteratee returns a resolvable value the iteration will wait until that value resolves before continuing with the iteration.
 *
 * This method also supports async iterators. If an unresolved value is received from the iterator instead of an object with `value` and `done` properties, the iteration will wait for the value to resolve before continuing to the next iteration. This will also cause the method to upgrade to async and return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Function} func The iteratee Function
 * @param  {*} any The collection or iterator to iterate over
 * @returns {*} The final value returned when the iteratee returns done or `undefined`
 * @example
 *
 * iterate((value, pik) => {
 *   if (value === 'b') {
 *     return { done: true, value: pik }
 *   }
 *   return { done: false }
 * }, ['a', 'b', 'c'])
 * //=> 1
 *
 * iterate(async (value, pik) => new Promise((resolve, reject) => {
 *   setTimeout(() => {
 *     if (value === 'b') {
 *       return resolve({ done: true, value: pik })
 *     }
 *     return resolve({ done: false })
 *   }, 0)
 * }), ['a', 'b', 'c'])
 * //=> 1
 */
const iterate = defn(
  'iterate',
  'This method iterates over the given collection or iterator in **series**. If the `iteratee` method returns `{ done: true }` then the iteration will complete.',

  [Any, Function],
  (any, func) => anyIterate(any, func),

  [Function, Any],
  (func, any) => anyIterate(any, func)
)

export default iterate
