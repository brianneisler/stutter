import Any from './types/Any'
import Function from './types/Function'
import Type from './types/Type'
import anyIs from './util/anyIs'
import defn from './defn'

/**
 * @since v0.1.0
 * @param {Type} type A type
 * @param {Any} any The value to test
 * @returns {Boolean}
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
  'Checks whether `Any` is classified as an instance of the given `Type`',

  {
    definitions: [
      [Type, Any],
      (type, any) => anyIs(any, type),

      [Any, Type],
      (type, any) => anyIs(any, type),

      [Function, Any],
      (fn, any) => (any != null && any.constructor === fn) || any instanceof fn,

      [Any, Function],
      (fn, any) => (any != null && any.constructor === fn) || any instanceof fn
    ],
    options: {
      curry: true,
      handleExceptions: true,

      // NOTE BRN: We don't resolve values for the `is` method because we need
      // to be able to determine types such as Op, Promise, Generator, etc
      // without resolving them.
      resolve: false
    }
  }
)

export default is
