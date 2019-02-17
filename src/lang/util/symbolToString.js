import Symbol from './js/Symbol'

const { toString } = Symbol.prototype

/**
 * Returns a string representing the specified [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) object.
 *
 * Note: known bugs with the [`Symbol.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) method or lack of support are addressed using the core-js polyfill provided by babel
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Symbol} symbol The Symbol to convert to a string
 * @returns {string} A string representing the given [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) object.
 * @example
 *
 * symbolToString(Symbol('foo')) //=> 'Symbol(foo)'
 */
const symbolToString = (symbol) => toString.call(symbol)

export default symbolToString
