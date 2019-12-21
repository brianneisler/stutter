import anyIsObject from '../util/anyIsObject'
import anyIsString from '../util/anyIsString'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const MetaObject = defineAny(
  'lang.DefinitionsObject',
  'A type representing an Object with meta data for a value',

  definitionToType({
    is: (any) => anyIsObject(any) && anyIsString(any.description)
  })
)

export default MetaObject
