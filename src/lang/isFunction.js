// required
import Function from './types/Function'
import defn from './defn'
import is from './is'

const isFunction = defn(
  'lang.isFunction',
  {
    description: 'Checks if `value` is classified as a `Function`.',
    since: 'v0.2.0'
  },

  is(Function)
)

export default isFunction
