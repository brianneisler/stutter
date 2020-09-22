import _Symbol from '../classes/Symbol'
import anyIsSymbol from '../util/anyIsSymbol'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Symbol = defineAny(
  'lang.Symbol',
  {
    description: 'A type representing a Symbol.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Symbol,
    is: anyIsSymbol
  })
)

export default Symbol
