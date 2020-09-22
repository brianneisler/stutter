import _RegExp from '../classes/RegExp'
import anyIsRegExp from '../util/anyIsRegExp'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const RegExp = defineAny(
  'lang.RegExp',
  {
    description: 'A type representing a RegExp.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _RegExp,
    is: anyIsRegExp
  })
)

export default RegExp
