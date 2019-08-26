import Symbol from '../util/js/Symbol'

/**
 * The `Symbol.iterator` well-known symbol specifies the default iterator for an object. Used by for...of.
 *
 * See [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) for more information.
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants
 */
const SYMBOL_ITERATOR = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

export default SYMBOL_ITERATOR
