import isImmutableSet from '../isImmutableSet'
import type from '../type'

export default type('Set', {
  is(value) {
    return isImmutableSet(value)
  }
})
