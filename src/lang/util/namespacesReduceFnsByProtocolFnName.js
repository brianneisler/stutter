import ImmutableList from './js/ImmutableList'
import filterProtocolsForFunctionName from './filterProtocolsForFunctionName'
import filterTypesForProtocol from './filterTypesForProtocol'
import functionMemoizeWith from './functionMemoizeWith'
import protocolsGroupByFunctionName from './protocolsGroupByFunctionName'

/**
 * Reduces namespaces by the given Fn Protocol name and return only the list of
 * Fns that have the given Protocol function name
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {ImmutableList<Namespace>} namespaces An `ImmutableList` of
 * `Namespace` to search
 * @param {String} name The Protocol Fn name we are searching for
 * @returns {ImmutableList<Fn>} A List of `Fns`s found for the `Protocol` Fn name.
 * @example
 *
 */
const namespacesReduceFnsByProtocolFnName = functionMemoizeWith(
  (namespaces, name) => {
    const functionProtocols = filterProtocolsForFunctionName(name)

    // Protocols should dispatch the same way that functions do. The only
    // difference is that the self type can be matched to any type that
    // implements the protocol

    const groupedProtocols = protocolsGroupByFunctionName(
      functionProtocols,
      name
    )
    return groupedProtocols.reduce(
      (accum, protocols) =>
        protocols.reduce((accum2, protocol) => {
          const types = filterTypesForProtocol(protocol, namespaces)
          return types.reduce(
            (fns, type) => fns.push(type.getProtocols().get(protocol)[name]),
            accum2
          )
        }, accum),
      ImmutableList([])
    )
  }
)

export default namespacesReduceFnsByProtocolFnName
