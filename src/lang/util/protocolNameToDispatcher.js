import Self from '../types/Self'
import anySatisfies from './anySatisfies'
import filterProtocolsForFunctionName from './filterProtocolsForFunctionName'
import filterTypesForProtocol from './filterTypesForProtocol'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'
import functionMemoizeWith from './functionMemoizeWith'
import root from './root'

// NOTE BRN: This code may be useful
// const { namespaceName, valueName } = stringParseNames(name)
// const namespace = propGetNamespace(namespaceName)

const anyReduceSatisfyingTypes = (any, protocol) => {}

const filterSatisfiedProtocols = (protocols, any) => {
  // TODO BRN: instead of looping over an calling anySatisfies on all of these,
  // we should instead first call a function that creates an ImmutableMap that
  // maps a Type to a Protocol. Each type represent the protocol that it will
  // be choosen in the event that the Type is a match. We do this
  return protocols.filter((protocol) => anySatisfies(any, protocol))
}

const reduceSatisfyingTypes = (protocols, any) => {}

/**
 * @returns {ImmutableMap}
 */
const groupProtocols = functionMemoizeWith((protocols, functionName) =>
  protocols.groupBy((protocol) => {
    const definition = protocol.getDefinitions().get(functionName)
    return definition.indexOf(Self)
  })
)

const namespacesReduceFnsByProtocolFnName = functionMemoizeWith((namespaces, name) => {
  const functionProtocols = filterProtocolsForFunctionName(name)

  // Protocols should dispatch the same way that functions do. The only
  // difference is that the self type can be matched to any type that
  // implements the protocol

  const groupedProtocols = groupProtocols(functionProtocols, name)
  return groupedProtocols.reduce(
    (accum, protocols, idx) =>
      protocols.reduce((accum2, protocol) => {
        const types = filterTypesForProtocol(protocol, namespaces)
        return types.reduce((fns, type) => {
          fns.push(type.getProtocols().get(protocol)[name])
          return fns
        }, accum2)
      }, accum),
    []
  )
})

const protocolNameToDispatcher = (name, namespaces = root.namespaces) => {
  return {
    dispatch: (args, options) => {
      // NOTE BRN: We always make this call to get the protocols since the
      // namespace is immutable. This way in case the namespace has changed, we
      // will get the latest Protocols.

      const fns = namespacesReduceFnsByProtocolFnName(namespaces, name)

      // TODO BRN: At the moment this does not work. We can't treat these
      // protocol Fns like normal typed Fns because they contain a Self type.
      // This type has no way of knowing what type is meant by "Self". Instead,
      // the defined types should be swapped out with specific ones that replace
      // the Self type. This should happen when the protocol implementation is
      // defined.
      const dispatcher = fnsToMultiFnDispatcher(fns)

      // NOTE BRN: Remember that in order for a Protocol method to be matched,
      // not only does the Self arg need to be matched but so do the rest of the
      // parameters
      return dispatcher.dispatch(args, options)

      // NOTE: name is both the namespace and the name of the function
      // - get all protocols from all namespaces that have the given function
      //   name
      // - for each arg
      //   - get protocols that have Self position of current arg
      //   - for each protocol
      //     - get protocol implementation from Type that satisfies Protocol (if one exists)
      //     - if arg has a protocol implementation, return a function that executes
      //   that function implementation
      // - return null or empty array otherwise
    }
  }
}

export default protocolNameToDispatcher
