import isObject from '../isObject'
import type from '../type'

export default type('Object', {
  is(value) {
    return isObject(value)
  }
})
