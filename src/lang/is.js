import Any from './types/Any'
import Function from './types/Function'
import Type from './types/Type'
import anyIs from './util/anyIs'
import defn from './defn'

/**
 * See if an object (`val`) is an instance of the supplied constructor. This function will check up the inheritance chain, if any.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Type} type A type
 * @param {*} any The value to test
 * @returns {boolean}
 * @example
 *
 * is(Object, {})
 * //=> true
 *
 * is(Number, 1)
 * //=> true
 *
 * is(Object, 1)
 * //=> false
 *
 * is(String, 's')
 * //=> true
 *
 * is(String, new String(''))
 * //=> true
 *
 * is(Object, new String(''))
 * //=> true
 *
 * is(Object, 's')
 * //=> false
 *
 * is(Number, {})
 * //=> false
 */
const is = defn(
  'lang.is',

  [Type, Any],
  (type, any) => anyIs(any, type),

  [Any, Type],
  (type, any) => anyIs(any, type),

  [Function, Any],
  (fn, any) => (any != null && any.constructor === fn) || any instanceof fn,

  [Any, Function],
  (fn, any) => (any != null && any.constructor === fn) || any instanceof fn
)

export default is
