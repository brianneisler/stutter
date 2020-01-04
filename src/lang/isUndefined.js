// required
import Undefined from './types/Undefined'
import defn from './defn'
import is from './is'

const isUndefined = defn(
  'lang.isUndefined',
  {
    description: 'Checks if `any` is `undefined`',
    since: 'v0.2.0'
  },

  is(Undefined)
)

export default isUndefined
