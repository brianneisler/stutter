import _Symbol from '../util/js/Symbol'
import anyIsSymbol from '../util/anyIsSymbol'
import deftype from '../deftype'

const Symbol = deftype('Symbol', 'A type representing a Symbol.', {
  class: _Symbol,
  is: anyIsSymbol
})

export default Symbol
