import _Number from '../classes/Number'
import anyIsNumber from '../util/anyIsNumber'
import anyToNumber from '../util/anyToNumber'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Number = defineAny(
  'lang.Number',
  {
    description: 'A numeric value',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Number,
    is: anyIsNumber,
    to: anyToNumber
  })
)

export default Number
