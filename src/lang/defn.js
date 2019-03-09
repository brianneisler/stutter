import { Any, Self, String } from './types'
import {
  anySatisfies,
  dispatcherToMultiFunction,
  filterTypesForProtocol,
  functionMemoizeWith,
  propGetNamespace,
  stringParseNames
} from './util'
import Seq from './util/js/Seq'
import def from './def'
import filterProtocolsForFunctionName from './util/filterProtocolsForFunctionName'
import fn from './fn'
import functionsToMultiFunctionDispatcher from './util/functionsToMultiFunctionDispatcher'
import root from './util/root'

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

const namespacesReduceFunctionsByProtocolFunctionName = functionMemoizeWith((namespaces, name) => {
  const functionProtocols = filterProtocolsForFunctionName(name)

  // Protocols should dispatch the same way that functions do. The only
  // difference is that the self type can be matched to any type that
  // implements the protocol

  const groupedProtocols = groupProtocols(functionProtocols, name)

  return groupedProtocols.reduce(
    (accum, protocols, idx) =>
      protocols.reduce((accum2, protocol) => {
        const types = filterTypesForProtocol(protocol, namespaces)
        return types.reduce((funcs, type) => {
          const func = type.getProtocols().get(protocol)[name]
          funcs.push(func)
          return funcs
        }, accum2)
      }, accum),
    []
  )
})

const protocolDispatcher = (name, namespaces = root.namespaces) => {
  return {
    dispatch: (args, options) => {
      // NOTE BRN: We always make this call to get the protocols since the
      // namespace is immutable. This way in case the namespace has changed, we
      // will get the latest Protocols.

      const funcs = namespacesReduceFunctionsByProtocolFunctionName(namespaces, name)
      const dispatcher = functionsToMultiFunctionDispatcher(funcs)

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
    def(name, description, fn(...definitions, dispatcherToMultiFunction(protocolDispatcher(name)))),

  [String, Any],
  (name, ...definitions) => defn(name, '', ...definitions)
)

export default defn
