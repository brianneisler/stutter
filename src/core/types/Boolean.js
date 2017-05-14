import isBoolean from '../isBoolean'
import type from '../type'

export default type('Boolean', {
  is(value) {
    return isBoolean(value)
  }
})
