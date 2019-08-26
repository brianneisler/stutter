import { anyIsFunction } from './util'
import Any from './types/Any'
import Function from './types/Function'
import Type from './protocols/Type'
import defn from './defn'

/**
 * Convert `any` to an instance of the supplied constructor.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Type} type A type
 * @param {*} any The value to convert
 * @returns {Type.class}
 * @example
 *
 * to(Array, 'abc')
 * //=> ['a', 'b', 'c']
 *
 * to(Number, '1')
 * //=> 1
 *
 * to(Boolean, 1)
 * //=> true
 *
 * to(Boolean, 0)
 * //=> false
 */
const to = defn('to', [Function, Any], (fn, any) => fn(any))

export default to
