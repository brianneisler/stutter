import { Any } from './types'
import { anyIsOp } from './util'
import defn from './defn'

/**
 * Determines if the value is an op.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 * isOp({
 *   ['@@redux-saga/IO']: 'op'
 * })
 * //=> true
 */
const isOp = defn('isOp', [Any], anyIsOp)

export default isOp
