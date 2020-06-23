import { Any, Iterator } from './types'
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
  {
    description: 'This method generates an iterator for the given value',
    since: 'v0.1.0'
  },

  [Any, () => Iterator],
  anyToIterator
)

export default iterator
