import isImmutableList from '../isImmutableList'
import type from '../type'

export default type('List', {
  is(value) {
    return isImmutableList(value)
  }
})
