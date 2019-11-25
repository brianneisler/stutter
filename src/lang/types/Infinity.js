import anyIsInfinity from '../util/anyIsInfinity'
import deftype from '../deftype'

/**
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const Infinity = deftype(
  'lang.Infinity',
  'A type representing an inifnity numeber (positive or negative).',
  {
    is: anyIsInfinity
  }
)

export default Infinity
