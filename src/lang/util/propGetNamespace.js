import root from './root'

/**
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} prop The prop to use to get the `Namespace`
 * @returns {Namespace} If a `Namespace` with the given prop exists it is
 * returned. Otherwise, `undefined`
 * @example
 *
 * objectValues({a: 1, b: 2, c: 3})
 * //=> [1, 2, 3]
 */
const propGetNamespace = (prop) => {
  if (!root.namespaces) {
    return
  }
  return root.namespaces.get(prop)
}

export default propGetNamespace
