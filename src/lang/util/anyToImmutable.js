import Immutable from 'immutable'

/**
 * Converts `any` to an Immutable data object
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {number} Returns the new Immutable data.
 * @example
 *
 * anyToImmutable({ foo: 'bar' })
 * //=> ImmutableMap { foo: 'bar' }
 *
 * anyToImmutable([ 'abc' ])
 * //=> ImmutableList [ 'abc' ]
 *
 * anyToImmutable({ foo: ['bar'] })
 * //=> ImmutableMap { foo: ImmutableList [ 'bar' ] }
 *
 * anyToImmutable(3.2)
 * //=> 3.2
 */
const anyToImmutable = (any) => Immutable.fromJS(any)

export default anyToImmutable
