import anyIsObject from '../util/anyIsObject'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const DefinitionsObject = defineAny(
  'lang.DefinitionsObject',
  'A type representing an Object with definitions for Fns',

  definitionToType({
    is: (any) => anyIsObject(any) && anyIsObject(any.definitions)
  })
)

export default DefinitionsObject
