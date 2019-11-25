import anyIsImmutableCollection from '../util/anyIsImmutableCollection'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableCollection = deftype(
  'lang.ImmutableCollection',
  'A type representing a ImmutableCollection.',
  {
    is: anyIsImmutableCollection
  }
)

export default ImmutableCollection
