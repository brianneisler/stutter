import anyIsGenerator from '../util/anyIsGenerator'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Generator = defineAny(
  'lang.Generator',
  {
    description: 'A type representing a Generator.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsGenerator
  })
)

export default Generator
