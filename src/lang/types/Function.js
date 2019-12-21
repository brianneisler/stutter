import _Function from '../util/js/Function'
import anyIsFunction from '../util/anyIsFunction'
import anyToFunction from '../util/anyToFunction'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

/**
 * A `Type` representing a javascript `Function`
 *
 * @type Type
 * @since v0.1.0
 * @category lang
 * @example
 *
 */
const Function = defineAny(
  'lang.Function',
  'A low-level, Javascript bit of code',

  definitionToType({
    class: _Function,
    is: anyIsFunction,
    to: anyToFunction
  })
)

export default Function
