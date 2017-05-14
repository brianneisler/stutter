import isString from '../isString'
import type from '../type'

export default type('String', {
  is(value) {
    return isString(value)
  }
})
