import Symbol from '../util/js/Symbol'

/**
 * The `Symbol.for('@@fn')` defines an Fn attached to a function
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const FN = Symbol.for('@@fn')

/**
 * The `Symbol.iterator` well-known symbol specifies the default iterator for an object. Used by for...of.
 *
 * See [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) for more information.
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const ITERATOR =
  typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

/**
 * The `Symbol.for('@@meta')` defines a set of meta data on an object
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const META = Symbol.for('@@meta')

/**
 * The `Symbol.for('@@toSignature')` defines a string signature for the object
 *
 * @private
 * @type {Symbol}
 * @since v0.2.0
 * @category lang.constants.Symbol
 */
export const TO_SIGNATURE = Symbol.for('@@toSignature')

/**
 * The `Symbol.toStringTag` well-known symbol is a string valued property that
 * is used in the creation of the default string description of an object. It
 * is accessed internally by the
 * [`Object.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
 * method.
 *
 * @private
 * @type {Symbol}
 * @since v0.1.0
 * @category lang.constants.Symbol
 */
export const TO_STRING_TAG = Symbol.toStringTag
