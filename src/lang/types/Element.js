import _Element from '../classes/Element'
import anyIsElement from '../util/anyIsElement'
import anyToElement from '../util/anyToElement'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Element = defineAny(
  'lang.Element',
  {
    description: 'An item contained within an Indexed value',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Element,
    is: anyIsElement,
    to: anyToElement
  })
)

export default Element
