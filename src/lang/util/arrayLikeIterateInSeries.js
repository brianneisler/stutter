import arrayLikeToIterator from './arrayLikeToIterator'
import iteratorIterateInSeries from './iteratorIterateInSeries'

/**
 * This method iterates over the given Array in **series**. If the `iteratee` method returns `{ done: true }` then the iteration will complete.
 *
 * This method automatically upgrades to async. If the `iteratee` returns a Promise or a generator, this method will return a Promise or a generator. Values are iterated in order and if the iteratee returns a resolvable value the iteration will wait until that value resolves before continuing with the iteration.
 *
 * This method also supports async iterators. If an unresolved value is received from the iterator instead of an object with `value` and `done` properties, the iteration will wait for the value to resolve before continuing to the next iteration. This will also cause the method to upgrade to async and return a Promise.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param  {*} any The collection or iterator to iterate over
 * @param {Function} func The iteratee Function
 *
 * @returns {*} The final value returned when the iteratee returns done or `undefined`
 * @example
 *
 * arrayLikeIterateInSeries(['a', 'b', 'c'], (value, pik) => {
 *   if (value === 'b') {
 *     return { done: true, value: pik }
 *   }
 *   return { done: false }
 * })
 * //=> 1
 *
 * arrayLikeIterateInSeries(['a', 'b', 'c'], async (value, pik) => new Promise((resolve, reject) => {
 *   setTimeout(() => {
 *     if (value === 'b') {
 *       return resolve({ done: true, value: pik })
 *     }
 *     return resolve({ done: false })
 *   }, 0)
 * }))
 * //=> 1
 */
const arrayLikeIterateInSeries = (array, func, index = 0) =>
  iteratorIterateInSeries(arrayLikeToIterator(array, index), func)

export default arrayLikeIterateInSeries
