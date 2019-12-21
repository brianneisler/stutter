import _Boolean from '../util/js/Boolean'
import anyIsBoolean from '../util/anyIsBoolean'
import anyToBoolean from '../util/anyToBoolean'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

/**
 * A `Type` representing a javascript `Boolean`
 *
 * @type Type
 * @since v0.1.0
 * @category lang
 * @example
 *
 */
const Boolean = defineAny(
  'lang.Boolean',
  'A Boolean represents one of two values: `true` or `false`',

  definitionToType({
    class: _Boolean,
    is: anyIsBoolean,
    to: anyToBoolean
  })
)

export default Boolean
