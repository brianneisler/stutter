import _Buffer from '../classes/Buffer'
import Equatable from '../protocols/Equatable'
import anyIsBuffer from '../util/anyIsBuffer'
import bufferEquals from '../util/bufferEquals'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

import Any from './Any'
import Boolean from './Boolean'
import Self from './Self'

const Buffer = defineAny(
  'lang.Buffer',
  {
    description: 'A type for dealing with binary data directly.',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Buffer,
    is: anyIsBuffer,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          bufferEquals,

          [Any, Self, () => Boolean],
          (any, buffer) => bufferEquals(buffer, any)
        ])
      }
    ]
  })
)

export default Buffer
