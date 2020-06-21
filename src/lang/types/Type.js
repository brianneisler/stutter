import Any from './Any'
import Self from './Self'
import Typed from '../protocols/Typed'
import _Type from '../classes/Type'
import anyIsType from '../util/anyIsType'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import fn from '../fn'

const Type = defineAny(
  'lang.Type',
  'A generic type represeting a type itself',

  definitionToType({
    class: _Type,
    is: (any) => anyIsType(any),
    protocols: [
      Typed,
      {
        'lang.is': fn([Self, Any], (self, any, ...rest) => self.is(any, ...rest)),
        'lang.to': fn([Self, Any], (self, any) => self.to(any))
      }
    ],

    to: () => {
      throw new Error('Cannot convert Type to any other type')
    }
  })
)

export default Type
