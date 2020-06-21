import anyIsGeneratorFunction from '../util/anyIsGeneratorFunction'
import deftype from '../deftype'

const GeneratorFunction = deftype(
  'lang.GeneratorFunction',
  'A type representing a GeneratorFunction.',
  {
    is: anyIsGeneratorFunction
  }
)

export default GeneratorFunction
