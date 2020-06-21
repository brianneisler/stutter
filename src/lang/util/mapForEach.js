import Map from '../classes/Map'

const { forEach } = Map.prototype

/**
 * This method executes a provided function once per each key/value pair in the Map object, in insertion order.
 *
 * See [Map.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Map} map The map to iterate over
 * @returns {Function} iteratee Function to execute for each element.
 * @example
 *
 * mapForEach(
 *   new Map([ [ 'a', 1 ] ]),
 *   (value, key, map) => console.log(value, key, map)
 * )
 */
const mapForEach = (map, iteratee) => forEach.call(map, iteratee)

export default mapForEach
