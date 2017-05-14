import Function from '../types/Function'
import protocol from '../protocol'

/**
 * Implementations of this protocol should return an iterator of the values of
 * this value. This implementation adheres to implementations followed by
 * Javascript and Immutable JS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values?v=example
 * https://facebook.github.io/immutable-js/docs/#/Collection/values
 */
const IterableValues = protocol({
  values: Function
})

export default IterableValues
