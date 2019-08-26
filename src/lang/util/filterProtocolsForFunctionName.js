import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilterProtocols from './namespacesFilterProtocols'
import root from './root'

const namespacesFilterProtocolsForFunctionName = functionMemoizeWith((namespaces, functionName) => {
  const protocols = namespacesFilterProtocols(namespaces)
  return protocols.filter((protocol) => protocol.getDefinitions().has(functionName)).toList()
})

/**
 * Filter through all of the existing `Protocols`s in all `Namespace`s to find the
 * `Protocol`s that have the given `functionName`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} functionName The name of the function
 * @returns {Seq<Protocol>} A Sequence of `Protocol`s found for the `functionName`.
 * @example
 *
 */
const filterProtocolsForFunctionName = (functionName, namespaces = root.namespaces) =>
  namespacesFilterProtocolsForFunctionName(namespaces, functionName)

export default filterProtocolsForFunctionName
