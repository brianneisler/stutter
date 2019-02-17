import { Any, String } from './types'
import { dispatcherToMultiFunction, propGetNamespace, stringParseNames } from './util'
import def from './def'
import fn from './fn'

const protocolDispatcher = (name) => {
  // const { namespaceName, valueName } = stringParseNames(name)
  return {
    dispatch: (args, options) => {
      // NOTE BRN: We always get the namespace since it's immutable. This way in
      // case the namespace has changed, we will get the latest values.
      const namespace = propGetNamespace(namespaceName)
      // name is both the namespace and the name of the function
      // use namespaceName to get the namespace
      // get protocols based on function name
      // for each protocol
      // get arg in Self position of protocol
      // check if arg implements protocol
    }
  }
}

/**
 * Defines a function with a few predefined behaviours. Functions defined with this method will...
 * - [curry](#curry)
 * - [dispatch](#dispatcher)
 * - [resolve all args](#all)
 * - [validate args](#validate)
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {string} name The name of the method
 * @param {Function} fn The default function to execute if the named one does not exist on the last arg
 * @returns {Function} The wrapped function
 * @example
 *
 * const get = defn('get', (prop, value) => value[prop])
 * get('a', { a: 'foo' })
 * //=> 'foo'
 *
 * get({}, { a: 'foo' })
 * //=> undefined
 *
 * const get = defn('get', [String, Object], (prop, value) => value[prop])
 * get('a', { a: 'foo' })
 * //=> 'foo'
 *
 * get({}, { a: 'foo' })
 * //=> throws `Expected 'prop' parameter to be a String. Instead was given Object {}.`
 */
const defn = fn(
  [String, String, Any],
  (name, description, ...definitions) =>
    def(
      name,
      description,
      fn(definitions.push(dispatcherToMultiFunction(protocolDispatcher(name))))
    ),

  [String, Any],
  (name, ...definitions) => defn(name, '', ...definitions)
)

export default defn
