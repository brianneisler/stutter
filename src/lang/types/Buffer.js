import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Self from './Self'
import _Buffer from '../classes/Buffer'
import anyIsBuffer from '../util/anyIsBuffer'
import bufferEquals from '../util/bufferEquals'
import deftype from '../deftype'
import fn from '../fn'

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
          bufferEquals
        )
      }
    ]
  }
)

export default Buffer
