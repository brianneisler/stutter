import _Type from '../classes/Type'
import Typed from '../protocols/Typed'
import anyIsType from '../util/anyIsType'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

import Any from './Any'
import Self from './Self'

const Type = defineAny(
  'lang.Type',
  {
    description: 'A generic type represeting a type itself',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Type,
    is: (any) => anyIsType(any),
    protocols: [
      Typed,
      {
        'lang.is': definitionsToFn([
          [Self, Any],
          (self, any, ...rest) => self.is(any, ...rest)
        ]),
        'lang.to': definitionsToFn([[Self, Any], (self, any) => self.to(any)])
      }
    ],

    to: () => {
      throw new Error('Cannot convert Type to any other type')
    }
  })
)

export default Type
