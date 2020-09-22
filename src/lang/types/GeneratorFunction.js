import anyIsGeneratorFunction from '../util/anyIsGeneratorFunction'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const GeneratorFunction = defineAny(
  'lang.GeneratorFunction',
  {
    description: 'A type representing a GeneratorFunction.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsGeneratorFunction
  })
)

export default GeneratorFunction
