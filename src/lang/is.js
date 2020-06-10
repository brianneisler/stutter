// required
import Any from './types/Any'
import Boolean from './types/Boolean'
import Function from './types/Function'
import Type from './types/Type'
import anyIs from './util/anyIs'
import defn from './defn'

const is = defn(
  'lang.is',
  {
    description:
      'Checks whether `Any` is classified as an instance of the given `Type`',
    since: 'v0.2.0'
  },

  {
    definitions: [
      [Type, Any, () => Boolean],
      (type, any) => anyIs(any, type),

      [Any, Type, () => Boolean],
      (type, any) => anyIs(any, type),

      [Function, Any, () => Boolean],
      (fn, any) => (any != null && any.constructor === fn) || any instanceof fn,

      [Any, Function, () => Boolean],
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
