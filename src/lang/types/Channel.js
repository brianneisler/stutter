import _Channel from '../classes/Channel'
import deftype from '../deftype'
import anyIsChannel from '../util/anyIsChannel'
import anyToChannel from '../util/anyToChannel'

const Channel = deftype(
  'lang.Channel',
  {
    description: 'A high-level, list-like object',
    since: 'v0.1.0'
  },

  {
    class: _Channel,
    is: anyIsChannel,
    protocols: [],
    to: anyToChannel
  }
)

export default Channel
