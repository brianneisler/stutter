import { NO_MATCH } from '../constants/ErrorCode'
import { META } from '../constants/Symbol'
import Self from '../types/Self'
import anyLog from './anyLog'
import buildException from './buildException'
import filterProtocolsForFunctionName from './filterProtocolsForFunctionName'
import filterTypesForProtocol from './filterTypesForProtocol'
import fnGetMeta from './fnGetMeta'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'
import functionMemoizeWith from './functionMemoizeWith'
import root from './root'

/**
 * @returns {ImmutableMap}
 */
const groupProtocols = functionMemoizeWith((protocols, functionName) =>
  protocols.groupBy((protocol) => {
    const definition = protocol.getDefinitions().get(functionName)
    return definition.indexOf(Self)
  })
)

const namespacesReduceFnsByProtocolFnName = functionMemoizeWith(
  (namespaces, name) => {
    const functionProtocols = filterProtocolsForFunctionName(name)

    // Protocols should dispatch the same way that functions do. The only
    // difference is that the self type can be matched to any type that
    // implements the protocol

    const groupedProtocols = groupProtocols(functionProtocols, name)
    return groupedProtocols.reduce(
      (accum, protocols) =>
        protocols.reduce((accum2, protocol) => {
          const types = filterTypesForProtocol(protocol, namespaces)
          return types.reduce((fns, type) => {
            fns.push(type.getProtocols().get(protocol)[name])
            return fns
          }, accum2)
        }, accum),
      []
    )
  }
)

const protocolNameToDispatcher = (name, namespaces = root.namespaces) => {
  return {
    dispatch: (context, args, options) => {
      // NOTE BRN: We always make this call to get the protocols since the
      // namespace is immutable. This way in case the namespace has changed, we
      // will get the latest Protocols.

      const fns = namespacesReduceFnsByProtocolFnName(namespaces, name)
      if (fns.length === 0) {
        if (options.multi) {
          return []
        }
        throw buildException(context.callstack.peek(), {
          callstack: context.callstack,
          code: ErrorCode.NO_MATCH
        })
          .expected.arguments(args)
          .toMatchDispatcher(this)
      }

      // console.log(`dispatching protocol: ${name}`)
      // anyLog(fns[0][META].self).push()
      const dispatcher = fnsToMultiFnDispatcher(fns)

      // NOTE BRN: Remember that in order for a Protocol method to be matched,
      // not only does the Self arg need to be matched but so do the rest of the
      // parameters
      return dispatcher.dispatch(context, args, options)
    },

    getAllPossibleFns() {
      const fns = namespacesReduceFnsByProtocolFnName(namespaces, name)
      const { length } = fns
      let possible = []
      for (let idx = 0; idx < length; idx++) {
        const fn = fns[idx]
        const meta = fnGetMeta(fn)
        if (meta.dispatcher) {
          possible = possible.concat(meta.dispatcher.getAllPossibleFns())
        } else {
          possible.push(fn)
        }
      }
      return possible
    }
  }
}

export default protocolNameToDispatcher
