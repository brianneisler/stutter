import isImmutableMap from '../isImmutableMap'
import type from '../type'

export default type('Map', {
  is(value) {
    return isImmutableMap(value)
  }
})
