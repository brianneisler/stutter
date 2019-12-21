import Any from './types/Any'
import defn from './defn'

const and = defn(
  'lang.and',
  {
    description:
      'Evaluates expressions one at a time, from left to right. If an expression returns logical false, that that value is returned, otherwise it returns the value of the last expression (which is logically true).',
    since: 'v0.2.0'
  },

  [Any, Any, () => Any],
  (valueA, valueB) => valueA && valueB
)

export default and
