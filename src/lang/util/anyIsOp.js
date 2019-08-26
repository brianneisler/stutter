import { SYMBOL_OP } from '../constants'

/**
 * Determines if `any` is an Op.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check
 * @returns {boolean}
 * @example
 *
 * anyIsOp({
 *   ['@@redux-saga/IO']: 'op'
 * })
 * //=> true
 */
const anyIsOp = (any) => !!(any && (any[SYMBOL_OP] || any['@@redux-saga/IO']))

export default anyIsOp
