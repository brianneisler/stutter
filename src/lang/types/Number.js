import _Number from '../util/js/Number'
import anyIsNumber from '../util/anyIsNumber'
import anyToNumber from '../util/anyToNumber'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Number = defineAny(
  'lang.Number',
  'A numeric value',

  definitionToType({
    class: _Number,
    is: anyIsNumber,
    to: anyToNumber
  })
)

export default Number
