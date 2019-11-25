import _String from '../util/js/String'
import anyIsString from '../util/anyIsString'
import anyToString from '../util/anyToString'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const String = defineAny(
  'lang.String',
  'A text value',
  definitionToType({
    class: _String,
    is: anyIsString,
    to: anyToString
  })
)

export default String
