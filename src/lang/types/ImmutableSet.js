import _ImmutableSet from '../util/js/ImmutableSet'
import anyIsImmutableSet from '../util/anyIsImmutableSet'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableSet = deftype('ImmutableSet', 'A type representing a ImmutableSet.', {
  class: _ImmutableSet,
  is: anyIsImmutableSet
})

export default ImmutableSet