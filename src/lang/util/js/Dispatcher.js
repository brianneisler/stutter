import { TO_STRING_TAG } from '../../constants/Symbol'
import fnsDispatch from '../fnsDispatch'
import fnsGetAllDispatchableFns from '../fnsGetAllDispatchableFns'

/**
 * Note: This class is **immutable**
 *
 * This class represents a Dispatcher which dispatches messages to Fns
 */
class Dispatcher {
  /**
   * Create a `Dispatcher`
   * @param {ImmutableList<Fn>} fns
   */
  constructor(fns) {
    this.fns = fns
  }

  get [TO_STRING_TAG]() {
    return 'Dispatcher'
  }

  dispatch(context, args, options) {
    return fnsDispatch(this.fns, context, args, options)
  }

  getAllDispatchableFns() {
    return fnsGetAllDispatchableFns(this.fns)
  }

  update(updates) {
    // TODO BRN: Update fns to be an ImmutableList, this way we can quickly check
    // for equality at the end and return the same Dispatcher if nothing has
    // chnaged
    const updatedFns = this.fns.map((fn) => fn.update(updates))
    if (!this.fns.equals(updatedFns)) {
      return new Dispatcher(updatedFns)
    }
    return this
  }
}

export default Dispatcher
