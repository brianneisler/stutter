import Symbol from '../util/js/Symbol'

/**
 * The `Symbol.for('@@op')` defines an operation for a `GeneratorCoroutine` to evaluate
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants
 */
const SYMBOL_OP = Symbol.for('@@op')

export default SYMBOL_OP
