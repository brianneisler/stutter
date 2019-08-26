import anyIsObject from '../util/anyIsObject'
import anyToObject from '../util/anyToObject'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import jsObject from '../util/js/Object'

const _Object = defineAny(
  'lang.Object',
  'A generic object',
  definitionToType({
    class: jsObject,
    is: anyIsObject,
    to: anyToObject
  })
)

export default _Object
