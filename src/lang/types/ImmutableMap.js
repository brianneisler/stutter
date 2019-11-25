import _ImmutableMap from '../util/js/ImmutableMap'
import anyIsImmutableMap from '../util/anyIsImmutableMap'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableMap = deftype('lang.ImmutableMap', 'A type representing a ImmutableMap.', {
  class: _ImmutableMap,
  is: anyIsImmutableMap
})

export default ImmutableMap
