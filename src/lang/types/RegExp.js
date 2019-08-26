import _RegExp from '../util/js/RegExp'
import anyIsRegExp from '../util/anyIsRegExp'
import deftype from '../deftype'

const RegExp = deftype('RegExp', 'A type representing a RegExp.', {
  class: _RegExp,
  is: anyIsRegExp
})

export default RegExp
