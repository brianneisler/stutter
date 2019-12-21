import Namespace from './js/Namespace'
import SYMBOL_FN from '../constants/SYMBOL_FN'
import SYMBOL_META from '../constants/SYMBOL_META'
import anyIsObject from './anyIsObject'
import anyIsString from './anyIsString'
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
const defineAny = (name, meta, any) => {
  const { namespaceName, valueName } = stringParseNames(name)
  if (any[SYMBOL_FN]) {
    any[SYMBOL_FN].meta.name = valueName
  }

  if (anyIsString(meta)) {
    meta = {
      description: meta,
      name: valueName,
      namespace: namespaceName
    }
  } else {
    meta = {
      ...meta,
      name: valueName,
      namespace: namespaceName
    }
  }
  if (anyIsObject(any)) {
    objectDefineProperty(any, SYMBOL_META, {
      value: meta
    })
  }
  let namespace = propGetNamespace(namespaceName)
  // TODO BRN: Instead of having this auto namespace generation, it would be
  // better to have namespaces explicitly declared.
  if (!namespace) {
    namespace = new Namespace(namespaceName)
  }
  namespace = namespace.set(valueName, { meta, value: any })
  propSetNamespace(namespaceName, namespace)
  return any
}

export default defineAny
