import isArray from '../isArray'
import type from '../type'

export default type('Array', {
  is(value) {
    return isArray(value)
  }
})
