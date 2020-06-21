import Any from './Any'
import Equatable from '../protocols/Equatable'
import Self from './Self'
import _Boolean from '../classes/Boolean'
import anyIsBoolean from '../util/anyIsBoolean'
import anyToBoolean from '../util/anyToBoolean'
import booleanEquals from '../util/booleanEquals'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

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
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Self],
          booleanEquals,

          [Any, Self, () => Self],
          booleanEquals
        ])
      }
    ],
    to: anyToBoolean
  })
)

export default Boolean
