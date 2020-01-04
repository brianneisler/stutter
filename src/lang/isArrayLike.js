// required
import ArrayLike from './types/ArrayLike'
import defn from './defn'
import is from './is'

const isArrayLike = defn(
  'lang.isArrayLike',
  {
    description: 'Checks if `Any` is classified as an `ArrayLike` type.',
    since: 'v0.2.0'
  },

  is(ArrayLike)
)

export default isArrayLike
