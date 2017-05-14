import isFunction from '../isFunction'
import type from '../type'

export default type('Function', {
  is(value) {
    return isFunction(value)
  }
})
