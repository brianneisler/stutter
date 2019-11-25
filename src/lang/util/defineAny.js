import Namespace from './js/Namespace'
import SYMBOL_FN from '../constants/SYMBOL_FN'
import SYMBOL_META from '../constants/SYMBOL_META'
import anyIsObject from './anyIsObject'
import objectDefineProperty from './objectDefineProperty'
import propGetNamespace from './propGetNamespace'
import propSetNamespace from './propSetNamespace'
import stringParseNames from './stringParseNames'

/**
 * Defines `any` to a `Namespace` with the given `name` and `description`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang
 * @param {String} name The name to map in the namespace to this value
 * @param {String} description The description to assign to this value
 * @param {V} any The value to store in the namespace
 * @returns {V} The `any` parameter
 * @example
 *
 * defineAny('foo.bar', 'My foo bar function', () => {})
 */
const defineAny = (name, description, any) => {
  const { namespaceName, valueName } = stringParseNames(name)
  let namespace = propGetNamespace(namespaceName)
  // TODO BRN: Instead of having this auto namespace generation, it would be
  // better to have namespaces explicitly declared.
  if (!namespace) {
    namespace = new Namespace(namespaceName)
  }
  if (any[SYMBOL_FN]) {
    any[SYMBOL_FN].meta.name = valueName
  }
  if (anyIsObject(any)) {
    objectDefineProperty(any, SYMBOL_META, {
      value: {
        description,
        name: valueName,
        namespace
      }
    })
  }
  namespace = namespace.set(valueName, { description, value: any })
  propSetNamespace(namespaceName, namespace)
  return any
}

export default defineAny
