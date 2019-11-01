import _ImmutableStack from '../util/js/ImmutableStack'
import anyIsImmutableStack from '../util/anyIsImmutableStack'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableStack = deftype('ImmutableStack', 'A type representing a ImmutableStack.', {
  class: _ImmutableStack,
  is: anyIsImmutableStack
})

export default ImmutableStack