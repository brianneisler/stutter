import _ImmutableStack from '../classes/ImmutableStack'
import anyIsImmutableStack from '../util/anyIsImmutableStack'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ImmutableStack = defineAny(
  'lang.ImmutableStack',
  {
    description: 'A type representing a ImmutableStack.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _ImmutableStack,
    is: anyIsImmutableStack
  })
)

export default ImmutableStack
