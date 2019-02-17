import Any from './Any'
import Self from './Self'
import Typed from '../protocols/Typed'
import _Type from '../util/js/Type'
import anyIsType from '../util/anyIsType'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import fn from '../fn'

const Type = defineAny(
  'Type',
  'A generic type represeting a type itself',
  definitionToType({
    class: _Type,
    is: (any) => anyIsType(any),
    to: () => {
      throw new Error('Cannot convert Type to any other type')
    },

    protocols: [
      Typed,
      {
        is: fn([Self, Any], (self, any, ...rest) => self.is(any, ...rest)),
        to: fn([Self, Any], (self, any) => self.to(any))
      }
    ]
  })
)

export default Type
