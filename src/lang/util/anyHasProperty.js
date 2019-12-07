import anyIsNil from './anyIsNil'
import objectHasOwnProperty from './objectHasOwnProperty'

/**
 * Checks the given `any` for property `prop`
 *
 * @private
 * @function
 * @category lang.util
 * @since v0.1.0
 * @param {*} any The value to check for 'prop'.
 * @param {Prop} prop The prop to check `any` for
 * @returns {boolean} Returns true if the given `any` has the property `prop`
 * @example
 *
 * anyHasProperty('foo', {foo: 'bar'})
 * //=> true
 *
 * anyHasProperty('foo', new Map([['foo', 'bar']])) // Map keys are not props
 * //=> false
 */
const anyHasProperty = (any, prop) => {
  if (anyIsNil(any)) {
    return false
  }
  return objectHasOwnProperty(any, prop)
}

export default anyHasProperty
