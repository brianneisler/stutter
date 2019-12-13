import anyIsImmutable from '../util/anyIsImmutable'
import deftype from '../deftype'

/**
 * @since v0.1.0
 */
const Immutable = deftype('lang.Immutable', 'A type representing a value that is Immutable.', {
  is: anyIsImmutable
})

export default Immutable
