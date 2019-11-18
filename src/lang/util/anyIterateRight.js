import ITERATOR_END from '../constants/ITERATOR_END'
import anyIsResolved from './anyIsResolved'
import anyResolveWith from './anyResolveWith'
import anyToIterator from './anyToIterator'

const resolveNext = (next, fn, iter, recur) =>
  anyResolveWith(next, (resolvedNext) => {
    if (resolvedNext.done) {
      return resolvedNext.value
    }
    return recur(fn, iter)
  })

const doReverseSeriesIteration = (fn, iter) => {
  while (true) {
    let next = iter.previous()
    if (!anyIsResolved(next)) {
      return anyResolveWith(next, (resolvedNext) => {
        next = fn(resolvedNext)
        if (!anyIsResolved(next)) {
          return resolveNext(next, fn, iter, doReverseSeriesIteration)
        }
        if (next.done) {
          return next.value
        }
        return doReverseSeriesIteration(fn, iter)
      })
    }
    next = fn(next)
    if (!anyIsResolved(next)) {
      return resolveNext(next, fn, iter, doReverseSeriesIteration)
    }
    if (next.done) {
      return next.value
    }
  }
}

/**
 * This method iterates over the given collection or iterator in **series**. If the `iteratee` method returns `{ done: true }` then the iteration will complete.
 *
 * This method automatically upgrades to async. If the `iteratee` returns a Promise or a generator, this method will return a Promise or a generator. Values are iterated in order and if the iteratee returns a resolvable value the iteration will wait until that value resolves before continuing with the iteration.
 *
 * This method also supports async iterators. If an unresolved value is received from the iterator instead of an object with `value` and `done` properties, the iteration will wait for the value to resolve before continuing to the next iteration. This will also cause the method to upgrade to async and return a Promise.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category common
 * @param {Function} iteratee The iteratee Function
 * @param  {*} collection The collection or iterator to iterate over
 * @returns {*} The final value returned when the iteratee returns done or `undefined`
 * @example
 *
 * anyIterateRight((value, kdx) => {
 *   if (value === 'b') {
 *     return { done: true, value: kdx }
 *   }
 *   return { done: false }
 * }, ['a', 'b', 'c'])
 * //=> 1
 *
 * anyIterateRight(async (value, kdx) => new Promise((resolve, reject) => {
 *   setTimeout(() => {
 *     if (value === 'b') {
 *       return resolve({ done: true, value: kdx })
 *     }
 *     return resolve({ done: false })
 *   }, 0)
 * }), ['a', 'b', 'c'])
 * //=> 1
 */
const anyIterateRight = (any, func) =>
  doReverseSeriesIteration(func, anyToIterator(any, ITERATOR_END))

export default anyIterateRight