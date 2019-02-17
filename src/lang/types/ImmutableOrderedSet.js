import _ImmutableOrderedSet from '../util/js/ImmutableOrderedSet'
import anyIsImmutableOrderedSet from '../util/anyIsImmutableOrderedSet'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableOrderedSet = deftype(
  'ImmutableOrderedSet',
  'A type representing a ImmutableOrderedSet.',
  {
    class: _ImmutableOrderedSet,
    is: anyIsImmutableOrderedSet
  }
)

export default ImmutableOrderedSet
