import anyIsObject from '../util/anyIsObject'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const DefinitionsObject = defineAny(
  'lang.DefinitionsObject',
  {
    description: 'A type representing an Object with definitions for Fns',
    since: 'v0.1.0'
  },

  definitionToType({
    is: (any) => anyIsObject(any) && anyIsObject(any.definitions)
  })
)

export default DefinitionsObject
