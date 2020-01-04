// required
import Number from './types/Number'
import defn from './defn'
import is from './is'

const isNumber = defn(
  'lang.isNumber',
  {
    description: `Checks if 'any' is classified as a 'Number' primitive or object.
      **Note:** To exclude Infinity, -Infinity, and NaN, which are
      classified as numbers, use the 'isFinite' method.`,
    since: 'v0.2.0'
  },

  is(Number)
)

export default isNumber
