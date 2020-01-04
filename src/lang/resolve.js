import Any from './types/Any'
import Resolved from './types/Resolved'
import anyResolve from './util/anyResolve'
import defn from './defn'

const resolve = defn(
  'lang.resolve',
  {
    description: `Resolves a value.

      If the value is a Promise, this will return a Promise that will then resolve
      the returned value.

      Dispatches to the resolve method if it exists. If a resolve method returns a
      value that is also resolvable, this method will resolve that value as well.`,
    since: 'v0.2.0'
  },

  {
    definitions: [[Any, () => Resolved], anyResolve],
    options: {
      curry: true,
      handleExceptions: true,

      // NOTE BRN: We don't resolve values for the `resolveToGenerator` method
      // because the purpose of this function is to resolve. Thus we avoid
      // double resolving a value.
      resolve: false
    }
  }
)

export default resolve
