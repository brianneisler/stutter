// required
import { Any, Iterator } from './types'
import { ITERATOR_END, ITERATOR_START } from './constants'
import { anyToIterator } from './util'
import defn from './defn'

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
const iterator = defn(
  'lang.iterator',
  'This method generates an iterator for the given value',

  [Any, () => Iterator],
  anyToIterator
)

iterator.END = ITERATOR_END
iterator.START = ITERATOR_START

export default iterator
