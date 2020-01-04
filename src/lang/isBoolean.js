import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

const isBoolean = defn(
  'lang.isBoolean',
  {
    description: 'Checks if `Any` is classified as a `Boolean`.',
    since: 'v0.2.0'
  },

  is(Boolean)
)

export default isBoolean
