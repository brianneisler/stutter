import baseKeys from './util/baseKeys'

/**
 * @param {Array|Object|Collection} collection
 * @returns {Iterator}
 */
export default function keys(collection) {
  return baseKeys(collection)
}
