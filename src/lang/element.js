import Any from './types/Any'
import Element from './types/Element'
import anyToElement from './util/anyToElement'
import defn from './defn'

const element = defn(
  'lang.element',
  {
    description:
      'Wraps the value in an Element instance. This is useful when you want to tell a function to treat the given value as a Element, such as in append.',
    since: 'v0.2.0'
  },

  [Any, () => Element],
  (any) => anyToElement(any)
)

export default element
