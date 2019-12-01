import anyIsArray from './anyIsArray'

/**
 * Checks if `any` is a Path.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a property name, else `false`.
 * @example
 *
 * anyIsPath([])
 * //=> true
 *
 * anyIsPath(['foo'])
 * //=> true
 *
 * anyIsPath(['foo', 'bar'])
 * //=> true
 *
 * anyIsPath([Symbol('abc')])
 * //=> true
 *
 * anyIsPath([123, undefined, null])
 * //=> true
 *
 * anyIsPath([ {}, [], new Map()])
 * //=> true
 *
 * anyIsPath(new String('foo'))
 * //=> false
 *
 * anyIsPath(123)
 * //=> false
 *
 * anyIsPath(true)
 * //=> false
 *
 * anyIsPath(null)
 * //=> false
 *
 * anyIsPath(undefined)
 * //=> false
 *
 * anyIsPath({})
 * //=> false
 */
const anyIsPath = (any) => anyIsArray(any)

export default anyIsPath
