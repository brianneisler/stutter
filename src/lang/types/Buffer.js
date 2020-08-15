import _Buffer from '../classes/Buffer'
import deftype from '../deftype'
import fn from '../fn'
import Equatable from '../protocols/Equatable'
import anyIsBuffer from '../util/anyIsBuffer'
import bufferEquals from '../util/bufferEquals'

import Any from './Any'
import Boolean from './Boolean'
import Self from './Self'

const Buffer = deftype(
  'lang.Buffer',
  {
    description: 'A type for dealing with binary data directly.',
    since: 'v0.1.0'
  },

  {
    class: _Buffer,
    is: anyIsBuffer,
    protocols: [
      Equatable,
      {
        'lang.equals': fn(
          [Self, Any, () => Boolean],
          bufferEquals,

          [Any, Self, () => Boolean],
          (any, buffer) => bufferEquals(buffer, any)
        )
      }
    ]
  }
)

export default Buffer
