import { TO_STRING_TAG } from '../../constants/Symbol'
import ImmutableList from './ImmutableList'
import fnsDispatch from '../fnsDispatch'
import fnsGetAllDispatchableFns from '../fnsGetAllDispatchableFns'
import namespacesReduceFnsByProtocolFnName from '../namespacesReduceFnsByProtocolFnName'

/**
 * Note: This class is **immutable**
 *
 * This class represents a Dispatcher which dispatches messages to Fns
 */
class Dispatcher {
  /**
   * Create a `Dispatcher`
   * @param {{
   *   fns: ImmutableList<Fn>,
   *   name: String, namespaces:
   *   ImmutableMap<String, Namespace
   * }} options
   */
  constructor({ fns, name, namespaces }) {
    this.fns = fns || ImmutableList()
    this.name = name
    this.namespaces = namespaces
    this.cachedFns = this.fns
    this.protocolFns = null
  }

  get [TO_STRING_TAG]() {
    return 'Dispatcher'
  }

  getFns() {
    if (this.name && this.namespaces) {
      // NOTE BRN: We always make this call to get the protocols since the
      // namespace is immutable. This way in case the namespace has changed, we
      // will get the latest Protocols.

      const fns = namespacesReduceFnsByProtocolFnName(
        this.namespaces,
        this.name
      )
      if (fns === this.protocolFns) {
        return this.cachedFns
      }
      this.protocolFns = fns
      this.cachedFns = this.fns.concat(fns)
    }
    return this.cachedFns
  }

  dispatch(context, args, options) {
    return fnsDispatch(this.getFns(), this, context, args, options)
  }

  getAllDispatchableFns() {
    return fnsGetAllDispatchableFns(this.getFns())
  }

  update(updates) {
    // NOTE BRN: We only update the internal fns and not the fns over Protocol
    const updatedFns = this.fns.map((fn) => fn.update(updates))
    if (!this.fns.equals(updatedFns)) {
      return new Dispatcher({
        fns: updatedFns,
        name: this.name,
        namespaces: this.namespaces
      })
    }
    return this
  }
}

export default Dispatcher
