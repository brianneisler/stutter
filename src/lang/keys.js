import arrayFrom from '../lang/arrayFrom'
import arrayLikeKeys from '../lang/arrayLikeKeys'
import curry from '../common/curry'
import isArrayLike from './isArrayLike'
import isFunction from './isFunction'
import isMap from './isMap'
import reflectOwnKeys from '../lang/reflectOwnKeys'
import resolveWith from '../common/resolveWith'

const baseKeys = (collection) => {
  if (isArrayLike(collection)) {
    return arrayLikeKeys(collection)
  }

  if (isMap(collection)) {
    return arrayFrom(collection.keys())
  }

  if (collection != null && isFunction(collection.keys)) {
    return collection.keys()
  }

  return reflectOwnKeys(collection)
}

/**
 * Returns the keys of the given collection in an Array.
 *
 * Supports objects, Maps and array like values. If given an array like value, the indexes will be returned in string form.
 *
 * This method supports Promise values. If given a Promise it will return a Promise that will resolve to the keys of the resolved value of the Promise.
 *
 * Dispatches to the `keys` method of the `collection` if present (except on Map). If a `Map` is received an array of the `Map`'s keys will be returned.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {*} collection The collection to get the keys from
 * @returns {Array<string>|Promise<Array<string>>} The keys of the given collection
 * @example
 *
 * keys({ foo: 'bar', 'baz': 'bat', bim: 'bop' })
 * //=> ['foo', 'baz', 'bim']
 *
 * keys({})
 * //=> []
 *
 * keys(['fi', 'fo', 'fum'])
 * //=> [ '0', '1', '2' ]
 *
 * keys([])
 * //=> []
 *
 * keys('abc')
 * //=> ['0', '1', '2']
 *
 * keys('')
 * //=> []
 *
 * await keys(Promise.resolve({ a: 1, b: 2 })
 * //=> ['a', 'b']
 */
const keys = curry(resolveWith(baseKeys))

export default keys

export { baseKeys }
