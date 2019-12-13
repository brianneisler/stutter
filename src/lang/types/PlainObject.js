import anyIsPlainObject from '../util/anyIsPlainObject'
import anyToObject from '../util/anyToObject'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const PlainObject = defineAny(
  'lang.PlainObject',
  'A value that is a basic Object',

  definitionToType({
    is: anyIsPlainObject,
    to: anyToObject
  })
)

export default PlainObject
