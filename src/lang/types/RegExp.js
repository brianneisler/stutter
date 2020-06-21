import _RegExp from '../classes/RegExp'
import anyIsRegExp from '../util/anyIsRegExp'
import deftype from '../deftype'

const RegExp = deftype('lang.RegExp', 'A type representing a RegExp.', {
  class: _RegExp,
  is: anyIsRegExp
})

export default RegExp
