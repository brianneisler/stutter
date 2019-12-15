import { baseTail } from './tail'
import curry from '../common/curry'
import defn from '../common/defn'

/**
 * Alias of the [tail](#tail) method.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @sig [a] -> [a]
 * @param {*} collection The collection to get the tail of
 * @returns {*} The tail of the given collection
 */
const rest = curry(defn('rest', baseTail))

export default rest
