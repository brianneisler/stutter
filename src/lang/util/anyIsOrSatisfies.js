import anyIs from './anyIs'
import anyIsProtocol from './anyIsProtocol'
import anyIsType from './anyIsType'
import anySatisfies from './anySatisfies'

/**
 * Checks if `any` is/satisfies `typeOrProtocol`
 *
 * @private
 * @function
 * @category lang.util
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @param {Type} typeOrProtocol The Type or Protocol to match
 * @returns {Boolean} Returns `true` if `any` is of `type`, otherwise returns `false`
 * @example
 *
 * anyIs(123, Number)
 * // => true
 *
 * anyIs(123, String)
 * // => false
 */
const anyIsOrSatisfies = (any, typeOrProtocol, meta) => {
  if (anyIsType(typeOrProtocol)) {
    return anyIs(any, typeOrProtocol, meta)
  } else if (anyIsProtocol(typeOrProtocol)) {
    return anySatisfies(any, typeOrProtocol, meta)
  }
  throw new Error(
    `typeOrProtocol must be either a Type or a Protocol. Instead was given ${typeOrProtocol}`
  )
}

export default anyIsOrSatisfies
