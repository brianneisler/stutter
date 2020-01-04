// required
import Immutable from './types/Immutable'
import defn from './defn'
import is from './is'

const isImmutable = defn(
  'isImmutable',
  {
    description: 'Checks if `Any` is classified as an `Immutable` type.',
    since: 'v0.2.0'
  },

  is(Immutable)
)

export default isImmutable
