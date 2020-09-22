import _NaN from '../classes/NaN'
import anyIsNaN from '../util/anyIsNaN'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const NaN = defineAny(
  'lang.NaN',
  {
    description: 'A type representing javascript NaN.',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _NaN,
    is: anyIsNaN
  })
)

export default NaN
