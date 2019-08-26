import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilterTypes from './namespacesFilterTypes'
import root from './root'

const namespacesFilterTypesForProtocol = functionMemoizeWith((namespaces, protocol) => {
  const types = namespacesFilterTypes(namespaces)
  return types.filter((type) => type.getProtocols().has(protocol)).toList()
})

/**
 * Filter through all of the existing `Types`s in all `Namespace`s to find the
 * `Type`s that have implementations for the given `Protocol`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Protocol} protocol The `Protocol` to use to filter the `Type`s
 * @returns {List<Type>} a Sequence of `Type`s found for the `Protocol`.
 * @example
 *
 */
const filterTypesForProtocol = (protocol, namespaces = root.namespaces) =>
  namespacesFilterTypesForProtocol(namespaces, protocol)

export default filterTypesForProtocol
