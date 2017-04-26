import deftype from '../deftype'
import isImmutableSet from '../isImmutableSet'

export default deftype('Set', {
  is(value) {
    return isImmutableSet(value)
  }
})
