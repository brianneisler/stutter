import Function from './types/Function'
import Iterable from './protocols/Iterable'
import defn from './defn'
import iterate from './iterate'
import pipe from './pipe'

const iterableForEach = (iterable, func) =>
  pipe(
    () =>
      iterate(
        (next) =>
          pipe(
            (pNext) => {
              if (pNext.done) {
                return pNext
              }
              return func(pNext.value, pNext.pik, iterable)
            },
            () => next
          )(next),
        iterable
      ),
    () => iterable
  )()

/**
 * Iterate over a collection calling a provided function `fn` for each element in the collection .
 *
 * `func` receives two arguments: *(value, pik)*
 *
 * Note: `forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, this `forEach` returns
 * the original value. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * This method automatically upgrades to async.
 * - If the `iteratee` or the `collection` arguments are Promises, this method will resolve those values before executing and this method will return a `Promise`.
 * - If the `iteratee` returns a `Promise`, this method will reutrn a `Promise`
 *
 * This method executes in **series**. If the iteratee returns a `Promise`, it will wait till the `Promise` resolves before it executes the next iteration.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} fn The function to invoke. Receives two arguments, `value` and either `index` for arrays or `key` for objects.
 * @param {Iterable} iterable The Iterable to iterate over.
 * @returns {Iterable} The original Iterable.
 * @example
 *

 */
const forEach = defn(
  'forEach',

  [Function, Iterable, () => Iterable],
  (func, iterable) => iterableForEach(iterable, func),

  [Iterable, Function, () => Iterable],
  iterableForEach
)

export default forEach
