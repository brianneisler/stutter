import { defineAny, definitionsToFn } from './util'
import Any from './types/Any'
import String from './types/String'

/**
 * Defines a value to store in a namespace with the given name.
 *
 * @function
 * @since v0.1.0
 * @category lang
 *
 * @signature def<V>(name: String, docs: String, value: V) => V
 * @param {String} name The name to map in the namespace to this value
 * @param {String} description The description to assign to this value
 * @param {V} value The value to store in the namespace
 * @returns {V} The `value` parameter
 * @example
 *
 * def('foo.bar', 'My foo bar function', fn(() => {}))
 *
 * @signature def<V>(name: String, value: V) => V
 * @param {String} name The name to map in the namespace to this value
 * @param {V} value The value to store in the namespace
 * @returns {V} The `value` parameter
 * @example
 *
 * def('foo.bar', fn(() => {}))
 */
const def = definitionsToFn([
  [String, String, Any, () => Any],
  (name, description, value) => defineAny(name, description, value),

  [String, Any, () => Any],
  (name, value) => def(name, '', value)
])

export default def
