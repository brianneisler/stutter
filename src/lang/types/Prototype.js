import anyIsPrototype from '../util/anyIsPrototype'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Prototype = defineAny(
  'lang.Prototype',
  {
    description:
      'A Prototype object is the object representing an object instances prototype chain'
  },
  definitionToType({
    is: anyIsPrototype
  })
)

export default Prototype
