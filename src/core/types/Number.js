import isNumber from '../isNumber'
import type from '../type'

export default type('Number', {
  is(value) {
    return isNumber(value)
  }
})
