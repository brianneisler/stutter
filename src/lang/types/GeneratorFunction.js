// import _GeneratorFunction from '../util/js/GeneratorFunction'
import anyIsGeneratorFunction from '../util/anyIsGeneratorFunction'
import deftype from '../deftype'

const GeneratorFunction = deftype(
  'lang.GeneratorFunction',
  'A type representing a GeneratorFunction.',
  {
    // class: _GeneratorFunction,
    is: anyIsGeneratorFunction
  }
)

export default GeneratorFunction
