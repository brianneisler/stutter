import _Array from '../util/js/Array'
import anyIsArray from '../util/anyIsArray'
import anyToArray from '../util/anyToArray'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Array = defineAny(
  'lang.Array',
  'A high-level, list-like object',
  definitionToType({
    class: _Array,
    is: anyIsArray,
    to: anyToArray
  })
)

export default Array
