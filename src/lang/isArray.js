// required
import Any from './types/Any'
import Array from './types/Array'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

const isArray = defn(
  'lang.isArray',
  {
    description: 'Checks if `Any` is classified as an `Array` type.',
    since: 'v0.2.0'
  },

  [Any, () => Boolean],
  is(Array)
)

export default isArray
