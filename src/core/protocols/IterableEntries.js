import Function from '../types/Function'
import protocol from '../protocol'

/**
 * Implementations of this protocol should return an iterator of the key/value pairs of
 * this value. This implementation adheres to implementations followed by
 * Javascript and Immutable JS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries?v=example
 * https://facebook.github.io/immutable-js/docs/#/Collection/entries
 */
const IterableEntries = protocol({
  entries: Function
})

export default IterableEntries
