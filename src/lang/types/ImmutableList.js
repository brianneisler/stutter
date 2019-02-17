import _ImmutableList from '../util/js/ImmutableList'
import anyIsImmutableList from '../util/anyIsImmutableList'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableList = deftype('ImmutableList', 'A type representing a ImmutableList.', {
  class: _ImmutableList,
  is: anyIsImmutableList
})

export default ImmutableList
