import _ImmutableOrderedMap from '../util/js/ImmutableOrderedMap'
import anyIsImmutableOrderedMap from '../util/anyIsImmutableOrderedMap'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableOrderedMap = deftype(
  'ImmutableOrderedMap',
  'A type representing a ImmutableOrderedMap.',
  {
    class: _ImmutableOrderedMap,
    is: anyIsImmutableOrderedMap
  }
)

export default ImmutableOrderedMap
