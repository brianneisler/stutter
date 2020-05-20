import { NO_MATCH } from '../../constants/ErrorCode'
import { TO_STRING_TAG } from '../../constants/Symbol'
import buildException from '../buildException'
import fnsDispatch from '../fnsDispatch'
import fnsGetAllDispatchableFns from '../fnsGetAllDispatchableFns'
import namespacesReduceFnsByProtocolFnName from '../namespacesReduceFnsByProtocolFnName'

/**
 * Note: This class is **immutable**
 *
 * This class represents a ProtocolDispatcher which dispatches messages to Fns
 * over a Protocol
 */
class ProtocolDispatcher {
  /**
   * Create a `ProtocolDispatcher`
   * @param {String} name
   * @param {ImmutableList<Namespace>} namespaces
   */
  constructor(name, namespaces) {
    this.name = name
    this.namespaces = namespaces
  }

  get [TO_STRING_TAG]() {
    return 'ProtocolDispatcher'
  }

  dispatch(context, args, options) {
    // NOTE BRN: We always make this call to get the protocols since the
    // namespace is immutable. This way in case the namespace has changed, we
    // will get the latest Protocols.

    const fns = namespacesReduceFnsByProtocolFnName(this.namespaces, this.name)
    if (fns.length === 0) {
      if (options.multi) {
        return []
      }
      throw buildException(context.callstack.peek(), {
        callstack: context.callstack,
        code: NO_MATCH
      })
        .expected.arguments(args)
        .toMatchDispatcher(this)
    }

    // NOTE BRN: Remember that in order for a Protocol method to be matched,
    // not only does the Self arg need to be matched but so do the rest of the
    // parameters
    return fnsDispatch(fns, context, args, options)
  }

  getAllDispatchableFns() {
    const fns = namespacesReduceFnsByProtocolFnName(this.namespaces, this.name)
    return fnsGetAllDispatchableFns(fns)
  }

  update() {
    // NOTE BRN: Updates in a protocol do no propogate down the protocol
    // functions. Those are managed by the Type that implements the Protocol.
    return this
  }
}

export default ProtocolDispatcher
