import defprotocol from '../defprotocol'
import Integer from '../types/Integer'
import Self from '../types/Self'

const Takeable = defprotocol(
  'lang.Takeable',
  {
    description:
      'A protocol for taking one or more values from a target Sequable and returns a Sequable of the same type with only the taken values',
    since: 'v0.2.0'
  },
  {
    'lang.take': [
      [Self, () => Self],
      [Self, Integer, () => Self]
    ]
  }
)

export default Takeable
