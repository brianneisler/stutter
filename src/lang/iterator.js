import { SYMBOL_ITERATOR } from '../constants'
import arrayLikeToIterator from '../lang/arrayLikeToIterator'
import curry from './curry'
import isArrayLike from '../lang/isArrayLike'
import isIndexedIterator from '../lang/isIndexedIterator'
import isIterable from '../lang/isIterable'
import isIterator from '../lang/isIterator'
import isKeyedIterator from '../lang/isKeyedIterator'
import isObjectLike from '../lang/isObjectLike'
import iteratorResolver from './util/iteratorResolver'
import objectToIterator from '../lang/objectToIterator'

const baseIterator = (value, start = 'START') => {
  if (isIterator(value)) {
    if (isIndexedIterator(value) || isKeyedIterator(value)) {
      return value
    }
    return iteratorResolver(value, start)
  }
  if (isArrayLike(value)) {
    return arrayLikeToIterator(value, start)
  }
  if (isIterable(value)) {
    return iteratorResolver(value[SYMBOL_ITERATOR](), start)
  }
  if (isObjectLike(value)) {
    return objectToIterator(value, start)
  }
  throw new Error(
    `iterator method expected to receive an iterable value. Instead the method was given ${value}.`
  )
}

/**
 * This method generates an iterator for the given value
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {Function} fn The iteratee Function
 * @param  {*} collection The collection or iterator to iterate over
 * @returns {*} The final value returned when the iteratee returns done or `undefined`
 * @example
 *
 * iterator(['a', 'b', 'c'])
 * //=> { next: () => { value: string, index: number, kdx: umber, done: boolean }}
 *
 * iterator('abc')
 * //=> { next: () => { value: string, index: number, kdx: umber, done: boolean }}
 *
 * iterator({ a: 1, b: 2, c: 3 })
 * //=> { next: () => { value: number, key: string, kdx: string, done: boolean }}
 */
const iterator = curry(baseIterator)

iterator.END = 'END'
iterator.START = 'START'

export default iterator

export { baseIterator }
