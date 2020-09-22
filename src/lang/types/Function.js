import _Function from '../classes/Function'
import anyIsFunction from '../util/anyIsFunction'
import anyToFunction from '../util/anyToFunction'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Function = defineAny(
  'lang.Function',
  {
    description: 'A low-level, Javascript bit of code',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Function,
    is: anyIsFunction,
    to: anyToFunction
  })
)

export default Function
