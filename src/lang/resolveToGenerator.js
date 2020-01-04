import Any from './types/Any'
import Generator from './types/Generator'
import anyResolveToGenerator from './util/anyResolveToGenerator'
import defn from './defn'

const resolveToGenerator = defn(
  'lang.resolveToGenerator',
  {
    description: 'Resolve the given value to a Generator',
    since: 'v0.2.0'
  },

  {
    definitions: [[Any, () => Generator], anyResolveToGenerator],
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

export default resolveToGenerator
