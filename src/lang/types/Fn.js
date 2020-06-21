import _Fn from '../classes/Fn'
import anyIsFn from '../util/anyIsFn'
import anyToFn from '../util/anyToFn'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

/**
 * A `Type` representing a Stutter `Fn`
 *
 * @type Type
 * @since v0.1.0
 * @category lang
 * @example
 *
 */
const Fn = defineAny(
  'lang.Fn',
  'A high-level, Stutter executable bit of code',

  definitionToType({
    class: _Fn,
    is: anyIsFn,
    to: anyToFn
  })
)

export default Fn
