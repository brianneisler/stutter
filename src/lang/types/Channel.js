import _Channel from '../classes/Channel'
import anyIsChannel from '../util/anyIsChannel'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
// import definitionsToFn from '../util/definitionsToFn'

const Channel = defineAny(
  'lang.Channel',
  {
    description: 'A high-level, list-like object',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Channel,
    is: anyIsChannel,
    protocols: []
  })
)

export default Channel
