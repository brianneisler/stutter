import Any from './types/Any'
import PlainObject from './types/PlainObject'
import String from './types/String'
import buildMultiFn from './util/buildMultiFn'
import def from './def'
import fn from './fn'
import protocolNameToDispatcher from './util/protocolNameToDispatcher'

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
  [String, String, PlainObject],
  (name, description, { definitions, options }) =>
    def(
      name,
      description,
      // NOTE BRN: The protocol multi function needs to come first in order for
      // protocols to be checked before the base level functions are checked.
      fn({
        definitions: [buildMultiFn(protocolNameToDispatcher(name)), ...definitions],
        options
      })
    ),

  [String, PlainObject],
  (name, definitionsObject) => defn(name, '', definitionsObject),

  [String, String, Any],
  (name, description, ...definitions) =>
    def(
      name,
      description,
      // NOTE BRN: The protocol multi function needs to come first in order for
      // protocols to be checked before the base level functions are checked.
      fn(buildMultiFn(protocolNameToDispatcher(name)), ...definitions)
    ),

  [String, Any],
  (name, ...definitions) => defn(name, '', ...definitions)
)

export default defn
